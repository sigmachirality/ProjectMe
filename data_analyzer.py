import json
import os
import datetime
from pymagnitude import *
import kMeansClustering as clustering


default_time = 3
data_dir = "data"


def parse_year(string):
	try:
		return int("".join([s for s in string.split() if s.isdigit()]))
	except:
		return -1


def consolidate():
	files = os.listdir(data_dir)
	aggregate = []


	for f in files:
		if f == "total.json":
			continue
		with open("data" + os.sep + f, mode='r', encoding='utf-8') as file:
			data = json.load(file)
			aggregate.extend(data)

	with open("total.json", "w") as file:
		json.dump(aggregate, file)



def gen_times():
	files = os.listdir(data_dir)
	aggregate = []


	for f in files:
		if f == "total.json":
			continue
		with open("data" + os.sep + f, mode='r', encoding='utf-8') as file:
			data = json.load(file)
			for entry in data:
				for i in range((len(entry['jobs']) - 1), 0, -1):
					y2 = parse_year(entry['jobs'][i - 1]["hire_date"])
					y1 = parse_year(entry['jobs'][i ]["hire_date"])
					if y1 == -1 or y2 == -1:
						entry['jobs'][i]['time'] = default_time
					else:
						entry['jobs'][i]['time'] = y2 - y1
				if (len(entry['jobs']) >= 1):
					job = entry['jobs'][0]
					y2 = datetime.datetime.now().year
					y1 = parse_year(job["hire_date"])
					if y1 == -1:
						job['time'] = default_time
					else:
						job['time'] = y2 - y1
			aggregate.extend(data)

	with open("total.json", "w") as file:
		json.dump(aggregate, file)



def generate_titles():
	titles = []
	with open("total.json", mode = "r", encoding ="utf-8") as file:
		data = json.load(file)
		for entry in data:
			titles.extend([(i["title"]) for i in (entry['jobs'])])

	with open("titles.txt", mode = "w", encoding ="utf-8") as file:
		file.write(("\n").join(titles))


def vector_stuff():
	#vectors = Magnitude("test_titles.txt", stream = True)
	vecs = Magnitude('C://Users/Owen/Desktop/GoogleNews-vectors-negative300.magnitude')

	with open("test_titles.txt", "r") as file:
		titles = [i.strip() for i in file.readlines()]

	for i,t1 in enumerate(titles):
			print(vecs.distance("_".join(t1.split(" ")), titles[i:]))
			print(t1, titles[i+1:])

	print(vecs.distance("cat", "dog"))
	print(vecs.distance("elephant_gun", "pizza_bagel"))


def generateGraphData():
	with open("total.json", mode = "r", encoding ="utf-8") as file:
		data = json.load(file)

	with open("ML Output Data/means.json", mode = "r", encoding ="utf-8") as file:
		means = json.load(file)

	model = clustering.generateModel()
	clusters = [[] for i in means]

	last_item = None
	last_index = None

	ctr = 0
	for resume in data:
		for job, job2 in zip(resume['jobs'], resume['jobs'][1:]):



			if (last_item is None):
				item = clustering.vectorizePhrase(job['title'], model)
				index = clustering.Classify(means, item)
			else:
				item = last_item
				index = last_index

			item2 = clustering.vectorizePhrase(job2['title'], model)
			index2 = clustering.Classify(means, item2)

			last_item = item2
			last_index = index2

			clusters[index].append((job, index2))
			ctr += 1
			if (ctr % 100 == 0):
				print(ctr)

		if (len(resume['jobs']) == 1):
			job = resume['jobs'][-1]
			item = clustering.vectorizePhrase(job['title'], model)
			index = clustering.Classify(means, item)
			clusters[index].append((job, -1))
			ctr += 1
			if (ctr % 100 == 0):
				print(ctr)
		elif (len(resume['jobs']) > 1):
			job = resume['jobs'][-1]
			clusters[last_index].append((job, -1))
			ctr += 1
			if (ctr % 100 == 0):
				print(ctr)

	cluster_data = [[0, [0 for i in clusters]] for c in clusters]


	for i,c in enumerate(clusters):
		total_time = 0
		for job, i2 in c:
			time = abs(int(job['time']))
			total_time += time
			if i2 != -1:
				cluster_data[i][1][i2] += 1
		if len(c) != 0:
			cluster_data[i][0] = total_time / len(c)
		else:
			cluster_data[i][0] = 0


	with open("graphData.json", mode = "w", encoding ="utf-8") as file:
		means = json.dump(cluster_data, file)




def main():
	generateGraphData()
	#vector_stuff()
	#generate_titles()
	# with open("total.json", "r") as file:
	# 	data = json.load(file)
	# 	print(data[0])


main()