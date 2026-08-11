document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("ttsForm");

    const textarea = document.getElementById("text");

    const clearBtn = document.getElementById("clearBtn");

    const audioPlayer = document.getElementById("audioPlayer");

    const audioSource = document.getElementById("audioSource");

    const status = document.getElementById("statusMessage");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        if(textarea.value.trim()===""){

            alert("Please enter some text.");

            return;

        }

        status.innerHTML =
        "<p style='color:#2563eb;font-weight:600;'>🔄 Generating Speech...</p>";

        audioPlayer.style.display="none";

        const formData = new FormData(form);

        fetch("",{

            method:"POST",

            body:formData

        })

        .then(response=>response.json())

        .then(data=>{

            if(data.error){

                status.innerHTML =
                `<p style="color:red;">${data.error}</p>`;

                return;

            }

            audioSource.src=data.audio_url;

            audioPlayer.load();

            audioPlayer.style.display="block";

            audioPlayer.play();

            status.innerHTML =
            "<p style='color:green;font-weight:600;'>✅ Speech Generated Successfully</p>";

        })

        .catch(error=>{

            console.error(error);

            status.innerHTML =
            "<p style='color:red;'>Something went wrong.</p>";

        });

    });

    clearBtn.addEventListener("click",()=>{

        textarea.value="";

        status.innerHTML="";

        audioPlayer.pause();

        audioPlayer.style.display="none";

        audioSource.src="";

    });

});