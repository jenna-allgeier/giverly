from rest_framework import serializers
from .models import User, Event, Order, OrderItem

class UserSerializer(serializers.HyperlinkedModelSerializer):
    events = serializers.HyperlinkedRelatedField(
        view_name = 'event_detail',
        many = True,
        read_only = True,
    )

    user_url = serializers.ModelSerializer.serializer_url_field(
        view_name = 'user_detail'
    )

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data["password"],)
        return user

    class Meta:
        model = User
        fields = ('id', 'user_url', 'firstName', 'lastName', 'email', 'userName', 'password', 'events',)

class EventSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name = 'user_detail',
        read_only = True,
    )

    user_id = serializers.PrimaryKeyRelatedField(
        queryset = User.objects.all(),
        source = 'user'
    )

    class Meta:
        model = Event
        fields = ('id', 'user', 'user_id', 'title', 'description', 'start_time', 'end_time', 'image')