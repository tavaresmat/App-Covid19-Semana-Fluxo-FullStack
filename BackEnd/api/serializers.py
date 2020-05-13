from rest_framework import serializers
from .models import *
from .views import *


class PostagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postagem
        fields = '__all__'