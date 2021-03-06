# from django.shortcuts import render
from rest_framework import generics
from .models import User, Event, Order, OrderItem
from .serializers import UserSerializer, EventSerializer
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.http import HttpResponse
import json

# initial test view

def user_detail(request, pk):
    user = User.objects.get(id=pk)
    return render(request, 'giverly/user_detail.html', {'user': user})

# all other views

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

def UserLogin(request):
    print('attempting login')
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        print('login success')
        return(json.dumps({"results":"success"}))
    else:
        print('login fail')
        return(json.dumps({"results":"fail"}))

def logout_view(request):
    
    logout(request)
    print('logout success')
    return(json.dumps({"results":"logout"}))