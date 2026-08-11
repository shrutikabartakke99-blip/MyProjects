const prompt = document.getElementById("prompt");
const output = document.getElementById("output");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

const chips = document.querySelectorAll(".chip");

const responses = [

`🚀 Artificial Intelligence is transforming industries by automating repetitive tasks, improving productivity, and enabling smarter decision-making. Businesses use AI for customer support, healthcare, finance, education, and many other fields.`,

`🌍 Welcome to SmartAI Studio.

This AI-powered platform helps users generate high-quality content, convert text into speech, translate languages, summarize documents, and access multiple AI tools from one dashboard.`,

`💼 LinkedIn Post

Excited to share my latest AI-powered web application built using Django, HTML, CSS, JavaScript, and SQLite.

This project includes multiple AI tools like Text Generator, Text-to-Speech, Resume Builder, and Image Generator in one platform.

#AI #Django #Python #WebDevelopment`,

`📄 Resume Summary

Passionate Computer Engineering student with hands-on experience in Python, Django, AI, Data Analytics, and Power BI. Skilled in developing AI-powered web applications and solving real-world problems through innovative technology.`

];

function typeText(text){

    output.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < text.length){

            output.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,15);

        }

    }

    typing();

}

generateBtn.addEventListener("click",()=>{

    const value = prompt.value.trim();

    if(value===""){

        alert("Please enter a prompt.");

        return;

    }

    output.innerHTML="<p>🤖 Generating...</p>";

    setTimeout(()=>{

        const random = Math.floor(Math.random()*responses.length);

        typeText(responses[random]);

    },1000);

});

clearBtn.addEventListener("click", () => {

    prompt.value = "";

    window.location.href = "/text-generator/";

});

copyBtn.addEventListener("click",()=>{

    const text = output.innerText;

    navigator.clipboard.writeText(text);

    copyBtn.innerHTML="✅ Copied";

    setTimeout(()=>{

        copyBtn.innerHTML='<i class="fa-solid fa-copy"></i> Copy';

    },1500);

});

downloadBtn.addEventListener("click",()=>{

    const blob = new Blob([output.innerText],{type:"text/plain"});

    const a=document.createElement("a");

    a.href=URL.createObjectURL(blob);

    a.download="AI_Text.txt";

    a.click();

});


chips.forEach(chip=>{

    chip.addEventListener("click",()=>{

        switch(chip.innerText){

            case "LinkedIn Post":

                prompt.value="Write a professional LinkedIn post about Artificial Intelligence.";

                break;

            case "Blog Article":

                prompt.value="Write a 500-word blog article on Machine Learning.";

                break;

            case "Resume Summary":

                prompt.value="Generate a professional resume summary for a Computer Engineering student.";

                break;

            case "Instagram Caption":

                prompt.value="Generate an attractive Instagram caption for my AI project.";

                break;

            case "Email Writing":

                prompt.value="Write a professional leave application email.";

                break;

            case "YouTube Script":

                prompt.value="Write a YouTube introduction about Artificial Intelligence.";

                break;

            case "Project Description":

                prompt.value="Generate a software project description.";

                break;

            case "Business Idea":

                prompt.value="Suggest an AI startup business idea.";

                break;

        }

    });

});

prompt.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="Enter"){

        generateBtn.click();

    }

});


const counter=document.createElement("div");

counter.style.marginTop="10px";
counter.style.color="#9ecfff";
counter.style.fontSize="14px";

prompt.parentNode.appendChild(counter);

function updateCounter(){

    counter.innerHTML=`Characters : ${prompt.value.length}`;

}

prompt.addEventListener("input",updateCounter);

updateCounter();

console.log("✅ SmartAI Studio - AI Text Generator Loaded");