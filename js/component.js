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
		
		c._construct = function(root) {
			//used to actually make use of the configurations
			var element = c.dom.element;
			root.append(element);
		};
		
		c.dom = function() {
			return c.dom.element;
		}
		//default to <g></g> tag
		c.dom.element = "g";
		
		c.dom.attr = {};
		c._construct = function(root) {
			var attr = c.dom.attr;
			var element = root.append(c.dom.element);
			for (var name in attr) {
				element.attr(name, attr[name]);
			}
		}
		return c;
	}; 
	
	var componentFactory = ui.chart.component.factory = function () {
		//The perfect function!
		return componentFactory;
	};
	
				
			
			/*
				What about making a component factory.
				They create "recipes" that acts as complex objects. Such as Axis:
					{
						dom : "g",
						scale : d3.scale.linearScale(),
						svg : d3.svg.axis()
					}
			*/
	
	componentFactory.axis = function(config) {
		if (config) {
			//inherit config
		}	
		var c = component();
		
		//explicitly set g tag (don't depend on component defaults)
		c.dom.element = "g";
		
		
		return c;
	};
	
	componentFactory.label = function(config) {
		
		var component = component();
		
		component.dom.element = "text";
		
	}
})();