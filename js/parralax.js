window.onload = function () {
	
 
var initialMenuPosition = $('#menu').offset().top;
$('.mybutton').click(function(){
    $("body , html").animate({ scrollTop: 0 }, 10);
    return false;
})
$(window).scroll(function () {
  var height = $(window).scrollTop();
  console.log(height);
  if(height>150){
   $( ".mybutton" ).show( "slow", function() {
    // Animation complete.
  });
  }else{
    $( ".mybutton" ).hide();
  }
    
  if ($(window).scrollTop() > initialMenuPosition) {
    $('#menu').addClass('menu-fixed');
	
  }else
  {
	$('div').addClass('opacity');
    $('#menu').removeClass('menu-fixed');
  }
});
 var scroll = $(window).scrollTop();
  console.log(scroll)
$('#menu li').click(function(){
  
  // POSITIONNER LA BARRE BLEUE
  $('#highlighter').animate({"left": $(this).offset().left},100);
  
  
  // POSITIONNER L'ECRAN
  
  // Retirer la hauteur du menu pour ne pas descendre trop bas (le menu cachant le dessus)
  // de la partie
  var deltaDist = $('#menu').height();
  
  if(!$('#menu').hasClass('menu-fixed')){ // Si le menu n'était pas déja en fixed
     // Le retirer à nouveau car il ne sera plus dans le flux après avoir scrollé
     deltaDist += $('#menu').height();
  }
  
  // Récupérer la distance entre le haut du document et la part cible (on retire la hauteur du menu)
  var regex = /part[0-9]+/;

  var id = regex.exec($(this).attr('id'))[0];
  
  // Obtenir la distance entre le dessus du document et le début de la DIV ciblée (soustraite de la hauteur du menu)
  var dist = $('#' + id).offset().top - deltaDist;
  
  // Positionner la barre de scroll de la page à la dist calculée
  $('body, html').animate({scrollTop : dist}, 500, "easeOutQuint");
});




}
