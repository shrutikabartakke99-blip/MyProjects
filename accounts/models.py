from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="profile"
    )

    phone = models.CharField(
        max_length=20,
        blank=True
    )

    location = models.CharField(
        max_length=100,
        blank=True
    )

    profile_image = models.ImageField(
        upload_to="profile_images/",
        blank=True,
        null=True
    )

    def __str__(self):
        return self.user.username


class Activity(models.Model):

    ACTIVITY_TYPES = [
        ("document", "Document"),
        ("tts", "Text to Speech"),
        ("image", "Image"),
        ("video", "Video"),
    ]

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="activities"
    )

    activity_type = models.CharField(
        max_length=20,
        choices=ACTIVITY_TYPES
    )

    title = models.CharField(
        max_length=255,
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.user.username} - {self.activity_type}"