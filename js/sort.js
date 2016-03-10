jsml.sort = {};

jsml.sort.heap = heap;
var heap = function(unsortedData) {
	var data = unsortedData.slice(0);
	var sortedData = [];
	var h = function() {
		
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
	
	h.buildMaxHeap = function() {
		var len = data.length;
		while (data.length > 1) {
			h.heapify();
			swap(0, data.length-1);
			sortedData.push(data.pop());
		}
		
	};
	
	h.heapify = function() {
		
		for (var index = data.length -1; index > 0; index--) {
			var parentVal = h.parent(index);
			var currentVal = data[index];
			if (currentVal > parentVal) {
				swap(index, h.iparent(index));
			}
		}
	}
	
	var swap = function(i, j) {
		var temp = data[i];
		data[i] = data[j];
		data[j] = temp;
	};
	
	return h;
};

