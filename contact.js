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

// Warte, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Alle Elemente mit der Klasse 'absatz' abfragen
    const headers = document.querySelectorAll('.absatz');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            // Den nächsten Container (ul) finden
            const content = this.nextElementSibling;
            if (content) {
                // Klasse 'hidden' umschalten
                content.classList.toggle('hidden');
                
                // Optional: Text unverändert lassen (Pfeile entfernen)
                const isHidden = content.classList.contains('hidden');
                this.textContent = this.textContent.trim(); // Text ohne Änderung
            }
        });
    });
});