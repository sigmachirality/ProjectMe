from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

from . import routes

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
    path('search/', routes.search_jobs),
    path('path', routes.find_path),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
