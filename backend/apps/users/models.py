from pyexpat import model
from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.


class User(models.Model):
    class Meta(object):
        db_table = 'user'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=50, db_index=True
    )
    email = models.EmailField(
        'Email', blank=False, null=False, max_length=254, db_index=True
    )
    password = models.CharField(
        'Password', blank=False, null=False, max_length=500, db_index=True
    )

    budget = models.IntegerField(
        "Budget", blank=False, null=False, default=0
    )

    profile = CloudinaryField("Profile Picture", blank=True, null=True)

    token = models.CharField(
        'token', blank=True, null=True, max_length=500, db_index=True
    )
    token_expires_at = models.DateTimeField(
        'Token Expires Datetime', blank=True, null=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
