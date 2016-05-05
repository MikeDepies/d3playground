(function() {
	var ui = jsml.ui;
	ui.chart = {};
	ui.chart.scatter = function() {
		var svg = {};//.root .xAxis .yAxis .graphArea
		var
			xScale = [],
			yScale = [],
			components = [],
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
			
			chart.addComponent = function(c) {
				components.push(c);
			}
			
			/*
				Think about customizable ui object formatting...
				basically, declare parts that can self construct... xAxis, yAxis-left, yAxis-right, legend. Each of these optional from a gui standpoint.
			*/
			function construct_ui(sel_svg) {
				svg.graphArea = sel_svg.append("g");
				svg.xAxis = svg.graphArea.append("g");
				svg.yAxis = svg.graphArea.append("g");
				//
				
				for (component in components) {
					component._construct(svg);
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
			var new_chart = ui.chart.scatter();
			//Set up chart
			
			//End set up chart
			d3_this.call(new_chart);
			charts.push(new_chart);
		});
		return charts;
	};
	})();