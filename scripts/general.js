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

