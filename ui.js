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


//var myValue = 5;
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

var fetch2 = function(val) {
	var val = 2;
	console.log("Inside fetch2(). val is: ");
	console.log(val);
	vizController(val);
};

var fetch3 = function(val) {
	var val = 3;
	console.log("Inside fetch3(). val is: ");
	console.log(val);
	vizController(val);
};

var count = 0;
var toggle = function() {

};

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


/*var initialize = function() {
		var button1 = document.getElementById('bus-button');
		console.log("Inside Initialize!");
		myValue = 1;
		//button1.onclick = fetch(1);
		 button1.onclick = function(){
   			// fetch(1);
		 };
		// button2.onclick = function(){
   			// fetch(2);
		// }
		myValue2 = 2;
		//console.log("myValue2: "+myValue2);
		var button2 = document.getElementById('hum-button');
		 button2.onclick = function(){
   			 fetch2(2);
		 }//
		//button2.onclick = fetch2(2);
		
		
		var button3 = document.getElementById('art-btn');
		//button3.onclick = fetch3(3);
		
		var button4 = document.getElementById('har-btn');
		//button4.onclick = fetch(4);
		
		var button5 = document.getElementById('com-btn');
		//button5.onclick = fetch(5);
		
		var button6 = document.getElementById('hea-btn');
		//button6.onclick = fetch(6);
		
		var button7 = document.getElementById('soc-btn');
		//button7.onclick = fetch(7);
		
		var button8 = document.getElementById('edu-btn');
		//button8.onclick = fetch(8);
		
		var button9 = document.getElementById('oth-btn');
		//button9.onclick = fetch(9);
};
*/
// When this file is included at the bottom of the page,
// the js is loaded after the DOM is loaded.  It is a
// good time to initialize the UI elements in the page.
initialize();
}; //end module

// Invoke module. After invocation, the module's code is now added to
// the namespace and is accessible through the librs object.
librs.ui();