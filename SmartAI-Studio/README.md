🤖 SmartAI Studio

SmartAI Studio is an AI-powered web application developed using Django that provides multiple useful AI tools in a single platform.

The application brings together AI content generation, text-to-speech, speech-to-text, image generation, video generation, resume building, translation, and AI chatbot functionality under one user-friendly interface.

---

📌 Project Description

SmartAI Studio is designed as an all-in-one AI platform where users can access multiple AI-powered tools from a single web application.

Instead of using different platforms for different AI tasks, users can use SmartAI Studio to perform various tasks such as generating text, creating images and videos, converting text to speech, converting speech to text,
building resumes, translating content, and interacting with an AI chatbot.

The project is developed using Django as the backend framework and integrates external AI APIs and Python libraries for different AI functionalities.

---

🚀 Features

1. AI Text Generator

- Generate AI-powered text from user prompts.
- Useful for content creation and writing assistance.
- Generates responses based on the user's input.
- Provides a simple interface for entering prompts and viewing generated content.

---

 2. Text To Speech

- Converts written text into speech.
- Uses the Google Text-to-Speech (`gTTS`) library.
- Generates an audio file from the provided text.
- Allows users to listen to the generated speech.

---

3. Speech To Text

- Converts spoken audio into text.
- Allows users to provide speech/audio input.
- Processes the audio and extracts the spoken content.
- Displays the converted text to the user.

---

 4. AI Image Generator

- Generates AI-based images from text prompts.
- Users can describe the required image using a prompt.
- The application processes the request using the configured AI image generation service.
- Generated images can be viewed by the user.

---

 5. AI Video Generator

- Generates AI-based videos from text prompts.
- Uses the **Magic Hour API** for video generation.
- Users provide a text prompt describing the required video.
- The prompt is sent to the Magic Hour API.
- The generated video is processed and displayed in the application.
- Users can view the generated video.

---

 6. Resume Builder

- Helps users create a professional resume.
- Users can enter their personal and professional information.
- Generates a structured resume.
- Supports document generation using Python libraries.
- Resume documents can be generated for further use.

---

 7. Translator

- Translates text from one language to another.
- Provides a simple interface for entering text.
- Users can select the required language.
- Displays the translated output.

---

 8. AI Chatbot

- Provides an interactive AI chatbot.
- Users can ask questions using natural language.
- The chatbot processes the user's prompt using AI.
- Provides AI-generated responses in a conversational interface.

---

 9. User Authentication & Profile

- User registration and login.
- Secure authentication system.
- User profile management.
- Profile information can be updated.
- Profile image support.
- Recent user activity can be displayed.

---

🛠️ Technology Stack

Backend

- Python
- Django
- Django Authentication
- Django Allauth

Frontend

- HTML5
- CSS3
- JavaScript
- Font Awesome

#AI & APIs

- Google Gemini / Generative AI
- Magic Hour API
- Google Text-to-Speech (`gTTS`)

Document Processing

- Python-docx
- ReportLab
- Pillow

Database

- SQLite3

Development Tools

- Visual Studio Code
- Git
- GitHub
- Python Virtual Environment (`venv`)

---

Project Structure

SmartAI-Studio/
│
├── accounts/
│   ├── migrations/
│   ├── templates/
│   ├── admin.py
│   ├── models.py
│   ├── urls.py
│   ├── views.py
│   └── ...
│
├── ai_tools/
│   ├── migrations/
│   ├── templates/
│   ├── models.py
│   ├── urls.py
│   ├── views.py
│   └── ...
│
├── smartai/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
├── templates/
│   └── ...
│
├── media/
│   └── ...
│
├── manage.py
├── requirements.txt
├── .gitignore
├── .env
└── README.md


# Installation & Setup

1. Clone the Repository
   Clone the project from GitHub:

 - git clone <YOUR-GITHUB-REPOSITORY-URL>
 - cd SmartAI-Studio

2. Create a Virtual Environment
 - python -m venv venv
 - venv\Scripts\activate
 If PowerShell blocks the activation script, you can use:
 - venv\Scripts\activate.bat
 or open Command Prompt and activate it there.
  Mac / Linux
  - source venv/bin/activate

3. Install Required Packages
 - pip install -r requirements.txt

# Environment Variables

SmartAI Studio uses API keys for external AI services.

Create a .env file in the project root directory.
GEMINI_API_KEY=your_gemini_api_key
MAGIC_HOUR_API_KEY=your_magic_hour_api_key

# Database Setup

  Run Django migrations:

  - python manage.py makemigrations
 Then:
  - python manage.py migrate

This will create the required database tables

# Create Admin User

 To create a Django administrator account:
  - python manage.py createsuperuser

# Run the Project

 Start the Django development server:

  - python manage.py runserver

 The application will normally be available at:

  - http://127.0.0.1:8000/

 # Testing

 To run Django's tests: python manage.py test


 # How SmartAI Studio Works

 User
  │
  ▼
SmartAI Studio Web Interface
  │
  ├── AI Text Generator
  │
  ├── Text To Speech
  │
  ├── Speech To Text
  │
  ├── AI Image Generator
  │
  ├── AI Video Generator
  │        │
  │        └── Magic Hour API
  │
  ├── Resume Builder
  │
  ├── Translator
  │
  └── AI Chatbot
  │
  ▼
Django Backend
  │
  ▼
AI APIs / Python Libraries
  │
  ▼
Generated Result
  │
  ▼
Displayed to User


⚠️ Common Issues
python is not recognized

Install Python and make sure Python is added to the system PATH.

Check the installation:

python --version
pip is not recognized

Check:

python -m pip --version

Then install packages using:

python -m pip install -r requirements.txt


🚀 Future Improvements

Possible future improvements include:

Improved AI-generated content quality
More AI tools
Better chatbot conversation history
Advanced resume templates
More translation languages
Improved video generation workflow
User activity analytics
Cloud storage integration
Deployment to a production server
Improved UI/UX and responsive design

Author
Shrutika Bartakke

Computer Engineering Student
Interested in AI, Web Development, Machine Learning and Data Analytics.

License
This project is developed for educational and academic purposes.









