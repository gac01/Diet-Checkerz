from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'name', 'password', 'gender', 'age', 'weight', 'height','goal','body_type','sleep','time_reach_goal')
    