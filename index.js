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
				$('#contactMenu').removeClass('active');
				$('#workMenu').addClass('active');
				$('*').css('color', 'white');
				$(document.body).css({
						'background': '#1e1e1e', 
					    'background': '-webkit-linear-gradient(#1e1e1e, #534f4f)', 
					    'background': '-o-linear-gradient(#1e1e1e, #534f4f)', 
					    'background': '-moz-linear-gradient(#1e1e1e, #534f4f)', 
					    'background': 'linear-gradient(#1e1e1e, #534f4f)', 
						'overflow-y' : 'scroll'
				});
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
				$(document.body).css({
					'background' : '#534f4f', 
					'background' : '-webkit-linear-gradient(#534f4f, #fff5f5)', 
					'background' : '-o-linear-gradient(#534f4f, #fff5f5)',
					'background' : '-moz-linear-gradient(#534f4f, #fff5f5)', 
					'background' : 'linear-gradient(#534f4f, #fff5f5)',
					'overflow-y' : 'scroll'
				});
				$('#workMenu').removeClass('active');
				$('#contactMenu').addClass('active');
				$('*').css('color', 'black');
				$('#work').css('visibility', 'hidden');
				$('#verticalHeader').css('visibility', '');
				$('#verticalHeader').animateCSS('bounceInRight');
				$('#verticalHeaderContainer').addClass('col-md-push-10');
				$('#contentContainer').addClass('col-md-pull-2');

				$('#contact').css('visibility', '');
				$('#contact').animateCSS('slideInLeft');
		
				animated.contact = true;			
			}
			animated.work = false;
			animated.about = false
		} else { // about
			if(!animated.about) {
				$(document.body).css({
					'background' : '#000', 
					'background' : '-webkit-linear-gradient(#000, #1e1e1e)', 
					'background' : '-o-linear-gradient(#000, #1e1e1e)',
					'background' : '-moz-linear-gradient(#000, #1e1e1e)', 
					'background' : 'linear-gradient(#000, #1e1e1e)',
					'overflow-y' : 'scroll'
				});
				$('#aboutMenu').css({
					'background-color': '#337ab7',
					'border-radius' : '4px'
				});
				$('*').css('color', 'white');
				$('#aboutContent').animateCSS('tada');
				$('#verticalHeader').css('visibility', 'hidden');
				$('#bigHeader').css('visibility', '');
				$('#work').css('visibility', 'hidden');
	
				animated.about = true;	
			}
			animated.work = false;
			animated.contact = false;
		}
	});
});