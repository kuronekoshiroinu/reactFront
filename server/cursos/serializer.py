from rest_framework import serializers
from .models import Estudiante, Materia, EstMat

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = '__all__'

class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materia
        fields = '__all__'

class EstMatSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstMat
        fields = '__all__'