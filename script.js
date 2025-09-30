ScrollReveal().reveal('.hero-left', { origin: 'left', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.hero-right', { origin: 'right', distance: '50px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.navbar', { origin: 'top', distance: '20px', duration: 800, delay: 200 });
ScrollReveal().reveal('.about-img', { origin: 'left', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.about-content', { origin: 'right', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.contact-section', { origin: 'bottom', distance: '60px', duration: 1000, delay: 300 });

// Add navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// WhatsApp function
function sendWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phone = "917862957438";
    const link = `https://wa.me/${phone}?text=${text}`;

    window.open(link, "_blank");
}

// Form submit function
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formAction = "https://formsubmit.co/ajadiyamanish111@gmail.com";
    const formData = new FormData(form);

    fetch(formAction, {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: formData,
    })
    .then(response => {
        if (response.ok) return response.json().catch(()=> ({}));
        throw new Error('Network response was not ok');
    })
    .then(() => {
        alert("Email sent successfully!");
        form.reset();
    })
    .catch((err) => {
        console.error(err);
        alert("Failed to send email. Check inbox for FormSubmit verification or spam folder.");
    });
}

// Auto-set active navbar link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
