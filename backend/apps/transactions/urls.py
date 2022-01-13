from django.urls import path
from . import views

urlpatterns = [
    path('', views.Transactionlist.as_view(), name='transaction_list')
]
