var data = function(config) {
	var dataset = [];
	var header = {};
	
	//Process the config parameter.
	/*
		Options for config:
			header: {} - An object that specifies the columns for data.
			
	*/
	
	var data_inst = function() {
		return dataset;
	}
	
	data_inst.record = function(records) {
		if (!arguments.length) return dataset;
		if (!records.length) {
			//return specified records in array
			}
	}
	
	data_inst.add_record = function(record) {
		//Add record and return our inst for chaining
		//check header against record to make sure data is right.
		dataset.push(record);
		return data_inst;
	}
	
	data_inst.header = function(new_header) {
		if (!arguments.length) return header;
		header = new_header;
		return data_inst;
	}
	
	data_inst.features = function(includeLabel) {
		//right now label will still be included since it's not discernible which one is the label.
		//but we could create a header object that gives us more meta info.
		features = [];
		$.each(header, function(key, value) {
			features.push(key);
		});
		
		return features;
	}
	
	return data_inst;
}