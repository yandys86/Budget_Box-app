from .models import TransactionType
from rest_framework import serializers


class TransactionTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = TransactionType
        fields = '__all__'
