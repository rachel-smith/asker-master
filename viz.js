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
var thisMajor = 5;
//Set options for chart to be drawn.
var options = {
	width: 800,
	height: 400,
	colors: ['4D177E'],
	title: '',
	hAxis: {
		title: 'Asked Category'
	},
	vAxis: {
		title: 'Number of Students'
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
	var query = "SELECT 'Major category', 'Asked category', Total FROM 1fn29ujEZ0bobQsAqwnpqQ6ufIE46OWGZRr5JOjWR";
	
	var opts = {sendMethod: 'auto'};
	var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);
	console.log(queryObj);
	//Send the query.
	queryObj.setQuery(query);
	queryObj.send(function(e){
		data = e.getDataTable();
		//Create object and get rows corresponding to thisMajor.
		views[thisMajor] = new google.visualization.DataView(data);
		
		views[thisMajor].setRows(views[thisMajor].getFilteredRows([{
		column : 0,
		value : thisMajor}]));

		// Get a subset of the columns.
		views[thisMajor].setColumns([1, 2]);

		// Draw the chart for the initial major.
		chart.draw(views[thisMajor].toDataTable(), options);
		
		
	});
	
};

function vizController(theMajor) {
	thisMajor=theMajor;
	//If the view is not null, draw the chart.
	if(views[theMajor]!=null) {
		chart.draw(views[theMajor].toDataTable(),options);
	}	
	else {
		views[theMajor] = new google.visualization.DataView(data);
		views[theMajor].setRows(views[theMajor].getFilteredRows([{
			column: 0,
			value: theMajor}]));
			
			// Get a subset of the columns.
			views[theMajor].setColumns([1,2]);
			
			// Draw the chart.
			chart.draw(views[theMajor].toDataTable(), options);
	}
	
}

