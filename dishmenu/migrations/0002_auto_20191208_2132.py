# Generated by Django 3.0 on 2019-12-08 21:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dishmenu', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dishmenu',
            name='price',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
