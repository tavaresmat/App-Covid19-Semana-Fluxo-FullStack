from django.db import models

# Modela as colunas do banco de dados
class Postagem(models.Model):
    usuario = models.CharField(max_length = 20)
    assunto = models.CharField(max_length = 50)
    texto = models.CharField(max_length = 500)
    imagem = models.ImageField(blank = True, null = True, upload_to = "fotos")