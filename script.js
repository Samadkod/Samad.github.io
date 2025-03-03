// Mode sombre
const modeSwitch = document.querySelector('.mode-switch');
if (modeSwitch) {
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = modeSwitch.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
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

// Appel initial pour afficher les sections déjà dans la vue
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
});
