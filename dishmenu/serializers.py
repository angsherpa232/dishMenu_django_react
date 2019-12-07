from rest_framework import serializers
from .models import DishMenu

class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = DishMenu
        fields = ('id','name','price')
    
    