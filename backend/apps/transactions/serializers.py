from .models import Transaction
from rest_framework import serializers


class TransactionsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Transaction
        fields = '__all__'
