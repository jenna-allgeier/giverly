# Generated by Django 4.0.4 on 2022-05-08 01:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('giverly', '0004_alter_order_event'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='giftNote',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='totalPrice',
            field=models.DecimalField(decimal_places=2, max_digits=7, null=True),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='itemDetails',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='itemName',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='description',
            field=models.TextField(null=True),
        ),
    ]
