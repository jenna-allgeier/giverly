from django.db import models

# Create your models here.

class User(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.CharField(max_length=320)
    userName = models.CharField(max_length=100)
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.email

class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events')
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def __str__(self):
        return self.title

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='order')
    giftNote: models.CharField(max_length=500)
    totalPrice: models.DecimalField(max_digits = 7, decimal_places = 2)

    def __str__(self):
        return self.giftNote

class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='orderItems')
    itemName: models.CharField(max_length=100)
    itemDetails: models.CharField(max_length=500)
    price: models.DecimalField(max_digits = 7, decimal_places = 2)

    def __str__(self):
        return self.itemName