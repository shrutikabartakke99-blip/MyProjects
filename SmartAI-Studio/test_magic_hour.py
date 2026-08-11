import requests
import os
from dotenv import load_dotenv

load_dotenv()

key = os.getenv("MAGIC_HOUR_API_KEY")

print("Key loaded:", bool(key))
print("Key length:", len(key) if key else 0)
print("Key start:", key[:8] if key else "NONE")

url = "https://api.magichour.ai/v1/text-to-video"

headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {key}",
    "Content-Type": "application/json",
}

data = {
    "name": "SmartAI Test",
    "end_seconds": 5,
    "aspect_ratio": "16:9",
    "resolution": "480p",
    "style": {
        "prompt": "A red sports car driving on a beautiful mountain road at sunset"
    }
}

response = requests.post(
    url,
    headers=headers,
    json=data,
    timeout=60
)

print("STATUS:", response.status_code)
print("RESPONSE:", response.text)