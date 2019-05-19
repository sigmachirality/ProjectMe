from django.db import models
from djangotoolbox.fields import ListField, EmbeddedModelField


class Job(models.Model):
    name = models.CharField(max_length=200)
    size = models.IntegerField()

class Edge(models.Model):
    start = EmbeddedModelField('Job')
    end = EmbeddedModelField('Job')
    years = models.DecimalField(decimal_places=2, max_digits=4)
    count = models.IntegerField()
