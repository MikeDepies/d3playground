var s = d3.select("svg");

test = jsml.ui.chart.factory.createScatter(s);
console.log(s);
console.log("TEST");
//do some stuff


var xAxis = jsml.ui.chart.component.factory.axis();
xAxis.dom.attr.class = "x axis";
//test(s);