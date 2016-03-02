var data = function(config) {
	var dataset = [];
	var header = jsml.header();
	var label;
	
	//Process the config parameter.
	/*
		Options for config:
			header: {} - An object that specifies the columns for data.
			
	*/
	
	
	/*
		hello mike
	*/
		
	
	var data_inst = function() {
		//return a copy of the array.
		//Note: the objects are shared between the original and the copy. This is a shallow clone.
		return dataset.slice(0);
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
		if (!header.valid_record(record))
			throw "record does not match header";
		dataset.push(record);
		return data_inst;
	}
	
	data_inst.header = function(new_header) {
		if (!new_header) return header;
		
		header = new_header;
		return data_inst;
	}
	
	data_inst.features = function(includeLabel) {
		var f = header().slice(0);
		var labelIndex = f.indexOf(header.label());
		
		if (includeLabel || labelIndex == -1)
			return header().slice(0);
		
		f.splice(labelIndex, 1);
		return f;
	}
	
	return data_inst;
}