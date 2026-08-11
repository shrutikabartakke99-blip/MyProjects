window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s ease";

        document.body.style.opacity = "1";

    }, 100);

});


const cards = document.querySelectorAll(".tool-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


const buttons = document.querySelectorAll(".tool-card button");

buttons.forEach(button => {

    button.addEventListener("click", (e) => {

        e.stopPropagation();

        const toolName = button.parentElement.querySelector("h3").innerText;

        switch (toolName) {

            case "AI Text Generator":
                window.location.href = "text-generator.html";
                break;

            case "Text To Speech":
                window.location.href = "text-to-speech.html";
                break;

            case "Speech To Text":
                window.location.href = "speech-to-text.html";
                break;

            case "AI Image Generator":
                window.location.href = "image-generator.html";
                break;

            case "Text To Video":
                window.location.href = "text-to-video.html";
                break;

            case "Resume Builder":
                window.location.href = "resume-builder.html";
                break;

            case "Translator":
                window.location.href = "translator.html";
                break;

            case "AI Chatbot":
                window.location.href = "chatbot.html";
                break;

            default:
                alert(toolName + " Coming Soon!");
        }

    });

});


cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.boxShadow = "0 0 30px rgba(0,191,255,.6)";

        setTimeout(() => {

            card.style.boxShadow = "";

        }, 300);

    });

});

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = ".6s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0px)";

    }, index * 120);

});

console.log("🤖 Welcome to SmartAI Studio AI Tools");

document.addEventListener("keydown", (event) => {

    if (event.key.toLowerCase() === "h") {

        window.location.href = "dashboard.html";

    }

});


setTimeout(() => {

    console.log("💡 Tip: Press 'H' anytime to return to Dashboard.");

}, 2000);