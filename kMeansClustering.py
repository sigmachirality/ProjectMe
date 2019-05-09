import math
import json
import numpy
import gensim
import calendar
import sys
from random import shuffle, uniform
import os
import pickle
import codecs
import functools
import multiprocessing as mp
import threading as mt
#fileName=file in format of different tensorflow numbers for each data point,String of phrase



class MutableBool():
    def __init__(self, val):
       self.val = val

    def set(self, val):
       self.val = val



model_path = 'C:/Users/Owen/Desktop/GoogleNews-vectors-negative300.bin'


def generateModel():
    if "serial_model.bin" in os.listdir():
        with open("serial_model.bin", "rb") as sbdata:
            model = pickle.load(sbdata)
    else:
        model = gensim.models.KeyedVectors.load_word2vec_format(model_path, binary=True)
        binary_file = open('serial_model.bin',mode='wb')
        serialize = pickle.dump(model, binary_file)
        binary_file.close()

    print("Model generated")
    return model 

def vectorizePhrase(phrase, model):
    sumVect = numpy.zeros(300)
    i = 0
    for word in phrase.split(" "):
        if i == 5:
            break
        try:
            cvector = model[word]
            sumVect = numpy.add(sumVect, cvector)
            i+=1
        except:
            pass
    return sumVect

def getMonth(month):
    return dict[month]


def groupIdByCluster(expVectors, clusters):
    group = [[] for i in clusters]
    for p in expVectors:
        for i, c in enumerate(clusters):
            if p[0] in c:
                group[i].append(p[1])
                break
    return group 


###_Auxiliary Function_###
def FindColMinMax(items):
    n = len(items[0]);
    minima = [sys.maxsize for i in range(n)];
    maxima = [-sys.maxsize-1 for i in range(n)];
    
    for item in items:
        for f in range(len(item)):
            if(item[f] < minima[f]):
                minima[f] = item[f];
            
            if(item[f] > maxima[f]):
                maxima[f] = item[f];

    # maxima = max(items)
    # minima = min(items)

    return minima,maxima;

def EuclideanDistance(x,y):
    S = 0; #The sum of the squared differences of the elements
    for i in range(len(x)):
        S += math.pow(x[i]-y[i],2);

    return math.sqrt(S); #The square root of the sum

def InitializeMeans(items,k,cMin,cMax):
    #Initialize means to random numbers between
    #the min and max of each column/feature
    
    f = len(items[0]); #number of features
    means = [[0 for i in range(f)] for j in range(k)];
    
    for mean in means:
        for i in range(len(mean)):
            #Set value to a random float
            #(adding +-1 to avoid a wide placement of a mean)
            mean[i] = uniform(cMin[i]+1,cMax[i]-1);

    return means;

def UpdateMean(n,mean,item):
    for i in range(len(mean)):
        m = mean[i];
        m = (m*(n-1)+item[i])/float(n);
        mean[i] = round(m,3);
    return mean;

def FindClusters(means,items, extra):
    print("Finding clusters...")
    clusters = [[] for i in means] #Init clusters
    cluster_name = [[] for i in means]
    #print(items)
    for i, item in enumerate(items):
        #Classify item into a cluster
        index = Classify(means,item)

        #CHANGE TO VECTOR
        cluster_name[index].append(extra[i])
        clusters[index].append(item)
        if i % 100 == 0:
            print(i)
        # if i%100 == 0:
        #     print(str(i) + "clusters calculated")

    return clusters, cluster_name


###_Core Functions_###
def Classify(means,item):
    #Classify item to the mean with minimum distance
    
    minimum = sys.maxsize
    index = -1

    for i in range(len(means)):
        #Find distance from item to mean
        dis = EuclideanDistance(item,means[i])

        if(dis < minimum):
            minimum = dis
            index = i
    
    return index


def calculateSubset(items, means, rangee, clusterSizes, belongsTo, noChange):
    for i in range(rangee[0], rangee[1], 1):
        item = items[i]
        #Classify item into a cluster and update the
        #corresponding means.
        
        index = Classify(means,item)

        clusterSizes[index] += 1
        means[index] = UpdateMean(clusterSizes[index],means[index],item)

        #Item changed cluster
        if index != belongsTo[i]:
            noChange.set(False)
            belongsTo[i] = index

        # if i % 100 == 0:
        #     print(i + " means calculated")

def CalculateMeans(k,items,maxIterations=100000):
    #Find the minima and maxima for columns
    cMin, cMax = FindColMinMax(items)
    
    #Initialize means at random points
    means = InitializeMeans(items,k,cMin,cMax)
    
    #Initialize clusters, the array to hold
    #the number of items in a class
    clusterSizes = [0 for i in means]

    #An array to hold the cluster an item is in
    belongsTo = [0 for i in items]

    num_processes = mp.cpu_count()

    #Calculate means
    for e in range(maxIterations):
        print(str(e) +" iterations")
        #If no change of cluster occurs, halt

        noChange = True;
        for i in range(len(items)):
            item = items[i]
            #Classify item into a cluster and update the
            #corresponding means.
        
            index = Classify(means,item)

            clusterSizes[index] += 1
            means[index] = UpdateMean(clusterSizes[index],means[index],item)

            #Item changed cluster
            if(index != belongsTo[i]):
                noChange = False

            belongsTo[i] = index

            if i % 100 == 0:
                print(str(i) + " means calculated")

        #Nothing changed, return
        if(noChange):
            break

    return means

if __name__ ==  '__main__':
    with open("total.json",  mode = "r", encoding = "utf-8") as file:
        data1 = json.load(file)

    data = []

    ids = set([])

    print("Input Data read")

    for elem in data1:
        # if elem['id'] in ids:
        #     continue
        ids.add(elem['id'])
        data.append(elem)

    print(len(data))
    print(len(data1))

    print(str(len(data)) + " data elements read")

    experiences = []
    i = 0
    for profile in data:
        idd = profile['id']
        for job in profile['jobs']:
            if (job['title'] != ''):
                experiences.append(((job['title']).lower(), idd))
        # for job in profile['jobs']:
        #     experiences.append(((job['company']+" "+job['title']).lower(), idd))
        # for school in profile['schools']:
        #     experiences.append(((school['degree']+" "+school['school_name']).lower(), idd))
        i+=1

    shuffle(experiences)
    experiences = experiences[:5000]

    print(str(len(experiences)) + " experiences generated")

    model = generateModel()

    expVectors = []
    for phrase in experiences:
        vect = vectorizePhrase(phrase[0], model)


        try:
            expVectors.append((vect, phrase))
        except:
            pass

    print("Experiences matched with model.")

    pureVec = [i[0] for i in expVectors]

    items = numpy.array(pureVec)

    k = 32;

    means = CalculateMeans(k,items);
    print("Means calculated")
    clusters, exp = FindClusters(means,items, [i[1] for i in expVectors]);
    print("Clusters calculated")
    try: 
        os.mkdir("ML Output Data")
    except:
        pass
    os.chdir("ML Output Data")

    with open('means.json', "w") as outfile:
        json.dump(means, outfile)

    with open('clusters.json', "w") as outfile:
        json.dump([[p.tolist() for p in i] for i in clusters], outfile)


    with open('id_cluster.json', "w") as outfile:
        json.dump(exp, outfile)




