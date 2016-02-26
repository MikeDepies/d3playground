
/**
	Config:
		data - The dataset to push into the KNN model.
		k - neighbourhood size
		distance - The distance function to use.
*/
knn = function(config) {
	
	var data,
		k,
		distance;
		
	if (config.data)
		data = model.train(config.data);
	
	if (config.k)
		k = config.k;
		
	if (config.distance)
		distance = config.distance;
	
	/**
		Base evaluation function.
			x - is a record(or a set of records) to be tested upon.
	*/
	var model = function(x) {
		
		if (arguments == 0)
			throw new error("Need at least one argument");
		
		var dataset = data();
		var measures = [];
		var indexes = [];
		for (var i =0; i < dataset.length; i++) {
			measures[i] = distance(x, dataset[i]);
			indexes[i] = i;
		}
		
		for (var i =0; i < dataset.length; i++) {
			
		}
		
		
		
	};
	
	/**
		Push the dataset into the model. Since KNN is a instance-based learner, it simply stores the set.
		Furthermore, since this model is being used for demonstration, it's fine to keep this a naive implementation.
	*/
	model.train = function(x) {
		data = x;
	}
	
	/**
		Get or set the neighbourhood size (k).
	*/
	model.k = funcion(x) {
		if (arguments.length == 0)
			return k;
		k = x;
	}
}