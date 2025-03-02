// Mode sombre
const modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Carrousel de projets
let index = 0;
const slides = document.querySelectorAll('.project-card');

function nextSlide() {
    index = (index + 1) % slides.length;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 3000);
