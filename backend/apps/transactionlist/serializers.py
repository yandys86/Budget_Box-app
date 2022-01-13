from .models import TransactionList
from rest_framework import serializers


class TransactionListSerializer(serializers.ModelSerializer):

    class Meta:
        model = TransactionList
        fields = '__all__'
