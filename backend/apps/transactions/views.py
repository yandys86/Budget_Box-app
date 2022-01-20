from rest_framework import generics
from .serializers import TransactionsSerializer
from .models import Transaction

# Create your views here.


class Transactionlist(generics.ListAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionsSerializer


class TransactionListAdd(generics.CreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionsSerializer


class TransactionListDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionsSerializer


class TransactionListDelete(generics.DestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionsSerializer
