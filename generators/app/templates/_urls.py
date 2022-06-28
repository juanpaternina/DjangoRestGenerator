from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'userChatRol', views.<%= className %>ViewSet, basename='User Chat Rol')
urlpatterns = [
    path('', include(router.urls))
]
