document.addEventListener("DOMContentLoaded", function () {

    const clearBtn = document.getElementById("clearBtn");

    if (clearBtn) {

        clearBtn.addEventListener("click", function () {

            document.getElementById("text").value = "";

            document.getElementById("language").selectedIndex = 0;

            document.getElementById("translationOutput").innerHTML =
                "<p>Your translated text will appear here...</p>";

            setTimeout(function () {
                window.location.href = "/translator/";
            }, 200);

        });

    }

});