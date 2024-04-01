# from django.shortcuts import render
from rest_framework import viewsets
from .serializer import EstudianteSerializer, MateriaSerializer, EstMatSerializer
from .models import Estudiante, Materia, EstMat

class EstudianteView(viewsets.ModelViewSet):
    serializer_class = EstudianteSerializer
    queryset = Estudiante.objects.all()

class MateriaView(viewsets.ModelViewSet):
    serializer_class = MateriaSerializer
    queryset = Materia.objects.all()

class EstMatView(viewsets.ModelViewSet):
    serializer_class = EstMatSerializer
    queryset = EstMat.objects.all()