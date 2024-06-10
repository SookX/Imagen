from django.urls import path, include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('key/', views.gen_key),
    path('valid/', views.check_key),
    path('user/', views.key_credentials)

]

