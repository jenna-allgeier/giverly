from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('user/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('user', views.UserList.as_view(), name='user_list'),
    path('event/<int:pk>', views.EventDetail.as_view(), name='event_detail'),
    path('events', views.EventList.as_view(), name='event_list'),
    path('userLogin', views.UserLogin),
    path('logout', views.logout_view)
]