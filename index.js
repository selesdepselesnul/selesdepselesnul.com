$(document).ready(function() {
	$('#work').css('visibility', 'hidden');
	$('#contact').css('visibility', 'hidden');
	$('#verticalHeader').css('visibility', 'hidden');
	var animated = {
		about : false,
		work : false,
		contact: false
	};

	$(window).scroll(function(e) {
		// work
		if ($(window).scrollTop() >= $('#work').offset().top 
			&& $(window).scrollTop() <= $('#work').outerHeight()) {
			if(!animated.work) {
				$('#verticalHeaderContainer').removeClass('col-md-push-10')
				$('#contentContainer').removeClass('col-md-pull-2');
				
				$('#verticalHeader').css('visibility', '');
				$('#work').css('visibility', '');
				$(document.body).css('background-color', 'grey');
				$('#bigHeader').css('visibility', 'hidden');
				
				$('#work').animateCSS('zoomIn');
				$('#verticalHeader').animateCSS('slideInLeft');
				animated.work = true;			
			}
			animated.about = false;
			animated.contact = false;
		} else if($(window).scrollTop() > $('#work').outerHeight()){ // contact
			console.log('not work part');
			if(!animated.contact) {
				$('#verticalHeaderContainer').addClass('col-md-push-10');
				$('#contentContainer').addClass('col-md-pull-2');

				animated.contact = true;			
			}
			animated.work = false;
			animated.contact = false
		} else { // about
			if(!animated.about) {
				$('#verticalHeader').css('visibility', 'hidden');
				$('#bigHeader').css('visibility', '');
				$('#work').css('visibility', 'hidden');
				$(document.body).css('background-color', 'black');
				animated.about = true;	
			}
			animated.work = false;
			animated.contact = false;
		}
	});
});