function matchAllHeights() {
    console.log("matchAllHeights");
    const containers = document.querySelectorAll('.image-section-container');

    containers.forEach(container => {
        const background = container.querySelector('.image-section-background');
        const content = container.querySelector('.image-section-content');
        if (background && content) {
            content.style.height = background.offsetHeight + 'px';
        }
    });
}

window.addEventListener('load', matchAllHeights);
window.addEventListener('resize', matchAllHeights);



document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('nav');

    // Próg tolerancji: nawigacja schowa się po przewinięciu o tyle pikseli
    const scrollThreshold = -50;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Jeśli zjechaliśmy poniżej naszego marginesu błędu
        if (currentScrollY > scrollThreshold) {
            nav.classList.add('nav-hidden');
        }
        // Jesteśmy na samej górze (lub niemal na samej górze)
        else {
            nav.classList.remove('nav-hidden');
        }
    });
});
