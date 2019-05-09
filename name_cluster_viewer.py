import json


def mlOutput():
	file = open("ML Output Data/id_cluster.json", "r")
	clusters = json.load(file)
	for c in clusters:
		[print(i) for i in c[:10]] 
		print("**********************")

	file.close()

def graphData():
	with open("graphData.json", mode = "r", encoding = "utf-8") as file:
		clusters = json.load(file)

	for c in clusters:
		[print(i) for i in c['jobNames'][:20]] 
		print("**********************")



def main():
	#mlOutput()
	graphData()

main()

