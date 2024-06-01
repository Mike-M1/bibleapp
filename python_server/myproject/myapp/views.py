from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .crew_setup import run_crew

# Create your views here.
def home(request):
    return HttpResponse("Hello, World")

def run_crew_view(request):
    result = run_crew()
    return JsonResponse({'result': result})

