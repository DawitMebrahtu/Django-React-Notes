from django.shortcuts import render

# Create your views here.


def getRoutes(request):
	routes = []
	return JsonResponse(routes, safe=True)