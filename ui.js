/**
 * ui.js
 *
 * Defines functionality for instrumenting the user-interface.
 * 
 * @author Team Yoyodyne
 * @since Nov 1 2015
 *
 */

var librs = librs || {};
librs.ui = {};
librs.ui = function() {

/**
 * function: fetch
 *
 * purpose: get element inputed on website to filter results.
 *
 * Date/author: Team Yoyodyne/10_1_15
 */
var fetch = function(val) {
	//var val = 1;
	console.log("Inside fetch()! val is: ");
	console.log(val);
	vizController(val);
};

var toggle = function() {

};

/*
 * function window onload
 * purpose: buttons on left will toggle between data appropriately.
 * author: Rachel Smith
 */
window.onload = function(){
	console.log("Inside window onload!");
	document.getElementById('bus-button').onclick=function(){
		fetch(1);
		document.getElementById('currentmajor').innerHTML = "Business"
	}
	document.getElementById('hum-button').onclick=function(){
		fetch(2);
		document.getElementById('currentmajor').innerHTML = "Humanities or History"
	}
	document.getElementById('art-button').onclick=function(){
		fetch(3);
		document.getElementById('currentmajor').innerHTML = "Arts"
	}
	document.getElementById('har-button').onclick=function(){
		fetch(4);
		document.getElementById('currentmajor').innerHTML = "Hard Sciences"
	}
	document.getElementById('com-button').onclick=function(){
		fetch(5);
		document.getElementById('currentmajor').innerHTML = "Comp Sci, Math, or Engineers"
	}
	document.getElementById('hea-button').onclick=function(){
		fetch(6);
		document.getElementById('currentmajor').innerHTML = "Health Professions"
	}
	document.getElementById('soc-button').onclick=function(){
		fetch(7);
		document.getElementById('currentmajor').innerHTML = "Social and Behavioral Sciences"
	}
	document.getElementById('edu-button').onclick=function(){
		fetch(8);
		document.getElementById('currentmajor').innerHTML = "Education"
	}
	document.getElementById('oth-button').onclick=function(){
		fetch(9);
		document.getElementById('currentmajor').innerHTML = "Other"
	}	
}

var initialize = function() {
	
};

// When this file is included at the bottom of the page,
// the js is loaded after the DOM is loaded.  It is a
// good time to initialize the UI elements in the page.
initialize();
}; //end module

// Invoke module. After invocation, the module's code is now added to
// the namespace and is accessible through the librs object.
librs.ui();