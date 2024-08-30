function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);


        document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.whats-new .carousel');
    const slides = document.querySelectorAll('.whats-new .carousel-slide');
    const prevButton = document.querySelector('.whats-new .carousel-prev');
    const nextButton = document.querySelector('.whats-new .carousel-next');

    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slides[0].clientWidth;
        carousel.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.mobile-navbar').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            item.classList.add('focus');
        });

        item.addEventListener('mouseleave', function() {
            item.classList.remove('focus');
        });
    });
});
