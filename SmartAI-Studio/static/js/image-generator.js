
document.addEventListener("DOMContentLoaded", function () {

    const promptInput =
        document.getElementById("prompt");

    const clearBtn =
        document.getElementById("clearBtn");

    const imageForm =
        document.getElementById("imageForm");

    const loader =
        document.getElementById("loader");

    const generateBtn =
        document.getElementById("generateBtn");

    const chips =
        document.querySelectorAll(".chip");


    if (promptInput) {

        promptInput.focus();

    }

    chips.forEach(function (chip) {


        chip.addEventListener("click", function () {

            const selectedPrompt =
                chip.getAttribute("data-prompt");

            if (
                selectedPrompt &&
                promptInput
            ) {

                promptInput.value =
                    selectedPrompt;

                promptInput.focus();

                promptInput.setSelectionRange(
                    promptInput.value.length,
                    promptInput.value.length
                );

                chip.classList.add("selected");


                setTimeout(function () {

                    chip.classList.remove("selected");

                }, 300);


            }

        });


    });

    if (clearBtn) {


        clearBtn.addEventListener(
            "click",
            function () {

                if (promptInput) {

                    promptInput.value = "";

                    promptInput.focus();

                }

                if (loader) {

                    loader.style.display = "none";

                }


            }
        );


    }

    if (imageForm) {


        imageForm.addEventListener(
            "submit",
            function (event) {

                if (
                    !promptInput ||
                    promptInput.value.trim() === ""
                ) {


                    event.preventDefault();


                    alert(
                        "Please enter an image prompt."
                    );


                    return;

                }

                if (loader) {

                    loader.style.display =
                        "block";

                }

                if (generateBtn) {

                    generateBtn.disabled =
                        true;

                    generateBtn.innerHTML =
                        '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';

                }


            }
        );


    }

    if (promptInput) {


        promptInput.addEventListener(
            "keydown",
            function (event) {


                if (
                    event.ctrlKey &&
                    event.key === "Enter"
                ) {


                    event.preventDefault();


                    if (
                        promptInput.value.trim() !== ""
                    ) {


                        imageForm.requestSubmit();


                    }

                }


            }
        );


    }


});

document.addEventListener("DOMContentLoaded", function () {

    const featureCards =
        document.querySelectorAll(".interactive-card");

    const featureModal =
        document.getElementById("featureModal");

    const closeFeatureModal =
        document.getElementById("closeFeatureModal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalIcon =
        document.getElementById("modalIcon");

    const tryFeatureBtn =
        document.getElementById("tryFeatureBtn");

    featureCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const title =
                card.dataset.title;

            const description =
                card.dataset.description;

            const icon =
                card.dataset.icon;


            modalTitle.textContent = title;

            modalDescription.textContent =
                description;

            modalIcon.className =
                "fa-solid " + icon;


            featureModal.classList.add("show");

        });

    });


    if (closeFeatureModal) {

        closeFeatureModal.addEventListener(
            "click",
            function () {

                featureModal.classList.remove("show");

            }
        );

    }

    if (featureModal) {

        featureModal.addEventListener(
            "click",
            function (event) {

                if (event.target === featureModal) {

                    featureModal.classList.remove("show");

                }

            }
        );

    }

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                featureModal.classList.contains("show")
            ) {

                featureModal.classList.remove("show");

            }

        }
    );

    if (tryFeatureBtn) {

        tryFeatureBtn.addEventListener(
            "click",
            function () {

                featureModal.classList.remove("show");

                const prompt =
                    document.getElementById("prompt");

                if (prompt) {

                    prompt.focus();

                    prompt.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }

});