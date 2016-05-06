(function() {
var ui = jsml.ui;
/**
		Component should have some basic functionality.
			Dom representation
			controller like func?
			self construction?
			
			Component:								Descript:
				dom:								Namespace for dom related data
					element							The element as a string E.G. g, svg, div
					attr:							namespace for the dom.attr settings
						key : value/[]				
				lineage:							Namespace for identifying aspects of the component
					id : value						The current recipe/factory component name
					stack : []						Holds onto the set of id's that have contributed to this component.
				_equalLineage : function()
				_
					
				
					
			
	*/
	var component = ui.chart.component = function() {
		var c = function(root) {c._construct(root)};
		//list of construction functions: constructionCallBack(root, component) {}.
		var element;
		c.construction = [];
		c._construct = function(root) {
			var attr = c.dom.attr;
			element = root.append(c.dom.element);
			for (var key in c.construction) {
				c.construction[key](root, c);
			}
		};
		
		c.dom = function() {
			return element;
		}
		//default to <g></g> tag
		c.dom.element = "g";
		c.dom.attr = {};
		
		return c;
	}; 
	
	
	
				
			
	
})();