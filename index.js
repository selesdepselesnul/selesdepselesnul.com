$(document).ready(function() {

	$('.menu').hover(function(e) {
		console.log('hover!');
		$(this).animateCSS('pulse');
	})
	$('#aboutContent').mouseenter(function(e) {
		$(this).animateCSS('tada');
	})
	$('#work').css('visibility', 'hidden');
	$('#contact').css('visibility', 'hidden');
	$('#verticalHeader').css('visibility', 'hidden');
	var animated = {
		about : false,
		work : false,
		contact: false
	};
	$('#aboutContent').animateCSS('tada');
	$(window).scroll(function(e) {
		// work
		if ($(window).scrollTop() >= $('#work').offset().top 
			&& $(window).scrollTop() <= $('#work').outerHeight()) {
			if(!animated.work) {
				$('*').css('color', 'white');
				$(document.body).css('background-color', 'grey');
				$('#bigHeader').css('visibility', 'hidden');
				$('#contact').css('visibility', 'hidden');

				$('#verticalHeaderContainer').removeClass('col-md-push-10')
				$('#contentContainer').removeClass('col-md-pull-2');

				$('#verticalHeader').css('visibility', '');
				$('#work').css('visibility', '');
				

				
				$('#work').animateCSS('zoomIn');
				$('#verticalHeader').animateCSS('slideInLeft');
				animated.work = true;			
			}
			animated.about = false;
			animated.contact = false;
		} else if($(window).scrollTop() > $('#work').outerHeight()){ // contact
			console.log('not work part');
			if(!animated.contact) {
				$(document.body).css('background-color', 'white');
				$('*').css('color', 'black');
				$('#work').css('visibility', 'hidden');
				$('#verticalHeaderContainer').addClass('col-md-push-10');
				$('#contentContainer').addClass('col-md-pull-2');

				$('#contact').css('visibility', '');
				$('#contact').animateCSS('shake');
		
				animated.contact = true;			
			}
			animated.work = false;
			animated.about = false
		} else { // about
			if(!animated.about) {
				$('*').css('color', 'white');

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