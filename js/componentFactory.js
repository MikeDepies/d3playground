(function() {
	var ui = jsml.ui;
	var component = ui.chart.component;
	var construction = ui.chart.component.construction;
	
				
			
			/*
				What about making a component factory.
				They create "recipes" that acts as complex objects. Such as Axis:
					{
						dom : "g",
						scale : d3.scale.linearScale(),
						svg : d3.svg.axis()
					}
			*/
	
	var componentFactory = ui.chart.component.factory = function () {
		var c = component();
		c.construction.push(construction.attribute());
		
		return c;
	};
	
	componentFactory.composite = function() {
		var c = componentFactory();
		c.children = [];
		
		return c;
	}
	
	/**
	CompositeComponent, has children and does what charts does? for loop over children components!
	*/
	
	componentFactory.axis = function() {
		var c = componentFactory.composite();
		var children = c.children;
		c.construction.push(construction.axis());
		//explicitly set g tag (don't depend on component defaults)
		c.dom.element = "g";
		c.dom.attr.class = "axis";
		c.d3 = {
			scale : d3.scale.linear(),
			axis : d3.svg.axis()
			};
		return c;
	};
	
	componentFactory.label = function() {
		
		var c = componentFactory();
		c.dom.element = "text";
		
	}
})();