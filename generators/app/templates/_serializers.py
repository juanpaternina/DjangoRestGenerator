from rest_framework import serializers
from <%= appName %>.models import <%= className %>

class <%= className %>Serializer(serializers.ModelSerializer):
    class Meta:
        model = <%= className %>
        fields = '__all__'
