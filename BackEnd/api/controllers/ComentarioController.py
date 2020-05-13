from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response
from api.models import *
from api.serializers import *

class ComentarioList(APIView):

    # this post method is the method that receives the data in json format, reads the post that the post belongs (postagem_id) and sends it
    def post(self, request):
        '''
        postagem_id = request.data['postagem_id']
        postagem = get_object_or_404(Postagem, id = postagem_id)
        texto = request.data['texto']
        usuario = request.data['usuario']
        comentario = Comentario(postagem = postagem, texto = texto, usuario = usuario)
        comentario.save()
        serializer = ComentarioSerializer(comentario).data
        return Response(serializer)
        '''
        serializer = ComentarioSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data)

    # this get method is the method that reads all comments from all posts and sends it in json format
    def get(self, request):
        comentarios = Comentario.objects.all()
        data = ComentarioSerializer(comentarios, many = True).data
        return Response(data)

class PostagemComentarioDetail(APIView):

    # this get method is the method that reads all comments from a specific post and send it in json format
    def get(self, request, id):
        postagem = get_object_or_404(Postagem, id = id)
        serializer = PostagemComentarioSerializer(postagem).data
        return Response(serializer)