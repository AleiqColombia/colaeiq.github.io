/* ==========================================================
    Archivo: main.js
    Desarrollado por: Juan David Parr Cantor
    Proyecto: COLAEIQ 2026 | ALEIQ Colombia
   ========================================================== */

// ======== 1️⃣ Cambiar estilo del header al hacer scroll ========
window.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

// ======== 2️⃣ Menú responsive ========
const navToggle = document.createElement("div");
navToggle.id = "nav-toggle";
navToggle.innerHTML = "☰";
document.querySelector("#header .header-container").appendChild(navToggle);

const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navToggle.classList.toggle("open");
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("nav-active");
        navToggle.classList.remove("open");
    });
});

// ======== 3️⃣ Scroll suave ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
            });
        }
        }
    });
});

// ======== 4️⃣ Botón “Volver arriba” ========
const backToTop = document.createElement("button");
backToTop.className = "back-to-top";
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======== 5️⃣ Animaciones suaves al aparecer (fade-in) ========
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".section-title, .card, .about-text p, .about-values li").forEach(el => {
    observer.observe(el);
});
