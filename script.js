const aboutElements = document.querySelectorAll(
    '.about-header, .about-card'
);

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            aboutObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

aboutElements.forEach((element) => {
    aboutObserver.observe(element);
});