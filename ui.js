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
	//pass major selection to viz.js
	vizController(val);
};

var toggle = function(button) {
	console.log("INSIDE TOGGLE!");
	document.getElementById('bus-button').style.color = "white"
 document.getElementById('hum-button').style.color = "white"
 document.getElementById('art-button').style.color = "white"
 document.getElementById('har-button').style.color = "white"
 document.getElementById('com-button').style.color = "white"
 document.getElementById('hea-button').style.color = "white"
 document.getElementById('soc-button').style.color = "white"
 document.getElementById('edu-button').style.color = "white"
 document.getElementById('oth-button').style.color = "white"

 document.getElementById(button).style.color = "yellow" 
};

/*
 * function window onload
 * purpose: buttons on left will toggle between data appropriately on graph.
 * how it works: when a button is clicked, fetch() is called with the 
 * 				 appropriate major selction, which will get passed to
 * 				 the vizcontroller.js file
 * 
 * author: Rachel Smith
 */
window.onload = function(){
	 console.log("Inside window onload!");
	document.getElementById('bus-button').onclick=function(){
		//fetch(1);
		//document.getElementById('currentmajor').innerHTML = "Business"
		toggle('bus-button');
	}
	document.getElementById('hum-button').onclick=function(){
		toggle('hum-button');
		//fetch(2);
		//document.getElementById('currentmajor').innerHTML = "Humanities or History"
	}
	document.getElementById('art-button').onclick=function(){
		toggle('art-button');
		//fetch(3);
		//document.getElementById('currentmajor').innerHTML = "Arts"
	}
	document.getElementById('har-button').onclick=function(){
		toggle('har-button');
		//fetch(4);
		//document.getElementById('currentmajor').innerHTML = "Hard Sciences"
	}
	document.getElementById('com-button').onclick=function(){
		toggle('com-button');
		//fetch(5);
		//document.getElementById('currentmajor').innerHTML = "Comp Sci, Math, or Engineering"
	}
	document.getElementById('hea-button').onclick=function(){
		toggle('hea-button');
		//fetch(6);
		//document.getElementById('currentmajor').innerHTML = "Health Professions"
	}
	document.getElementById('soc-button').onclick=function(){
		toggle('soc-button');
		//fetch(7);
		//document.getElementById('currentmajor').innerHTML = "Social and Behavioral Sciences"
	}
	document.getElementById('edu-button').onclick=function(){
		//fetch(8);
		toggle('edu-button');
		//document.getElementById('currentmajor').innerHTML = "Education"
	}
	document.getElementById('oth-button').onclick=function(){
		//fetch(9);toggle('bus-button');
		toggle('oth-button');
		//document.getElementById('currentmajor').innerHTML = "Other"
	}	
}

var initialize = function() {
	console.log("inside initialize");
	$(document).ready( function () {
    $('button#bus-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Business"
        
        fetch(1);
		toggle('bus-button');
    });
     $('button#hum-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Humanities or History"
       // toggle('hum-button');
        fetch(2);
        toggle('hum-button');
    });
     $('button#art-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Arts"
        toggle('art-button');
        fetch(3);
    });
     $('button#har-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Hard Sciences"
        toggle('har-button');
        fetch(4);
    });
     $('button#com-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Comp Sci, Math, or Engineering"
        toggle('com-button');
        fetch(5);
    });
     $('button#hea-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Health Professions"
        toggle('hea-button');
        fetch(6);
    });
     $('button#soc-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Social and Behavioral Sciences"
        toggle('soc-button');
        fetch(7);
    });
     $('button#edu-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Education"
        toggle('edu-button');
        fetch(8);
    });
     $('button#oth-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Other"
        toggle('oth-button');
        fetch(9);
    });
    

});
	// $('#bus-button').on('click', function(e) {
		// console.log("inside bus button toggle");
            // e.stopImmediatePropagation()
            // console.log("inside bus button toggle");
            // $(this).button('toggle');
// 
            // // do some stuff
            // alert('click after toggle');
            // fetch(1);
        // })
};

// When this file is included at the bottom of the page,
// the js is loaded after the DOM is loaded.  It is a
// good time to initialize the UI elements in the page.
initialize();
}; //end module

// Invoke module. After invocation, the module's code is now added to
// the namespace and is accessible through the librs object.
librs.ui();