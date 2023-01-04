from rest_framework import viewsets
from <%= appName %>.models import <%= className %>
from <%= appName %>.serializers import <%= className %>Serializer

class <%= className %>ViewSet(viewsets.ModelViewSet):
  queryset = <%= className %>.objects.all().filter(is_active=True)
  serializer_class = <%= className %>Serializer
