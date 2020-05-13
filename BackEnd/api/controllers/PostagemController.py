from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response
from api.models import *
from api.serializers import *

class PostagemList(APIView):
    # get is the method that gets the data from the dataBase and sends it in json format
    def get(self, request):
        postagem = Postagem.objects.all()
        data = PostagemSerializer(postagem, many = True).data
        return Response(data)
    
    # post is the method that receives the data in the json format, reads it and inserts in the dataBase
    def post(self, request):
        '''
        usuario = request.data['usuario']
        assunto = request.data['assunto']
        texto = request.data['texto']
        imagem = request.data['imagem']
        postagem = Postagem(usuario = usuario, assunto = assunto, texto = texto)
        postagem.save()
        serializer = PostagemSerializer(postagem).data
        '''
        serializer = PostagemSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data)

class PostagemDetail(APIView):

    # the method get in this class gets the data from a specific id informed
    def get(self, request, id):
        postagem = get_object_or_404(Postagem, id = id)
        serializer = PostagemSerializer(postagem).data
        return Response(serializer)