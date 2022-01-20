from django.db import models
from apps.users.models import User
from apps.category.models import Category


# Create your models here.


class Transaction(models.Model):
    class Meta(object):
        db_table = 'transaction'

    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, db_index=True
    )
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, db_index=True
    )

    name = models.CharField(
        'Name', blank=False, null=False, db_index=True, max_length=100, default='Name'
    )
    type = models.CharField(
        'Type', blank=False, null=False, max_length=50
    )
    amount = models.IntegerField(
        'Amount', blank=False, null=False, db_index=True
    )
    created_at = models.DateTimeField(
        'Creation Date', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Update Date', blank=True, auto_now=True
    )

    def __str__(self):
        return self.name
