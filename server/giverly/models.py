from email.mime import image
from django.db import models
from django.contrib.auth.models import User


class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events')
    title = models.CharField(max_length=200)
    description = models.TextField(null=True)
    image = models.TextField(null=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def __str__(self):
        return self.title

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='order')
    giftNote = models.CharField(max_length=500, null=True)
    totalPrice = models.DecimalField(max_digits = 7, decimal_places = 2, null=True)

    def __str__(self):
        return self.giftNote

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='orderItems')
    itemName = models.CharField(max_length=100, null=True)
    itemDetails = models.CharField(max_length=500, null=True)
    image = models.TextField(null=True)
    price = models.DecimalField(max_digits = 7, decimal_places = 2, null=True)
    quantity = models.PositiveSmallIntegerField(null=True)

    def __str__(self):
        return self.itemName