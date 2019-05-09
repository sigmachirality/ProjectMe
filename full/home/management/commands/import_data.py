from django.core.management.base import BaseCommand, CommandError
from ...models import Job, Edge
import json


class Command(BaseCommand):
    help = 'Imports processed JSON file for serving'

    def add_arguments(self, parser):
        parser.add_argument("file", nargs="?", type=str,
                            help="JSON to load graph data from.")

    def handle(self, *args, **options):
        if options["file"]:
            filename = os.path.abspath(options["file"])
        else:
            raise CommandError("You need to specify a file to load!")
        if not os.path.isfile(filename):
            raise CommandError(
                "The file '{}' does not exist!".format(filename))

        with open(filename, "r") as f:
            data = json.load(f.read())

        for index, cluster in enumerate(data):
            Job.objects.create(
                id=index,
                name=cluster.clusterName,
                size=len(cluster.jobNames)
            )

        for start, cluster in enumerate(data):
            for end, connection in enumerate(cluster.numConnections):
                if connection is not 0:
                    start_node = Job.objects.get(id=start)
                    end_node = Job.objects.get(id=end)
                    Edge.objects.create(
                        start=start_node,
                        end=end_node,
                        years=data[start].avgTime,
                        count=connection
                    )

        self.stdout.write(self.style.SUCCESS("Finished importing data!"))
