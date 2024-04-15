from django.urls import path, include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('addKey/', views.gen_key),
    path('checkKey/', views.check_key),
    path('getKeyCredentials/', views.key_credentials)

]

