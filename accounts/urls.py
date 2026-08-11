from django.urls import path
from . import views

urlpatterns = [

    path('', views.landing, name='landing'),

    path('login/', views.login_page, name='login'),
    path('register/', views.register_page, name='register'),
    path('logout/', views.logout_user, name='logout'),

    path('dashboard/', views.dashboard, name='dashboard'),
    path('profile/', views.profile, name='profile'),
    path('history/', views.history, name='history'),

    path('settings/', views.settings_page, name='settings'),

    path('ai-tools/', views.ai_tools, name='ai_tools'),

    path('text-generator/', views.text_generator,name='text_generator'),

    path('text-to-speech/', views.text_to_speech,name='text_to_speech'),

    path('speech-to-text/', views.speech_to_text, name='speech_to_text'),

    path('image-generator/',views.image_generator, name='image_generator'),

    path('ai-video-generator/',views.ai_video_generator,name='ai_video_generator'),

    path('resume-builder/',views.resume_builder,name='resume_builder'),

    path('translator/',views.translator,name='translator'),

    path('chatbot/',views.chatbot,name='chatbot'),

    path('download-resume-pdf/', views.download_resume_pdf,name='download_resume_pdf'),

    path('download-resume-docx/',views.download_resume_docx,name='download_resume_docx'),
]