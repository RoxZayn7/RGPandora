const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const conatctForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Mobile menu
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () = {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// Dark / Light theme
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");
        const isLight = document.body.classList.contains("light");
        themeToggle.textContent = isLight ? "🌙" : "🔆";
        try {
            localStorage.setItem("theme", isLight ? "light" : "dark");
        } catch (e) { /* storage unavailable, keep going */ }
    });
}

try {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        if (themeToggle) themeToggle.textContent = "🌙";
    }
} catch (e) { /* storage unavailable, keep going */ }

// Scroll reveal

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-show");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el = revealObserver.observe(el));

