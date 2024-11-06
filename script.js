document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Timeline animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => observer.observe(item));

    // Create matrix background
    function createMatrixBackground() {
        const matrixBg = document.createElement('div');
        matrixBg.className = 'matrix-bg';
        document.body.appendChild(matrixBg);

        for (let i = 0; i < 20; i++) {
            const line = document.createElement('div');
            line.className = 'matrix-line';
            line.style.left = `${Math.random() * 100}%`;
            line.style.animationDelay = `${Math.random() * 5}s`;
            matrixBg.appendChild(line);
        }
    }

    // Add code decorations
    function addCodeDecorations() {
        const codeSnippets = [
            '{ code: "awesome" }',
            '<div class="future" />',
            'while(coding) { improve++ }',
            'git commit -m "✨"'
        ];

        document.querySelectorAll('section').forEach(section => {
            const topRight = document.createElement('div');
            const bottomLeft = document.createElement('div');
            
            topRight.className = 'code-decoration top-right';
            bottomLeft.className = 'code-decoration bottom-left';
            
            topRight.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            bottomLeft.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            
            section.appendChild(topRight);
            section.appendChild(bottomLeft);
        });
    }

    // Section visibility animation
    function initSectionAnimations() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => section.classList.add('section-fade-up'));

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    }

    // Initialize all animations
    createMatrixBackground();
    addCodeDecorations();
    initSectionAnimations();

    // Add glitch effect to headings
    document.querySelectorAll('h1, h2').forEach(heading => {
        heading.classList.add('glitch');
        heading.setAttribute('data-text', heading.textContent);
    });

    // Add typing effect to hero subtitle
    document.querySelector('.lead').classList.add('typing');
}); 