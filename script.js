// scripts.js
const mobileMenuAbrir = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');


mobileMenuAbrir.addEventListener('click', () => {
    navList.classList.toggle('active');
});


// scripts.js
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(nextSlide, 5000); // Muda de imagem a cada 3 segundos
});


