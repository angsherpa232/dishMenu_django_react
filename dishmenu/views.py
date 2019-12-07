from django.shortcuts import render
from rest_framework import viewsets
from .models import DishMenu
from .serializers import DishSerializer
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

class DishMenuView(viewsets.ModelViewSet):
    queryset = DishMenu.objects.all()
    serializer_class = DishSerializer
    filter_backends = [DjangoFilterBackend,filters.OrderingFilter]
    filter_fields = ['name','price']
    search_fields = ['=name']
    ordering = ['name']
    ordering_fields = ["price"]
