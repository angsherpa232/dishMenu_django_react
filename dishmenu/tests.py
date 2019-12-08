from django.test import TestCase
from .models import DishMenu

class DishMenuModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        DishMenu.objects.create(name='Hendl')
        DishMenu.objects.create(price='18')

    def test_name_content(self):
        dish = DishMenu.objects.get(id=1)
        expected_object_name = f'{dish.name}'
        self.assertEquals(expected_object_name, 'Hendl')

    def test_description_content(self):
        dish = DishMenu.objects.get(id=2)
        expected_object_price = f'{dish.price}'
        self.assertEquals(expected_object_price, '18')
