jsml.sort = {};

/**
	Heapsort implementation - returns a new array with the data sorted in descending order.
	
	Notes:
		1) Could clean up the code a bit more and look to optimize. Currently all the data is copied, so we end up with 2 arrays.
		2) We have a function that instantiates a function object that is only utilized once. The heapsort object should parametrize it's
			methods instead of keeping internal states.
*/
jsml.sort.heap = function(unsortedData, dataGetter) {
	//Use the slice(0) short cut to create a shallow copy of the array.
	var data = unsortedData.slice(0);
	var sortedData = [];
	
	if (!dataGetter)
		dataGetter = function(d) {return d;};
	/**
		Conducts the heap sort
		@return sorted data array.
	*/
	var h = function() {
		h.buildMaxHeap();
		return sortedData;
	}
	
	h.element = function(index) {
		return data[index];
	};
	
	h.leftChild = function (index) {
		var leftChildIndex = (index * 2) + 1;
		//if (leftChildIndex < data.length)
			return h.element(leftChildIndex);
	};
	
	h.rightChild = function (index) {
		var rightChildIndex = (index * 2) + 2;
		//if (rightChildIndex > data.length)
			return h.element(rightChildIndex);
	};
	
	h.parent = function (index) {
		return h.element(h.iparent(index));
	};
	
	h.iparent = function (index) {
		var parentIndex = Math.floor((index - 1)/2)
		return parentIndex;
	};
	
	/**
		Builds a max heap. This is the descending order sort operation.
		After each heapify call, we swap the max value (which is located at the 0 index) 
		with the last index in the array. Then we pop the element off the heap array into
		the sorted array.
	*/
	h.buildMaxHeap = function() {
		var len = data.length;
		while (data.length > 1) {
			h.heapify();
			swap(0, data.length-1);
			sortedData.push(data.pop());
		}
		sortedData.push(data.pop());
	};
	
	/**
		Performs a heap iteration.
	*/
	h.heapify = function() {
		
		for (var index = data.length -1; index > 0; index--) {
			var parentVal = h.parent(index);
			var currentVal = data[index];
			if (dataGetter(currentVal) > dataGetter(parentVal)) {
				swap(index, h.iparent(index));
			}
		}
	}
	
	/**
		Private method to perform swap of two elements.
		
		Note:
			Should take in the array it's swapping too?
	*/
	var swap = function(i, j) {
		var temp = data[i];
		data[i] = data[j];
		data[j] = temp;
	};
	
	return h();
};

