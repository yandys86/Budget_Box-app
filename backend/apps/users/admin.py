from django.contrib import admin
from .models import User


@admin.register(User)
class UserModel(admin.ModelAdmin):
    fields = ['user', 'email', 'profile', 'token', 'token_expires_at']
    list_filter = []
    list_display = fields
    search_fields = ['user_name', 'email']
