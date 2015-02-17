$(document).ready(function(){

	//initial settings
	// $('.row').css({
	// 	'display'	:'block',
	// 	'width'		:'auto',
	// 	'margin'	:'0 -15px',
	// 	'padding'	:'15px'
	// });
	
	// var xmlhttp = new XMLHttpRequest();
	// var url = "js/config.json";

	// xmlhttp.onreadystatechange = function() {
	//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	//         configObj = JSON.parse(xmlhttp.responseText);
	//         setGrid(configObj);
	//     }
	// }
	// xmlhttp.open("GET", url, true);
	// xmlhttp.send();
	
	for(var i = 1; i < 40; i++){
		$('.page').append('<div class="row"></div>');
		for(var j = 0; j < i; j++){
			$('.row:last-of-type').append('<div class="col-'+i+'"></div>');
			var c = Math.floor(255*j/(i-1));
			console.log(c);
			var color = 'rgb('+c+","+c+","+c+')'
			$('[class^=col-]:last-of-type').css('background-color', color);
		}
	}

	setGrid();
	
	$(window).resize(function(){
		setGrid();
	});
});

var configObj;

// function setGrid(config){
function setGrid(){
	// var col = config.columns;
	// var gutter = config.gutter;
	// var maxwidth = config.maxwidth;
	// var smin = config.smin;
	// var mmin = config.mmin;
	// var lmin = config.lmin;
	var col = 12;
	var gutter = 30;
	var maxwidth = '1000px';

	$('[class^=col-]').each(function(){
		$(this).css('width',
			(($(this).parent().width() + gutter) / parseInt($(this).attr('class').substring($(this).attr('class').indexOf('-') + 1))) - gutter
		);
		var hue = 'rgb(' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ')';
         // $(this).css("background-color", hue);
	});
}