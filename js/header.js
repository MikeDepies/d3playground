(function() {
	/**
		The header class is responsible for declaring information about the dataset. What the feature are,
		what the label is.
		
		To-do:
			Would like to add comprehensive feature information to the header.
	*/
	jsml.dataset.header = function(record) {
		var label;
		var features = [];
		for (var key in record)
			features.push(key);
		h = function() {
			return features;
		}
		
		/**
			Specify the label for the header. If no label is provided, the existing 
			label will be returned.
		*/
		h.label = function(x) {
			if (!x)
				return label;
			label = x;
		}
		
		/**
			Tests a record against the header to see if it's valid or not.
		*/
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
})();