
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".resume-form");
    const clearBtn = document.getElementById("clearBtn");
    const copyBtn = document.getElementById("copyResume");
    const regenerateBtn = document.getElementById("regenerateResume");

    const preview = document.querySelector(".resume-preview");
    const resumeContent = document.getElementById("resumeContent");

    const scoreNumber = document.getElementById("scoreNumber");

    const firstInput = document.querySelector("input[name='fullname']");

    if (firstInput) {

        firstInput.focus();

    }


    document.querySelectorAll("textarea").forEach(function (textarea) {

        textarea.addEventListener("keydown", function (e) {

            if (e.ctrlKey && e.key === "Enter") {

                e.preventDefault();

                form.submit();

            }

        });

    });

    if (clearBtn) {

        clearBtn.addEventListener("click", function () {

            form.reset();

            if (resumeContent) {

                resumeContent.innerHTML = "";

            }

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    if (copyBtn) {

        copyBtn.addEventListener("click", function () {

            if (!resumeContent) {

                alert("Generate Resume First!");

                return;

            }

            navigator.clipboard.writeText(resumeContent.innerText);

            copyBtn.innerHTML =
                '<i class="fa-solid fa-check"></i> Copied';

            setTimeout(function () {

                copyBtn.innerHTML =
                    '<i class="fa-solid fa-copy"></i> Copy Resume';

            }, 2000);

        });

    }
   

    if (regenerateBtn) {

        regenerateBtn.addEventListener("click", function () {

            form.submit();

        });

    }

    if (resumeContent) {

        preview.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

    if (scoreNumber) {

        let finalScore = parseInt(scoreNumber.innerText);

        if (isNaN(finalScore)) {

            finalScore = 92;

        }

        let count = 0;

        scoreNumber.innerText = "0%";

        const interval = setInterval(function () {

            count++;

            scoreNumber.innerText = count + "%";

            if (count >= finalScore) {

                clearInterval(interval);

            }

        }, 18);

    }

});