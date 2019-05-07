from neo4django.db import models


class Job(models.NodeModel):
    title = models.StringProperty()


class JobInstance(models.NodeModel):
    years = models.IntegerProperty
    job = models.Relationship(
        Job,
        rel_type='instance_of',
        related_name='instances'
    )
    company = models.Relationship(
        Company,
        rel_type='at_company',
        related_name='jobs'
    )
    location = models.Relationship(
        Location,
        rel_type='at_company',
        related_name='companies'
    )
    next_job = models.Relationship(
        self,
        rel_type='next_job',
        related_name='prev_job'
    )


class Company(models.NodeModel):
    name = models.StringProperty()


class Location(models.NodeModel):
    name = models.StringProperty()
