/**
config is expecting these properties
	num_records - The number of records to generate
	header - the header information for each record
*/
jsml.dataset.randomData = function(config) {
	//construct dataset
	var d = jsml.dataset.data();
	//locally store header info from config
	var _header = config.header;
	//locally store num of records to generate form config
	var num_records = config.num_records;
	
	//constructing dataset's header via the jsml.header() function
	d.header(jsml.dataset.header(_header));
	
	for (var i =0; i < num_records; i++) {
		var new_entry = {};
		//For example:
		//name = temperature
		//value = [0,100]
		//Check the value type - is it a number? is it an array? is it an array of numbers or strings?
		//		If it's a string do the stuff in 
		//			else if (typeof value[0] === "string") {
		//if it's a number in the array, do math random generation between [0] and [1] of the array.
		//	min = array[0], max = array[1]
		//	range = max - min
		//	(Math.random() * range) + min
		$.each(_header, function(name, property) {
			var value = property;
			
			//This value check statement is a bit of a hack. Basically, array objects in javascript
			//have a length property. by doing if (value.length) I'm checking if the value object is an array some what indirectly.
			//If it is an array, I push the first value of property into the value variable. Then below I do typchecks on the value variable
			//and make decisions based on this.
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