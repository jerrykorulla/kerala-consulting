// Simple JS for contact form feedback

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('formMessage').textContent = 'Thank you for contacting Kerala Consulting! We will get back to you soon.';
            form.reset();
        });
    }
});