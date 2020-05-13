from django.urls import path, include
from .views import *
from api import views

urlpatterns = [
    path("postagens/", PostagemList.as_view()),
]
