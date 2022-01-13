from django.urls import path
from . import views

urlpatterns = [
    path('', views.TransactionTypeList.as_view(), name='TransactionType_list')
]
