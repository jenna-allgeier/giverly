from django.urls import path
from . import views

urlpatterns = [
    path('user/<int:pk>', views.user_detail, name='user_detail'),
]