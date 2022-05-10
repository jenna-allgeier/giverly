# from django.shortcuts import render
from rest_framework import generics
from .models import User, Event, Order, OrderItem
from .serializers import UserSerializer, EventSerializer

# Initial test view.

# def user_detail(request, pk):
#     user = User.objects.get(id=pk)
#     return render(request, 'giverly/user_detail.html', {'user': user})

# make user profile with user details and event

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer