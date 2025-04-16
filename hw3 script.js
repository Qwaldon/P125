// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

// Interactive cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    });
});

// Responsive menu toggle (for mobile)
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showSection(targetId);
        updateActiveLink(link);
    });
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if(targetSection) {
        targetSection.classList.add('active');
    }
}

function updateActiveLink(activeLink) {
    // Remove active class from all links
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    // Add active class to clicked link
    activeLink.classList.add('active');
}

// Show home section by default when page loads
window.addEventListener('load', () => {
    showSection('home');
    document.querySelector('nav a[href="#home"]').classList.add('active');
});