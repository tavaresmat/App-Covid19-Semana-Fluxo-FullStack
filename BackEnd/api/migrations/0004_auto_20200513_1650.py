# Generated by Django 3.0.6 on 2020-05-13 16:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_comentario'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comentario',
            old_name='Usuario',
            new_name='usuario',
        ),
    ]