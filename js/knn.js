(function() {
	var euclidean = jsml.distance.euclidean,
		sort = jsml.sort.heap;
	/**
		Config:
			data - The dataset to push into the KNN model.
			k - neighbourhood size
			distance - The distance function to use.
	*/
	jsml.model.knn = function(config) {
		
		var data,
			k = 5,
			distance = euclidean();
		
		/**
			Base evaluation function.
				x - is a record(or a set of records) to be tested upon.
		*/
		var model = function(x) {
			
			if (arguments == 0)
				throw new error("Need at least one argument");
			
			var dataset = data();
			var measures = [];
			var features = data.features(false);
			//var indexes = [];
			for (var i =0; i < dataset.length; i++) {
				var m = {};
				m.measure = distance(x, dataset[i], features);
				m.index = i;
				measures.push(m);
			}
			//Sort is descending we want ascending.
			var sortedMeasures = sort(measures, function(d) {return d.measure}).reverse();
			var neighborhood = [];
			for (var i = 0; i < k; i++) {
				var d = dataset[sortedMeasures[i].index];
				d.measure = sortedMeasures[i];
				neighborhood.push(d);
			}
			console.log(sortedMeasures.slice(0,k));
			
			console.log(jsml.aggregator.majority()(neighborhood, function(d) {return d.Play}))
			return neighborhood;
		};
		
		/**
			Push the dataset into the model. Since KNN is a instance-based learner, it simply stores the set.
			Furthermore, since this model is being used for demonstration, it's fine to keep this a naive implementation.
		*/
		model.train = function(x) {
			data = x;
		};
		
		/**
			Get or set the neighbourhood size (k).
		*/
		model.k = function(x) {
			if (arguments.length == 0)
				return k;
			k = x;
		};

		if (config.data)
			data = config.data;
		
		if (config.k)
			k = config.k;
			
		if (config.distance)
			distance = config.distance;

		return model;
	}
	jsml.aggregator = function(){};
	jsml.aggregator.majority = function() {
		var m = function (group) {

		};

		var aggregate = function(group, evaluation) {
			var count = [];
			for (var i = 0; i < group.length; i++) {
				var eval = evaluation(group[i]);
				if (!count[eval])
					count[eval] = 0;
				count[eval] += 1;
			}
			var maxKey,
				maxValue=-1;
			for (var key in count) {
				if (count[key] > maxValue) {
					maxKey = key;
					maxValue = count[key];
				}
			}
			return maxKey;
		}

		return aggregate;
	};
})();