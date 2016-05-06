var ui = jsml.ui;
var chartFactory = jsml.ui.chart.factory();
var s = d3.select("svg");

var components = [];
var xAxis = ui.chart.component.factory.axis();
xAxis.dom.attr.class = "x axis";

components.push(xAxis);

//console.log(components[0]);

test = chartFactory.createScatter(s, components);

//test(s);