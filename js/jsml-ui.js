(function() {
	var ui = jsml.ui = {};
	
	/*
		Chart Container?
			Since if you have more than 1 item in the selection, there are different visual elements that need to be handled and updated.
			
			
	*/
	
	
	ui.scatterChart = function() {
		var svg_root,
			svg_graphArea,
			svg_xAxis,
			svg_yAxis,
			xScale = [],
			yScale = [],
			xAxis = d3.svg.axis(),
			yAxis = d3.svg.axis()
			;
			
			
			/**
			Produces a chart object that works on a selection...
				Think about how to support multiple selection scopes. svg, g, and so forth
				maybe even have different object types? (chart.SVG or chart.G, chart.DIV)
				
				If selection is comprised of various elements, we need to create a chart for each one. Each needing it's own special initialization.
				
			*/
			var chart = function(svg) {
				svg_root = svg;
				console.log("chart constructor");
				construct_ui(svg);
			}
			
			/*
				Think about customizable ui object formatting...
				basically, declare parts that can self construct... xAxis, yAxis-left, yAxis-right, legend. Each of these optional from a gui standpoint.
			*/
			function construct_ui(svg) {
				svg_graphArea = svg.append("g");
				svg_xAxis = svg_graphArea.append("g");
				svg_yAxis = svg_graphArea.append("g");
			}
			
			
			//Main update method? Is this an appropriate way to handle chart routing...
			function update() {
			}
			
			return chart;//This is wrong, need to return an array or charts?
	}
	
	/**
		The factory is stateless. So it can act as a namespace method.
	*/
	var factory = ui.scatterChart.factory = function() {
		//default functionalitY?
		
	};
	
	factory.createScatter = function(svgSelection) {
		var charts = [];
		console.log(svgSelection);
		console.log("factory");
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
	
	
	
})();

/*
Chart Factory for Selection
	Selection goes in -> set of Charts go out (maybe in a chartWrapper/container/Selection)
	
Chart For Selection
	The factory pairs a chart per element in selection. 
	
	You can either manipulate all the charts via the container, or just one. Master Slave kind of relationship.

*/