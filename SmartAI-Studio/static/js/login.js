const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword && passwordInput) {

    togglePassword.addEventListener("click", () => {

        const icon = togglePassword.querySelector("i");

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");

        } else {

            passwordInput.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");

        }

    });

}

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {
        input.parentElement.style.border = "1px solid #00BFFF";
        input.parentElement.style.boxShadow = "0 0 15px rgba(0,191,255,.35)";
    });

    input.addEventListener("blur", () => {
        input.parentElement.style.border = "1px solid rgba(255,255,255,.12)";
        input.parentElement.style.boxShadow = "none";
    });

});

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s ease";
        document.body.style.opacity = "1";

    }, 100);

});