from django.shortcuts import render
from rest_framework import viewsets
from .models import DishMenu
from .serializers import DishSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter
from django_filters import FilterSet
from django_filters import rest_framework as filters

class PriceFilter(FilterSet):
    min_price = filters.CharFilter(label="min_price",method="filter_by_min_price")
    max_price = filters.CharFilter(label="max_price",method="filter_by_max_price")

    class Meta:
        model = DishMenu
        fields = ['name','price']
    
    def filter_by_min_price(self, queryset, name, value):
        queryset = queryset.filter(price__gt=value)
        return queryset
    
    def filter_by_max_price(self, queryset, name, value):
        queryset = queryset.filter(price__lt=value)
        return queryset

class DishMenuView(viewsets.ModelViewSet):
    queryset = DishMenu.objects.all()
    serializer_class = DishSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    search_fields = ['name','price']
    filter_class = PriceFilter
    ordering = ['name']
    ordering_fields = ["name","price"]
