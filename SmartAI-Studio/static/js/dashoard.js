document.addEventListener("DOMContentLoaded", function () {

    const sidebarLinks = document.querySelectorAll(".sidebar-link");

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            sidebarLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    const toolCards = document.querySelectorAll(".tool-card");

    toolCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-6px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });

    const statCards = document.querySelectorAll(".stat-card");

    statCards.forEach(function (card) {

        card.addEventListener("click", function () {

            this.classList.toggle("selected");

        });

    });

    const logo = document.querySelector(".sidebar-logo");

    if (logo) {

        logo.addEventListener("click", function () {

            window.location.href = "/dashboard/";

        });

    }

    document.body.classList.add("dashboard-loaded");


});