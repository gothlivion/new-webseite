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

// Scroll nach oben
window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Durchschnitt berechnen
function calculateAverage() {
    const scores = document.querySelectorAll('.score');
    let total = 0, count = 0;

    scores.forEach(scoreElement => {
        const text = scoreElement.textContent;
        const match = text.match(/(\d+,\d+) %/);
        if (match) {
            total += parseFloat(match[1].replace(',', '.'));
            count++;
        }
    });

    return count > 0 ? (total / count).toFixed(2) : '0.00';
}

function updateAverage() {
    const averageScoreElement = document.getElementById('average-score');
    const average = calculateAverage();
    averageScoreElement.textContent = `Durchschnittsbewertung aller Lernzielkontrollen - ${average} %`;
}

updateAverage();

// experience html
// JavaScript für das Ein- und Ausklappen der <p> Elemente
function toggleContent(event) {
            const nextContent = event.target.nextElementSibling;
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
        });
  
        
        





