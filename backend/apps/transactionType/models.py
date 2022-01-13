from django.db import models

# Create your models here.


class TransactionType(models.Model):
    class Meta(object):
        db_table = 'transactionType'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=50, db_index=True
    )

    def __str__(self):
        return self.name
