const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(8,17,32,0.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.35)";

    } else {

        header.style.background = "rgba(9,18,35,.65)";
        header.style.boxShadow = "none";

    }

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

const cards = document.querySelectorAll(".glass-card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";

    setTimeout(() => {

        card.style.transition = "0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0px)";

    }, 300 * index);

});

const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";
        card.style.boxShadow = "0 15px 35px rgba(0,191,255,.20)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";
        card.style.boxShadow = "none";

    });

});

const toolCards = document.querySelectorAll(".tool-card");

toolCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.border = "1px solid #00BFFF";
        card.style.boxShadow = "0 15px 35px rgba(0,191,255,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
        card.style.border = "1px solid rgba(255,255,255,.08)";
        card.style.boxShadow = "none";

    });

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".feature-card, .tool-card, .about-box, .cta")
.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "0.8s ease";

    observer.observe(item);

});

cards.forEach((card, index) => {

    setInterval(() => {

        card.style.transform = "translateY(-8px)";

        setTimeout(() => {

            card.style.transform = "translateY(0px)";

        }, 1000);

    }, 2500 + (index * 500));

});

const buttons = document.querySelectorAll(".start-btn, .learn-btn, .register-btn, .login-btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});

const icons = document.querySelectorAll(".social-icons i");

icons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.color = "#ffffff";
        icon.style.transform = "translateY(-5px) scale(1.2)";
        icon.style.transition = ".3s";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.color = "#00BFFF";
        icon.style.transform = "translateY(0px) scale(1)";

    });

});

console.log("🚀 Welcome to SmartAI Studio");
console.log("Designed by Shrutika ❤️");