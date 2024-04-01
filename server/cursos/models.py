from django.db import models

# Create your models here.
class Estudiante(models.Model):
    id_estudiante = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    edad = models.IntegerField()
    
    def __str__(self) -> str:
        return str(self.id_estudiante)

class Materia(models.Model):
    id_materia = models.IntegerField(primary_key=True)
    codigo = models.CharField(max_length=10)
    nombre = models.CharField(max_length=150)

    def __str__(self) -> str:
        return str(self.id_materia)

class EstMat(models.Model):
    id_estudiante = models.OneToOneField(Estudiante, on_delete=models.DO_NOTHING, primary_key=True)
    id_materia = models.ManyToManyField(Materia, primary_key=False)

    def __str__(self) -> str:
        return str(self.id_estudiante) + '_cursos'