(function () {
var distance = jsml.distance = {};

distance.euclidean = function() {

	var dist = function(x1, x2, features) {
		var sum = 0;
		for (var f in features) {
			sum += squaredDiff(x1[f], x2[f]);
		}
		
		return Math.sqrt(sum);
	}
	
	var squaredDiff = function(x1, x2) {
		return Math.pow((x1 - x2), 2);
	};
	
	return dist;
}
})()