document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;

    // Create mobile menu element dynamically based on nav links
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');
    const navLinks = document.querySelector('.nav-links').cloneNode(true);
    // Show links in mobile menu
    navLinks.style.display = 'flex';
    mobileMenu.appendChild(navLinks);

    // Add a close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="ph ph-x"></i>';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '1.5rem';
    closeBtn.style.right = '1.5rem';
    closeBtn.style.background = 'none';
    closeBtn.style.border = 'none';
    closeBtn.style.fontSize = '2rem';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.color = 'var(--text-main)';
    mobileMenu.appendChild(closeBtn);

    body.appendChild(mobileMenu);

    const toggleMenu = () => {
        mobileMenu.classList.toggle('open');
        body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Scroll Animations (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.fade-in-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
});
