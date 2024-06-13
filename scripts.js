document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Remove "#" from the href value
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const progressElements = document.querySelectorAll('.progress');
    progressElements.forEach(function(progressElement) {
        const progress = progressElement.getAttribute('data-progress');
        progressElement.style.width = progress + '%';
    });
});