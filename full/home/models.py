from django.db import models


class Job(models.Model):
    name = models.CharField()


class Edge(models.Model):
    start = models.ForeignKey(Job, on_delete=models.CASCADE)
    end = models.ForeignKey(Job, on_delete=models.CASCADE)
    years = models.DecimalField()
    count = models.IntegerField()
