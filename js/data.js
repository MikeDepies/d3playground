(function () {
	var dataset = jsml.dataset;
	dataset.data = function(config) {
		var dataset = [];
		var header = jsml.dataset.header();
		var label;
		
		//Process the config parameter.
		/*
			Options for config:
				header: {} - An object that specifies the columns for data.
				
		*/
		
		/**
			Construct an instance of our dataset. With a default call to return the records in a dataset.
		 */
		var data_inst = function() {
			//return a copy of the array.
			//Note: the objects are shared between the original and the copy. This is a shallow clone.
			return dataset.slice(0);
		}
		
		/**
			Request a record, or an array of records. If no parameter is provided, 
			this method acts as an alias to the default call.
			
			Handling for records:
				not set - simply returns all records. This is an alias to the default call.
				
				Number - return the specified record index.
				
				Array - return each record specified in the array.
				
				Else - Throw an error.
				
			To do:
				Array handling will return weird/undefined values if the array is non-numerical.
				
		*/
		data_inst.record = function(records) {
			if (!arguments.length) 
				return data_inst();
			console.log(arguments);
			if (!records.length)
				if (typeof records ==="number")
					return dataset[records];
				else
					throw "dataset.records(..) is expecting a number.";
			var ret_records = [];
			for (var i =0; i < records.length; i++)
				ret_records.push(dataset[records[i]]);
			return ret_records;
		}
		
		/**
			Add a record into the dataset instance. If the record's keys do
			not match the header's specifications, an error will be thrown.
			
			record - An object with key/values.
		*/
		data_inst.add_record = function(record) {
			//Add record and return our inst for chaining
			//check header against record to make sure data is right.
			if (!header.valid_record(record))
				throw "record does not match header";
			dataset.push(record);
			return data_inst;
		}
		
		/**
			
		*/
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
})();