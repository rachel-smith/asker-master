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

google.setOnLoadCallback(vizInit);

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
		
		//Get major we want to visualize.
		var thisMajor = major[0];
		
		//Create object and get rows corresponding to thisMajor.
		views[thisMajor] = new google.visualization.DataView(data);
		
		views[thisMajor].setRows(views[thisMajor].getFilteredRows([{
		column : 2,
		value : thisMajor}]));

		// Get a subset of the columns.
		views[thisMajor].setColumns([0, 3]);

		// Draw the chart for the initial major.
		chart.draw(views[thisMajor].toDataTable(), options);
		
		
	});
	
};

function vizController(thisMajor) {
	//If the view is not null, draw the chart.
	if(views[thisMajor]!=null) {
		chart.draw(views[thisMajor].toDataTable(),options);
	}	
	else {
		views[thisMajor] = new google.visualization.DataView(data);
		views[thisMajor].setRows(views[thisYear].getFilteredRows([{
			column: 2,
			value: thisMajor}]));
			
			// Get a subset of the columns.
			views[thisMajor].setColumns([0,3]);
			
			// Draw the chart.
			chart.draw(views[thisMajor].toDataTable(), options);
	}
	
}

