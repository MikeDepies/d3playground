jsml.header = function(record) {
	var label;
	var features = [];
	for (var key in record)
		features.push(key);
	h = function() {
		return features;
	}
	
	h.label = function(x) {
		if (!x)
			return label;
		label = x;
	}
	
	h.valid_record = function(record) {
		var count = 0;
		for (r in record) {
			count+=1;
			if (features.indexOf(r) == -1)
				return false;
		}
		
		if (count != features.length)
			return false;
			
		return true;
	}
	return h;
};