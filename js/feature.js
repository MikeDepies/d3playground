feature = {};

feature.real = function() {
	return jsml_feature_real();
};

function jsml_feature_real() {
	var min, max, mean, median, sum;
	var data = [];
	
	var f = function() {
		return data.slice(0);
	}
	
	f.add = function(x) {
		if (typeof x != "number")
			throw "value added to the feature is not of correct type(Number)";
		data.push(x);
		dirty();
		return f;
	}
	
	f.min = function() {
		if (data.length == 0)
			throw "There is no data in the feature.";
		if (min)
			return min;
		min = data[0];
		for (var i = 1; i < data.length; i++)
			min = Math.min(min, data[i]);
			
		return min;
	}
	
	f.max = function() {
		if (data.length == 0)
			throw "There is no data in the feature.";
		if (max)
			return max;
		max = data[0];
		for (var i = 1; i < data.length; i++)
			max = Math.max(max, data[i]);
			
		return max;
	}
	
	f.mean = function() {
		if (data.length == 0)
			throw "There is no data in the feature.";
		if (mean)
			return mean;
		mean = sum()/data.length;
		
		return mean;
	}
	
	f.sum = function() {
		if (data.length == 0)
			throw "There is no data in the feature.";
		if (sum)
			return sum;
		sum = 0;
		for (var i = 0; i < data.length; i++)
			sum += data[i];
		return sum;
	}
	
	f.median = function() {
		throw "Not implemented";
	}
	
	var dirty = function() {
		max = mean = median = sum = min = null;
	}
	
	return f;
}


feature.real = function() {
	return jsml_feature_string();
};

function jsml_feature_string() {
	
}