from django.db import models

class DishMenu(models.Model):
    name = models.CharField(max_length=50)
    price = models.IntegerField(blank=True, null=True) 

    def __str__(self):
        return self.name