from rest_framework import generics
from .serializers import TransactionsSerializer
from .models import Transactions

# Create your views here.


class Transactionlist(generics.ListAPIView):
    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer


class TransactionListAdd(generics.CreateAPIView):
    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer


class TransactionListDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer


class TransactionListDelete(generics.DestroyAPIView):
    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer
