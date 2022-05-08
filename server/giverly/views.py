from django.shortcuts import render
from .models import User, Event, Order, OrderItem

# Create your views here.

def user_detail(request, pk):
    user = User.objects.get(id=pk)
    return render(request, 'giverly/user_detail.html', {'user': user})

# make user profile with user details and event