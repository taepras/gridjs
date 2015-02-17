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
	setGrid();
	$('body').click(function(){
		setGrid();
	});
	
	// $(window).resize(function(){
	// 	setGrid();
	// });

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
	var col = 3;
	var gutter = 30;
	var maxwidth = '1000px';

	$('[class^=col-]').each(function(){
		var width = $(this).parent().width();
		// console.log(width + ", " +  parseInt($(this).attr('class').substring($(this).attr('class').indexOf('-') + 1)) + "," + width / parseInt($(this).attr('class').substring($(this).attr('class').indexOf('-') + 1)));
		$(this).css('width',
			Math.floor((width + gutter) / parseInt($(this).attr('class').substring($(this).attr('class').indexOf('-') + 1))) + 
			- gutter
			// +'px'
		);
		// $(this).css('background-color','red');
		// console.log('calc(100%/' + $(this).attr('class').substring($(this).attr('class').indexOf('-') + 1) +
		// 	'+' + gutter + '/' + $(this).attr('class').substring($(this).attr('class').indexOf('-') + 1) + 
		// 	'-' + gutter + ')');
	});

	// console.log(columns);
	// for (i = 0; i < columns.length; i++) {
	// 	var parentWidth = columns[i].parentNode.clientWidth;
	// 	// columns[i].style.width = 
	// 	// 	'calc(100%/' + columns[i].className.substring(columns[i].className.indexOf('-') + 1) +
	// 		// '+' + gutter + '/' + columns[i].className.substring(columns[i].className.indexOf('-') + 1) + 
	// 		// '-' + gutter + ')';
	// 	var frac = parseInt(columns[i].className.substring(columns[i].className.indexOf('-') + 1));
	// 	var width = parentWidth / frac + gutter / frac - gutter;
	// 	columns[i].style.width = width + 'px';
	// 	// console.log(columns[i].className + ', ' + width + 'px');
	// 	// columns[i].style.backgroundColor = 'red';
	// 	// console.log(width + 'px');
	// 		// 'calc(100%/' + columns[i].className.substring(columns[i].className.indexOf('-') + 1) +
	// 		// '+' + gutter + '/' + columns[i].className.substring(columns[i].className.indexOf('-') + 1) + 
	// 		// '-' + gutter + ')'
	// 	// );
	// }

	// var maincolumns = $('.page>.row>[class^=col-]');

	// for (i = 0; i < maincolumns.length; i++) {
	// 	var parentWidth = maincolumns[i].parentNode.clientWidth;
	// 	var frac = parseInt(maincolumns[i].className.substring(maincolumns[i].className.indexOf('-') + 1));
	// 	var width = parentWidth / frac - gutter;
	// 	maincolumns[i].style.width = width + 'px';
	// 	maincolumns[i].style.backgroundColor = 'red';
	// 	// console.log(columns[i].className + ', ' + width + 'px');
	// }
}