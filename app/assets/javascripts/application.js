// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
console.log("test")

$( document ).ready(function() {
    $( "#click" ).click(function() {
    	$.ajax({
    		type: "get",
    		dataType: "json",
    		url: '/colors/index'

    	}).done(function(response) {
 	     var color  = String(response.color);
 	     console.log(color);
 	     var rand = String(Math.floor(Math.random() * 9) + 1);
 	     console.log(rand)
 	     console.log($("#"+rand))
 	     console.log(("background-color", "#" + color))
 	     $("#"+rand).css("background-color", "#" + color);
		})

	});
});




