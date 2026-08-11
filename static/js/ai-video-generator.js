document.addEventListener("DOMContentLoaded", function () {

    const prompt = document.getElementById("prompt");
    const clearBtn = document.getElementById("clearBtn");
    const form = document.getElementById("videoForm");
    const loading = document.getElementById("loadingBox");
    const chips = document.querySelectorAll(".chip");
    const generateBtn = document.getElementById("generateBtn");


    if (prompt) {
        prompt.focus();
    }


    if (prompt && form) {

        prompt.addEventListener("keydown", function (e) {

            if (e.ctrlKey && e.key === "Enter") {

                e.preventDefault();

                if (prompt.value.trim() !== "") {

                    form.requestSubmit();

                }

            }

        });

    }


    if (form) {

        form.addEventListener("submit", function () {

            if (!prompt.value.trim()) {

                return;

            }

            if (loading) {

                loading.style.display = "block";

            }

            if (generateBtn) {

                generateBtn.disabled = true;

                generateBtn.innerHTML =
                    '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';

            }

        });

    }

    if (clearBtn) {

        clearBtn.addEventListener("click", function () {

            if (prompt) {

                prompt.value = "";

                prompt.focus();

            }

            if (loading) {

                loading.style.display = "none";

            }

        });

    }

    chips.forEach(function (chip) {

        chip.addEventListener("click", function () {

            if (!prompt) {
                return;
            }

            prompt.value = chip.dataset.prompt || "";

            prompt.focus();

        });

    });

});