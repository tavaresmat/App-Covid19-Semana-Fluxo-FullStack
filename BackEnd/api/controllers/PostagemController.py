from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response
from api.models import *
from api.serializers import *

class PostagemList(APIView):
    # get is the method that gets the data from the dataBase and send it in json format
    def get(self, request):
        postagem = Postagem.objects.all()
        data = PostagemSerializer(postagem, many = True).data
        return Response(data)
    
    # post is the method that receives the data in the json format, reads it and inserts in the dataBase
    def post(self, request):
        '''
        usuario = request.data['usuario']
        titulo = request.data['titulo']
        texto = request.data['texto']
        postagem = Postagem(usuario = usuario, titulo = titulo, texto = texto)
        postagem.save()
        serializer = PostagemSerializer(postagem).data
        '''
        serializer = PostagemSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data)