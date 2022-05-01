
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('z1', views.z1, name="z1"),
    path('z2', views.z2, name="z2"),
    path('z3', views.z3, name="z3"),
    path('y1', views.y1, name="y1"),
    path('y2', views.y2, name="y2"),
    path('y3', views.y3, name="y3"),
    path("api/data", views.get_data, name="api-data"),
]
