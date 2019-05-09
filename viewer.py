import json 


def main():
	with open("total2.json", mode='r', encoding='utf-8') as file:
		data = json.load(file)

	neg_ctr = 0
	ctr = 0

	for entry in data:
		for job in entry['jobs']:
			ctr += 1
			if (job['time'] < 0):
				neg_ctr+=1

	print(neg_ctr, ctr)

	#print(json.dumps(data[2]['jobs'], indent = 4))


main()