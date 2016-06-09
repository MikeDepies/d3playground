(function() {
	var chartGroup = [];

	chartGroup.addComponent = function(c) {
		for (var i = 0; i < chartGroup.length; i++) {
			chartGroup[i].addComponent(c);
		}
	}
})();