document.addEventListener('DOMContentLoaded', () => {
    const commands = [
        'whoami',
        'cat skills.json',
        'ls experience/',
        'cat education.txt',
        'contact --info'
    ];
    
    let currentCommand = '';
    let currentIndex = 0;
    let charIndex = 0;
    
    function typeCommand() {
        if (currentIndex < commands.length) {
            const command = commands[currentIndex];
            if (charIndex < command.length) {
                currentCommand += command[charIndex];
                document.querySelector('.active .command').textContent = currentCommand;
                charIndex++;
                setTimeout(typeCommand, 100);
            } else {
                setTimeout(() => {
                    currentCommand = '';
                    charIndex = 0;
                    currentIndex++;
                    const outputs = document.querySelectorAll('.output');
                    outputs[currentIndex - 1].style.display = 'block';
                    if (currentIndex < commands.length) {
                        const newCommandLine = createCommandLine();
                        document.querySelector('.terminal-content').appendChild(newCommandLine);
                        setTimeout(typeCommand, 500);
                    }
                }, 500);
            }
        }
    }
    
    function createCommandLine() {
        const div = document.createElement('div');
        div.className = 'command-line active';
        div.innerHTML = `
            <span class="prompt">$</span>
            <span class="command"></span>
        `;
        return div;
    }
    
    setTimeout(typeCommand, 1000);
}); 