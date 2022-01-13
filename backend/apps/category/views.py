from rest_framework import generics
from .serializers import CategorySerializer
from .models import Category

# Create your views here.


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryAdd(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDelete(generics.DestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
