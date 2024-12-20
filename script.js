function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.slide');

    // Ensure all slides are hidden except the active one
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    // Save the current index as a data attribute for navigation
    carousel.setAttribute('data-current-index', index);
}

function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.slide');
    let currentIndex = parseInt(carousel.getAttribute('data-current-index')) || 0;

    // Calculate the next index
    let nextIndex = (currentIndex + 1) % slides.length;

    // Show the next slide
    showSlide(carouselId, nextIndex);
}

function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.slide');
    let currentIndex = parseInt(carousel.getAttribute('data-current-index')) || 0;

    // Calculate the previous index
    let prevIndex = (currentIndex - 1 + slides.length) % slides.length;

    // Show the previous slide
    showSlide(carouselId, prevIndex);
}

// Initialize the first slide for each carousel
document.querySelectorAll('.carousel-content').forEach(carousel => {
    showSlide(carousel.id, 0);
});

// This is the carousel on index.html
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});
