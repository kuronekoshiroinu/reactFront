# from django.shortcuts import render
from rest_framework import viewsets
from .serializer import EstudianteSerializer
from .models import Estudiante

class EstudianteView(viewsets.ModelViewSet):
    serializer_class = EstudianteSerializer
    queryset = Estudiante.objects.all()

