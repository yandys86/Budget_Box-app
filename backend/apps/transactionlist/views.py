from rest_framework import generics
from .serializers import TransactionListSerializer
from .models import TransactionList

# Create your views here.


class Transactionlist(generics.ListAPIView):
    queryset = TransactionList.objects.all()
    serializer_class = TransactionListSerializer


class TransactionListAdd(generics.CreateAPIView):
    queryset = TransactionList.objects.all()
    serializer_class = TransactionListSerializer


class TransactionListDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = TransactionList.objects.all()
    serializer_class = TransactionListSerializer


class TransactionListDelete(generics.DestroyAPIView):
    queryset = TransactionList.objects.all()
    serializer_class = TransactionListSerializer
