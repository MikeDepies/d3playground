(function() {
	var ui = jsml.ui;
	var component = ui.component;
	var construction = ui.component.construction;
	
				
			
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
	
	/**
		might act as a chart stand in?
		figure out how to 4loop over children construction only after this componetns construction is finished
		This needs to hold for all subsequent componetns that use composite as a base.
	*/
	componentFactory.composite = function() {
		var c = componentFactory();
		c.children = [];
		
		return c;
	}
	
	/**
	CompositeComponent, has children and does what charts does? for loop over children components!
	-=--=-=-=-=-=-=-=-=-=-=-=-=-
	6/8/2016 - Don't know what I fully mean above^
	I suppose with the 
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