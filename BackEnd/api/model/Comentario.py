from django.db import models
from .Postagem import Postagem

class Comentario(models.Model):
    postagem = models.ForeignKey('Postagem', related_name = "comentarios", on_delete = models.CASCADE)
    usuario = models.CharField(max_length = 20)
    texto = models.CharField(max_length = 500)