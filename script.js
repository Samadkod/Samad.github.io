// Animation au scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
});

// Afficher la section d'accueil dès le chargement
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('#home');
    homeSection.classList.add('visible');
});
