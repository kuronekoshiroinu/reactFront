from django.urls import path, include
from .views import EstudianteView, MateriaView, EstMatView
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register('est', EstudianteView,)
router.register('mat', MateriaView)
router.register('estmat', EstMatView)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Cursos API'))
]