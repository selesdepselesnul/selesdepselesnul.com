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
		if ($(window).scrollTop() >= $('#work').offset().top 
			&& $(window).scrollTop() <= $('#work').outerHeight()) {
			if(!animated.work) {
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
		} else if($(window).scrollTop() > $('#work').outerHeight()){
			console.log('not work part');
			if(!animated.contact) {
				$('#verticalHeader').css('visibility', '');
				$('#work').css('visibility', '');
				$(document.body).css('background-color', 'grey');
				$('#bigHeader').css('visibility', 'hidden');
				$('#work').animateCSS('zoomIn');
				$('#verticalHeader').animateCSS('slideInLeft');
				animated.contact = true;			
			}
			animated.work = false;
			animated.contact = false
		} else {
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