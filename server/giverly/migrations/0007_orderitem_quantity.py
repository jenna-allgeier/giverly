# Generated by Django 4.0.4 on 2022-05-08 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('giverly', '0006_event_image_orderitem_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='quantity',
            field=models.PositiveSmallIntegerField(null=True),
        ),
    ]
