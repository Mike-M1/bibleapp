from django.urls import path
from .views import home
from .views import run_crew_view

urlpatterns = [
    path('', home, name='home'),
    path('run-crew/', run_crew_view, name="run_crew")
]
