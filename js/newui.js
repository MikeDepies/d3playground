var ui = jsml.ui;
var chartFactory = jsml.ui.chart.factory();
var s = d3.select("svg");

var components = [];
var xAxis = ui.chart.component.factory.axis();
xAxis.dom.attr.class = "x axis";

components.push(xAxis);

//console.log(components[0]);

test = chartFactory.createScatter(s, components);
var cb = function (dataset) {
	dataset.label("Play");
	var x = dataset()[0];
	console.log(x);
	console.log(jsml.model.knn({ k: 10, data : dataset})(x));
	
}
var rd = jsml.dataset.csvData({callback : cb, file : "data/data.csv"});//randomData(config);//generate random data from the configuration above.

//test(s);