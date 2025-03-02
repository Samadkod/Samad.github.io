// Mode sombre
const modeSwitch = document.querySelector('.mode-switch');
if (modeSwitch) {
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// Filtrage des projets
function filterProjects(tech) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (tech === 'all' || project.dataset.tech.includes(tech)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

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

// Carrousel de projets (optionnel)
let index = 0;
const slides = document.querySelectorAll('.project-card');
const carouselInner = document.querySelector('.carousel-inner');

if (carouselInner && slides.length > 0) {
    function nextSlide() {
        index = (index + 1) % slides.length;
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Change de slide toutes les 3 secondes
}
