from django.http import JsonResponse
from django.core import serializers
import networkx as nx
from home.models import Job, Edge
import json


def initialize_network():
    G = nx.DiGraph()
    G.add_nodes_from(Job.all())
    [G.add_edge(e.start, e.end, years=e.years, count=1 / e.count)
     for e in Edge.all()]
    return G


def search_jobs(request):
    return JsonResponse(Job.all())


def get_graph(request):
    nodes = serializers.serialize('json', Job.objects.all())
    edges = serializers.serialize('json', Edge.objects.all())
    return JsonResponse({
        "nodes": json.loads(nodes),
        "edges": json.loads(edges)
    })


def find_path(request):
    # do some stuff
    start_job = request.start
    end_job = request.end
    G = initialize_network()
    return JsonResponse({
        "common": nx.algorithms.shortest_paths(G, source=start_job, target=end_job, weight="count"),
        "fastest": nx.algorithms.shortest_paths(G, source=start_job, target=end_job, weight="years")
    })
