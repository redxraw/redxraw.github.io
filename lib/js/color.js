let bgColor = "#000";
let flag = 1;
var textColor = flag == 0 ? '#000' : '#00ff00' ;
// let textColor = "#00ff00";

$( document ).ready(function() {
    $("html").css("background-color",bgColor);
	$("body").css("background-color",bgColor);
	$("body").css("color",textColor);

	$(".newsticker").css("background-color",bgColor);
	$(".newsticker").css("color",textColor);

	$(".marquee").css("background-color",bgColor);
	$(".marquee").css("color",textColor);
	$("a").css("color",textColor);
});