from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,TokenVerifyView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('user/', include('user_authenticate.urls'))
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name = 'index.html'))]