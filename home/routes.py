from django.http import JsonResponse, HttpResponse
from django.conf import settings
from django.db.models import Q, Avg
from django.views.decorators.cache import cache_page, never_cache
from statistics import mean


def search_jobs(request):
    //do some stuff
    return JsonResponse({})


def find_path(request):
    return JsonResponse({})
