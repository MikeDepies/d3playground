header = function() {
	var label;
	var features = {};
	h = function() {
		return features;
	}
	
	h.label(x) {
		if (!x)
			return label;
		label = x;
	}
	
	h.numOfLabels() {
		return label.length;
	}
};