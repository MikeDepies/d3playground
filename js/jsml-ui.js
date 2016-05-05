(function() {
	var ui = jsml.ui = {};
	
	/*
		Chart Container?
			Since if you have more than 1 item in the selection, there are different visual elements that need to be handled and updated.
			
			
	*/
	
	
	ui.scatterChart = function() {
		var svg = {};//.root .xAxis .yAxis .graphArea
		var
			xScale = [],
			yScale = [],
			xAxis = d3.svg.axis(),
			yAxis = d3.svg.axis(),
			width,
			height
			;
		var data;
			
			/**
			Produces a chart object that works on a selection...
				Think about how to support multiple selection scopes. svg, g, and so forth
				maybe even have different object types? (chart.SVG or chart.G, chart.DIV)
				
				If selection is comprised of various elements, we need to create a chart for each one. Each needing it's own special initialization.
				
			*/
			var chart = function(selection) {
				svg.root = selection;
				console.log("chart constructor");
				construct_ui(selection);
			}
			
			/**
				Set the dataset for the chart. 
				Should this trigger an update? 
			*/
			chart.setData = function(d) {
				data = d;
				return chart;
			}
			
			/*
				Think about customizable ui object formatting...
				basically, declare parts that can self construct... xAxis, yAxis-left, yAxis-right, legend. Each of these optional from a gui standpoint.
			*/
			function construct_ui(svg) {
				svg.graphArea = svg.append("g");
				svg.xAxis = svg_graphArea.append("g");
				svg.yAxis = svg_graphArea.append("g");
				//
				
				for (component in components) {
					component._construct();
				}
			}
			
			
			
			//Main update method? Is this an appropriate way to handle chart routing...
			function update() {
				//push updated data
				//refresh ui
				//rescale
			}
			
			return chart;
	}
	
	/**
		The factory is stateless. So it can act as a namespace method.
	*/
	var factory = ui.chart.factory = function() {
		//default functionalitY? 
		//Returns itself... infinite chaining!
		return factory;
		
	};
	
	factory.createScatter = function(svgSelection) {
		var charts = [];
		svgSelection.each(function (d, i) {
			var d3_this = d3.select(this);
			var new_chart = ui.scatterChart();
			//Set up chart
			
			//End set up chart
			d3_this.call(new_chart);
			charts.push(new_chart);
		});
		return charts;
	};
	
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
		
		component.dom.attr = {};
		component._construct = function(root) {
			var attr = component.dom.attr;
			var element = root.append(component.dom.element);
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
		var component = component();
		
		//explicitly set g tag (don't depend on component defaults)
		component.dom.element = "g";
		
		
		return component;
	};
	
	componentFactory.label = function(config) {
		
		var component = component();
		
		component.dom.element = "text";
		
	}
	
	
	
})();

/*
Chart Factory for Selection
	Selection goes in -> set of Charts go out (maybe in a chartWrapper/container/Selection)
	
Chart For Selection
	The factory pairs a chart per element in selection. 
	
	You can either manipulate all the charts via the container, or just one. Master Slave kind of relationship.

*/