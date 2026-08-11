import google.generativeai as genai
from django.conf import settings

print("API KEY =", settings.GEMINI_API_KEY)

# Configure Gemini
genai.configure(api_key=settings.GEMINI_API_KEY)

# Available models print karo
for m in genai.list_models():
    print(m.name)

# Model select karo
model = genai.GenerativeModel("gemini-flash-latest")
# Ya:
# model = genai.GenerativeModel("gemini-2.5-flash")

def generate_text(prompt):
    """
    Generate AI response using Gemini
    """
    try:
        print("Prompt:", prompt)

        response = model.generate_content(prompt)

        print("Response:", response)

        if hasattr(response, "text") and response.text:
            return response.text

        return "No response generated."

    except Exception as e:
        print("Error:", e)
        return f"Error: {str(e)}"


