from django.shortcuts import render
from gtts import gTTS
import os
import uuid
from django.conf import settings


def text_to_speech(request):

    audio_file = None

    if request.method == "POST":

        text = request.POST.get("text")

        if text:

            filename = f"{uuid.uuid4()}.mp3"

            audio_folder = os.path.join(settings.BASE_DIR, "static", "audio")

            os.makedirs(audio_folder, exist_ok=True)

            filepath = os.path.join(audio_folder, filename)

            tts = gTTS(text=text, lang="en")

            tts.save(filepath)

            audio_file = f"/static/audio/{filename}"

    return render(request, "text-to-speech.html", {
        "audio_file": audio_file
    })