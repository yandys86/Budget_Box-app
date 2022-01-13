from django.db import models

from apps.category.models import Category
from apps.transactionType.models import TransactionType

# Create your models here.


class TransactionList(models.Model):
    class Meta(object):
        db_table = 'transactionList'

    transactionType = models.ForeignKey(
        TransactionType, on_delete=models.CASCADE, db_index=True
    )

    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, db_index=True
    )
    name = models.CharField(
        'Name', blank=False, null=False, db_index=True, max_length=100, default='Name'
    )
    cost = models.IntegerField(
        'Cost', blank=False, null=False, db_index=True
    )

    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )

    def __str__(self):
        return self.name
