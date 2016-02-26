/**
config is expecting these properties
	num_records - The number of records to generate
	header - the header information for each record
*/
csvData = function(callback) {
	//Need to load via csv into data object.
	var d = data();
	
	d3.csv("data/data.csv", convert, function(error, data) {
		//grab header information
		var header = {};
		for (var key in data[0]) {
			header[key] = data[0][key];
		}
		d.header(jsml.header(header));
		//push records into data object.
		for( var i = 0; i < data.length; i++) {
			d.add_record(data[i]);
		}
		
		callback(d);
	});
	/*var header = config.header;
	var num_records = config.num_records;
	d.header(header);
	
	for (var i =0; i < num_records; i++) {
		var new_entry = {};
		$.each(header, function(name, property) {
			//assume all doubles for a moment	
			var value = property;
			if (value.length)
				value = property[0];
			if (typeof value === "number")
				new_entry[name] = Math.random();
			else if (typeof value === "string") { //technically this will fail for non array strings... but this is example/test code anyways
				new_entry[name] = property[Math.floor(Math.random() * property.length)];
			}
				
			
		});
		d.add_record(new_entry);
	}*/
	
	function convert(da) {
		for(var d in da) {
			var testType = +da[d];
			if (!isNaN(testType))
				da[d] = +da[d];
		}
		return da;
	}
	
	
	return d;
	
}