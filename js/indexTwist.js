// elements
var $page = $('.page');
$('#twistSpanClose').show();
	$('#twistSpanOpen').show();
$('.cd-header').show();
$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
});
$('.content').on('click', function(){
  $page.removeClass('shazam');
$('#paralaxScript').remove();	
});