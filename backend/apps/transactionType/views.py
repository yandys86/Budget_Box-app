from rest_framework import generics
from .serializers import TransactionTypeSerializer
from .models import TransactionType

# Create your views here.


class TransactionTypeList(generics.ListAPIView):
    queryset = TransactionType.objects.all()
    serializer_class = TransactionTypeSerializer


class TransactionTypeAdd(generics.CreateAPIView):
    queryset = TransactionType.objects.all()
    serializer_class = TransactionTypeSerializer


class TransactionTypeDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = TransactionType.objects.all()
    serializer_class = TransactionTypeSerializer


class TransactionTypeDelete(generics.DestroyAPIView):
    queryset = TransactionType.objects.all()
    serializer_class = TransactionTypeSerializer
