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

/**
 * function: toggle
 * 
 * purpose: change color of buttons to indicate status.
 * 			white button is not pressed, yellow indicates pressed button.
 * 
 * Date/author: Team Yoyodyne/10_1/15
 */
var toggle = function(button) {
 //Set all buttons to white.
 document.getElementById('bus-button').style.color = "white"
 document.getElementById('hum-button').style.color = "white"
 document.getElementById('art-button').style.color = "white"
 document.getElementById('har-button').style.color = "white"
 document.getElementById('com-button').style.color = "white"
 document.getElementById('hea-button').style.color = "white"
 document.getElementById('soc-button').style.color = "white"
 document.getElementById('edu-button').style.color = "white"
 document.getElementById('oth-button').style.color = "white"
 //Change button that was clicked on to yellow text
 document.getElementById(button).style.color = "yellow" 
};

/**
 * function: initialize
 * 
 * purpose: update graph title and toggle graph data.
 * 			will call helper function toggle.
 * 
 * Date/author: Team Yoyodyne/10_1_15
 */
var initialize = function() {
	$(document).ready( function () {
    $('button#bus-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Business"
        fetch(1);
		toggle('bus-button');
    });
     $('button#hum-button').on('click', function () {
        document.getElementById('currentmajor').innerHTML = "Humanities or History"
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
};

// When this file is included at the bottom of the page,
// the js is loaded after the DOM is loaded.  It is a
// good time to initialize the UI elements in the page.
initialize();
}; //end module

// Invoke module. After invocation, the module's code is now added to
// the namespace and is accessible through the librs object.
librs.ui();