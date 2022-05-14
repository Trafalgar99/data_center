
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('z1', views.z1, name="z1"),
    path("api/data", views.get_data, name="api-data"),
]
