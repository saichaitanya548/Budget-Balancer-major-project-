window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const moon = document.querySelector('.moon');
    const thankYouMessage = document.querySelector('.thank-you-message');

    // Move the moon upwards as the user scrolls
    moon.style.bottom = `calc(20% + ${scrollPosition * 0.5}px)`;

    // Reveal the thank you message as the user scrolls
    if (scrollPosition > window.innerHeight / 2) {
        thankYouMessage.style.opacity = '1';
        thankYouMessage.style.transform = 'translateY(0)';
    } else {
        thankYouMessage.style.opacity = '0';
        thankYouMessage.style.transform = 'translateY(50px)';
    }
});
