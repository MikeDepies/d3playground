(function() {
	var ui = jsml.ui;
	var construction = ui.chart.component.construction = function() {
		
	};
	
	construction.attribute = function() {
	
		return function(root, c) {
			var attr = c.dom.attr;
			var element = c.dom();
			for (var name in attr) {
				element.attr(name, attr[name]);
			}
		}
	};
	
	construction.axis = function() {
		return function(root, c) {
			
		}
	};
	
	
})();