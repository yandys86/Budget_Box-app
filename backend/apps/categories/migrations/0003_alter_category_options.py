# Generated by Django 3.2.4 on 2022-02-16 02:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0002_alter_category_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name_plural': 'Categories'},
        ),
    ]
