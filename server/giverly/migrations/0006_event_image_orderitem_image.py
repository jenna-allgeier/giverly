# Generated by Django 4.0.4 on 2022-05-08 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('giverly', '0005_order_giftnote_order_totalprice_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='image',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='image',
            field=models.TextField(null=True),
        ),
    ]
