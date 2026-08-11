const output=document.getElementById("output");

const startBtn=document.getElementById("start-btn");
const stopBtn=document.getElementById("stop-btn");
const clearBtn=document.getElementById("clear-btn");

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

recognition.continuous=true;
recognition.interimResults=true;
recognition.lang="en-US";

startBtn.onclick=function(){

    recognition.start();

}

stopBtn.onclick=function(){

    recognition.stop();

}

recognition.onresult=function(event){

    let text="";

    for(let i=0;i<event.results.length;i++){

        text+=event.results[i][0].transcript;

    }

    output.value=text;

}

clearBtn.onclick=function(){

    output.value="";

}