var ui = jsml.ui;
var chartFactory = jsml.ui.chart.factory();
var s = d3.select("svg");

var components = [];
var xAxis = ui.chart.component.factory.axis();
xAxis.dom.attr.class = "x axis";

var yAxis = ui.chart.component.factory.axis();
yAxis.dom.attr.class = "y axis";


components.push(xAxis);
components.push(yAxis);

//console.log(components[0]);

chart = chartFactory.createScatter(s, components);

//test(s);