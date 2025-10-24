document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuButton && nav) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('nav-open');
            menuButton.setAttribute('aria-expanded', 
                nav.classList.contains('nav-open') ? 'true' : 'false');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('nav-open') &&
                !nav.contains(e.target) &&
                !menuButton.contains(e.target)) {
                nav.classList.remove('nav-open');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when window is resized to desktop size
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768) {
                    nav.classList.remove('nav-open');
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            }, 250);
        });
    }

    // Contact form handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const messageEl = document.getElementById('formMessage');
            messageEl.textContent = 'Thank you for contacting Kerala Consulting! We will get back to you soon.';
            messageEl.style.display = 'block';
            form.reset();
            
            // Scroll message into view
            messageEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
});