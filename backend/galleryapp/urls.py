from django.urls import path
from . import views

urlpatterns = [
    path('preview/<int:index>/', views.preview_image, name='preview_image'),
    path('<int:index>/', views.set_image, name='set_image'),
]
