(function() {
	var chart = function(dataset) {
	var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var feature = dataset.features();
label = {x : feature[0], y : feature[1], label : dataset.header().label()};
console.log(label);
var data = dataset();
var svg = d3.select(".chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.attr("class", "svg")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  x.domain(d3.extent(data, function(d) { return d[label.x]; })).nice();
  y.domain(d3.extent(data, function(d) { return d[label.y]; })).nice();

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text(label.x);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(label.y)

  var circ = svg.selectAll(".dot")
      .data(data)
    .enter().append("circle");
	circ.attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(d[label.x]); })
      .attr("cy", function(d) { return y(d[label.y]); })
      .style("fill", function(d) { return color(d[label.label]); });
	circ.on("mouseover", function(d, i) {
	
		circ.filter(function (d, i2) {return i === i2;}).attr("class", "dot selected");
		var tr = d3.select(".table").select("tbody").selectAll("tr");
		tr.filter(function (d, i2) { return i === i2;}).attr("class", "highlight");
	});
	
	circ.on("mouseout", function(d, i) {
		circ.filter(function (d, i2) { return i === i2;}).attr("class", "dot");
		var tr = d3.select(".table").select("tbody").selectAll("tr");
		tr.filter(function (d, i2) { return i === i2;}).attr("class", "");
	});
	
  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

	}
	var table = function(dataset) {
		var columns = dataset.features(true);
		var data = dataset();
		var table = d3.select(".table").append("table").attr("class", "zebra"),
        thead = table.append("thead"),
        tbody = table.append("tbody");
		
		 // append the header row
		thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
            .text(function(column) { return column; });
			
		 // create a row for each object in the data
		var rows = tbody.selectAll("tr")
			.data(data)
			.enter()
			.append("tr");

			
			rows.on("mouseover", function(d, i) {
				var circ = d3.select("svg").selectAll(".dot");
				
				circ.filter(function (d, i2) {return i === i2;}).attr("class", "dot selected");
				
				rows.filter(function (d, i2) { return i === i2;}).attr("class", "highlight");
			});
			
			rows.on("mouseout", function(d, i) {
				var circ = d3.select("svg").selectAll(".dot");
		
				circ.filter(function (d, i2) { return i === i2;}).attr("class", "dot");
				var tr = d3.select(".table").selectAll("tr");
				rows.filter(function (d, i2) { return i === i2;}).attr("class", "");
			});
		// create a cell in each row for each column
		var cells = rows.selectAll("td")
			.data(function(row) {
				return columns.map(function(column) {
					return {column: column, value: row[column]};
				});
			})
			.enter()
			.append("td")
				.text(function(d) { return d.value; });	
	}

	var drawNeighborhood = function(circleSelection) {
		
	}

	
	var cb = function(rd) {
	rd.header().label("Play");
	var features = rd.features(false);
	var dom_features = d3.select(".features").selectAll(".feature").data(features);

	var feature_div = dom_features.enter().append("div");
	
	/* feature_div.append("label")
		.text( function (d) {return d})
	
	feature_div.append("input").attr("class", function(d) {return d;});
	 */
	chart(rd);
	table(rd);
	
	}
	
	var rd = jsml.dataset.csvData({callback : cb, file : "data/data.csv"});//randomData(config);//generate random data from the configuration above.
})();