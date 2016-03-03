/**
A new name space in the jsml object. The csvData option provides a routine to take a csv file
and load it into a jsml.data object that can be used with the rest of the system.

In order to make use of this object, we need to pass in a configuration object.
The config object is just a generic js object that specifies various inputs.
	config = {
		callback : A callback function for after the csv file has been loaded. The loaded data
			will be passed into this callback function.
		
		csvFile : The path/file name for the csv.
		}
Note: The reason for the callback is because d3's csv functionality makes a callback once 
	the file has been retrieved. 
*/
jsml.dataset.csvData = function(config) {
	
	var callback = config.callback;
	var csvFile = config.file;
	//Let's construct a jsml.data object.
	var d = jsml.dataset.data();
	
	d3.csv(csvFile, convert, function(error, data) {
		//grab header information
		var header = {};
		for (var key in data[0]) {
			header[key] = data[0][key];
		}
		d.header(jsml.dataset.header(header));
		//push records into data object.
		for( var i = 0; i < data.length; i++) {
			d.add_record(data[i]);
		}
		
		callback(d);
	});
	
	/**
		Convert searches for numbers and converts them into numerical format.
		This is used in conjunction with d3's csv function.
		
		For each element in the object da, we use the implicit type coercion 
		+numberVar. If the value can be converted into a number, javascript will
		attempt to do this. If not, it will be turned into NAN (Not A Number).
		After this conversion we can check for NAN, and then follow through with 
		the conversion or not.
	*/
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