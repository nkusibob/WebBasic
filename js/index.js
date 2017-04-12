$(document).ready(function () {
	
	$('.cd-header').hide();
        $('#experienceDiv').hide();
			 $('#summaryDiv').hide();
			$('#generalDiv').show();
        $('span').click(function() {
            $('.overlay').toggleClass('anim');
        });

        $('.animation').click(function() {
           $('.anim').toggleClass('reverse-animation');
        });
		 $('#general').click(function() {
            $('#experienceDiv').hide();
			 $('#summaryDiv').hide();
			$('#generalDiv').show();
        });
	   $('#experience').click(function() {
            $('#generalDiv').hide();
		    $('#summaryDiv').hide();
		   $('#experienceDiv').show();
        });
	  $('#summary').click(function() {
            $('#generalDiv').hide();
		    $('#summaryDiv').show();
		   $('#experienceDiv').hide();
        });
	$('#3dRotating').click(function() {
           
		    $('.cd-header').show();
		  
        });
	$('#overlay').click(function() {
           
		    $('.cd-header').hide();
		  
        });
});