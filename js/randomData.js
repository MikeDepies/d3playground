/**
config is expecting these properties
	num_records - The number of records to generate
	header - the header information for each record
*/
randomData = function(config) {
	
	var d = data();
	var _header = config.header;
	var num_records = config.num_records;
	d.header(header(_header));
	
	for (var i =0; i < num_records; i++) {
		var new_entry = {};
		
		$.each(_header, function(name, property) {
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
	}
	
	return d;
	
}