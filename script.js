document.addEventListener('DOMContentLoaded', function() {
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
