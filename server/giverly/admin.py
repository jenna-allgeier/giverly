from django.contrib import admin
from .models import User, Event, Order, OrderItems

# Register your models here.

admin.site.register(User)
admin.site.register(Event)
admin.site.register(Order)
admin.site.register(OrderItems)
