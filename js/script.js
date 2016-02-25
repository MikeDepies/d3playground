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
label = {x : feature[0], y : feature[1], label : feature[2]};
var data = dataset();
var svg = d3.select(".features").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
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

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(d[label.x]); })
      .attr("cy", function(d) { return y(d[label.y]); })
      .style("fill", function(d) { return color(d[label.label]); });

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

	 var newdata = [{}];
	svg.selectAll(".newinput").data(newdata).enter()
		.append("circle")
      .attr("class", "dot newinput")
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(0); })
      .attr("cy", function(d) { return y(0); })
      .style("fill", function(d) { return color(0); });

	$("input").change(function() {
	
		newdata = {x:0, y:0, label:"a"};
		newdata.x = + $("." + label.x).val();
		newdata.y = +$("." + label.y).val();
		newdata.label = $("." + label.label).val();
		console.log(newdata);
		d3.select(".newinput").data([newdata])
      .attr("class", "dot newinput")
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(d.x)})
      .attr("cy", function(d) { return y(d.y)})
      .style("fill", function(d) { return color(d.label); });
	});
	  
	}



	var config = {
		num_records : 30,
		header : {feature1 : 0, feature2: 0, label: ["a", "b", "c"]}
		};
	var rd = randomData(config);//generate random data from the configuration above.
	var features = rd.features();

	var dom_features = d3.select(".features").selectAll(".feature").data(features);

	var feature_div = dom_features.enter().append("div");
	
	feature_div.append("label")
		.text( function (d) {return d})
	
	feature_div.append("input").attr("class", function(d) {return d;});
	
	chart(rd);
	
	console.log(features);
	console.log(rd());
})();