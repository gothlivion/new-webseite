// Toggle between dark and light modes
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "Dark Mode";
    } else {
        themeToggle.textContent = "Light Mode";
    }
});

// Responsive Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

function toggleContent(event) {
    let nextContent = event.target.nextElementSibling;

    // Schleife durch alle aufeinanderfolgenden .content-Elemente
    while (nextContent && nextContent.classList.contains('content')) {
        nextContent.style.display = nextContent.style.display === 'block' ? 'none' : 'block';
        nextContent = nextContent.nextElementSibling;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('.absatz');
    headings.forEach(heading => {
        heading.addEventListener('click', toggleContent);
    });

    // Initially hide all content elements
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(content => {
        content.style.display = 'none';
    });
});

// Scroll nach oben
window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};