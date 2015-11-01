/*
 * viz.js
 * 
 * Defines:
 * -Data to be visualized in chart.
 * -Options for look of the chart.
 * -How the chart is to be drawn.
 * 
 * @author Team Yoyodyne
 * @since Nov 1, 2015
 */

var librs = librs || {};

google.load('visualization', '1', {packages: ['corechart']});

google.setOnLoadCallback(vixInit);

//Variables.
var data;
var views = {};
var totals = {};
var chart;
var major = [5];

//Set options for chart to be drawn.
var options = {
	width: 700,
	height: 400,
	title: '',
	hAxis: {
		title: ''
	},
	legend: {
		position: 'none'
	},
	animation: {
		"startup": true,
		"duration" : 500
	}
};

function vizInit() {
	//Create new viz object using the Google API,
	//a column chart inside div ex0 in index.html file.
	chart = new google.visualization.ColumnChart(document.getElementById('ex0'));
	
	//Make the initial query to get the whole Fusion table.
	var query = "";
	
	var opts = {sendMethod: 'auto'};
	var queryObj = new google.visualization.Query('',opts);
	
	//Send the query.
	queryObj.setQuery(query);
	queryObj.send(function(e){
		data = e.getDataTable();
		var thisMajor = 
	});
	
}
