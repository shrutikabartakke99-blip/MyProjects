document.addEventListener("DOMContentLoaded", function () {

    const chatContainer = document.getElementById("chatContainer");
    const messageInput = document.getElementById("message");
    const clearBtn = document.getElementById("clearBtn");
    const chatForm = document.querySelector(".chat-form");

    if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    if (messageInput) {

        messageInput.addEventListener("keypress", function (e) {

            if (e.key === "Enter") {

                e.preventDefault();

                if (messageInput.value.trim() !== "") {
                    chatForm.submit();
                }

            }

        });

    }

    if (clearBtn) {

        clearBtn.addEventListener("click", function () {

            messageInput.value = "";

            if (chatContainer) {

                chatContainer.innerHTML = `
                    <div class="message bot-message">
                        👋 Hello! I am SmartAI Assistant. Ask me anything.
                    </div>
                `;

            }

            setTimeout(function () {
                window.location.href = "/chatbot/";
            }, 200);

        });

    }

});