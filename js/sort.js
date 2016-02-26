sort = {};

sort.heap = heap;
var heap = function() {
	var data = [];
	var h = function() {
	
	}
	
	h.element = function(index) {
		return data[index -1];
	}
	
	h.leftChild = function (index) {
		var leftChildIndex = (index+1) * 2;
		if (leftChildIndex > data.length)
		return h.element(leftChildIndex);
	}
	
	h.rightChild = function (index) {
		var rightChildIndex = (index+1) * 2 + 1;
		if (rightChildIndex > data.length)
		return h.element(rightChildIndex);
	}
	
	h.parent = function (index) {
		var parentIndex = Math.floor((index + 1)/2)
		return h.element(parentIndex);
	}
	
	return h;
};

