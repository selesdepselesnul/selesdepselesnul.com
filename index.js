$(document).ready(function() {
	$('#work').css('visibility', 'hidden');
	// $('#contact').css('visibility', 'hidden');
	$('#verticalHeader').css('visibility', 'hidden');
	var animated = false;

	$(window).scroll(function(e) {


		if ($(window).scrollTop() >= $('#work').offset().top 
			&& $(window).scrollTop() <= $('#work').outerHeight()) {
			if(!animated) {
				$('#verticalHeader').css('visibility', '');
				$('#work').css('visibility', '');
				$(document.body).css('background-color', 'grey');
				$('#bigHeader').css('visibility', 'hidden');
				$('#work').animateCSS('zoomIn');
				$('#verticalHeader').animateCSS('slideInLeft');
				animated = true;			
			}
		} else if($(window).scrollTop() > $('#work').outerHeight()){
			console.log('not work part');
			animated = false;
		} else {
			$('#verticalHeader').css('visibility', 'hidden');
			$('#bigHeader').css('visibility', '');
			$('#work').css('visibility', 'hidden');
			$(document.body).css('background-color', 'black');
			animated = false;
		}
	});
});