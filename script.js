document.addEventListener('DOMContentLoaded', () => {
    // ============================
    // AOS (Animate On Scroll) Init
    // ============================
    AOS.init({
        duration: 800,
        once: true,
        offset: 80,
        easing: 'ease-out-cubic'
    });

    // ============================
    // Theme Toggle (Dark / Light)
    // ============================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlEl = document.documentElement;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        htmlEl.classList.add('light-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        htmlEl.classList.toggle('light-mode');
        const isLight = htmlEl.classList.contains('light-mode');
        if (isLight) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    // ============================
    // Navbar Scroll Effect
    // ============================
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 50);
        backToTop.classList.toggle('visible', scrollY > 400);
    });

    // Back to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ============================
    // Mobile Navigation
    // ============================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    function toggleNav() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
        overlay.classList.toggle('visible');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    }

    navToggle.addEventListener('click', toggleNav);
    overlay.addEventListener('click', toggleNav);

    // Close nav on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                toggleNav();
            }
        });
    });

    // ============================
    // Typing Animation
    // ============================
    const typingTexts = [
        'Full-Stack Developer',
        'Mobil Uygulama Geliştiricisi',
        'Yapay Zeka Tutkunu',
        'Problem Çözücü',
        'UI/UX Tasarımcısı'
    ];

    const typingElement = document.getElementById('typingText');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function typeText() {
        const currentText = typingTexts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typingSpeed = 500; // Pause before next word
        }

        setTimeout(typeText, typingSpeed);
    }

    typeText();

    // ============================
    // Cursor Glow Effect
    // ============================
    const cursorGlow = document.getElementById('cursorGlow');
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // ============================
    // Floating Particles
    // ============================
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth > 768 ? 30 : 12;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 20) + 's';
        particle.style.width = (2 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }

    // ============================
    // Animated Counters
    // ============================
    const counters = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }

    // ============================
    // Skill Bar Animation
    // ============================
    function animateSkillBars() {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.classList.add('animated');
        });
    }

    // ============================
    // Intersection Observer
    // ============================
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate counters when about section is visible
                if (entry.target.id === 'about' && !countersAnimated) {
                    animateCounters();
                    countersAnimated = true;
                }
                // Animate skill bars
                if (entry.target.id === 'skills') {
                    setTimeout(animateSkillBars, 400);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });

    // ============================
    // Active Nav Link on Scroll
    // ============================
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-link-cta)');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ============================
    // Smooth Scroll for Nav Links
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ============================
    // Tilt Effect on Skill Cards
    // ============================
    if (window.innerWidth > 768) {
        document.querySelectorAll('[data-tilt]').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        }); 
    }
});
