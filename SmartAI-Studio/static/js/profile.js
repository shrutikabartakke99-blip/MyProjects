document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".stat-card, .info-box, .activity-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "0.6s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 120);

    });

    animateCounters();
    updateClock();

});

function animateCounters() {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.getAttribute("data-target"));
        let count = 0;

        const speed = target / 80;

        const updateCounter = () => {

            if (count < target) {

                count += speed;
                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

}

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    setInterval(() => {

        const now = new Date();

        clock.innerHTML =
            now.toLocaleDateString() +
            " | " +
            now.toLocaleTimeString();

    }, 1000);

}

const editBtn = document.querySelector(".edit-btn");

if (editBtn) {

    editBtn.addEventListener("click", () => {

        alert("Edit Profile Feature will be connected with Django Backend.");

    });

}
const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});

const logoutBtn = document.getElementById("logout");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            window.location.href = "../login.html";

        }

    });

}
const activityCards = document.querySelectorAll(".activity-card");

activityCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateX(10px)";
        card.style.transition = ".3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateX(0px)";

    });

});

const profileImage = document.querySelector(".profile-left img");

if (profileImage) {

    profileImage.addEventListener("click", () => {

        alert("Upload Profile Picture feature will be available after Django integration.");

    });

}

window.addEventListener("scroll", () => {

    const reveals = document.querySelectorAll(".activity-card");

    reveals.forEach(card => {

        const windowHeight = window.innerHeight;
        const revealTop = card.getBoundingClientRect().top;

        if (revealTop < windowHeight - 80) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});

setTimeout(() => {

    console.log("✅ Welcome to SmartAI Studio");

}, 1000);