from django.db import models


class Job(models.Model):
    name = models.CharField(max_length=200)
    size = models.IntegerField()


class Edge(models.Model):
    start = models.ForeignKey(
        Job, on_delete=models.CASCADE, related_name="start")
    end = models.ForeignKey(Job, on_delete=models.CASCADE, related_name="end")
    years = models.DecimalField(decimal_places=2, max_digits=4)
    count = models.IntegerField()
