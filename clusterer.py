import sklearn.cluster as sk
import gensim


kmeans = sk.KMeans(n_clusters = 8)
model = gensim.models.Word2Vec(data, min_count = 1, size = 100, window = 5, sg = 1)

kmeans.fit()