( function( $ ) {
    $('.menu').hover(function(e) {
		$(this).animateCSS('pulse');
	});

	$('#aboutContent').mouseenter(function(e) {
		$(this).animateCSS('fadeIn');
	});

	var animated = {
		about : false,
		work : false,
		blog: false
	};

	function setImageVisibility(visibility) {
		for (var i = 1; i <= 5; i++) {
			$('#img-'+i).css('visibility', visibility);
		}
	}

	$('#aboutContent').animateCSS('fadeIn');
	$(window).scroll(function(e) {
		// work
		if ($(window).scrollTop() >= $('#work').offset().top 
			&& $(window).scrollTop() <= $('#work').outerHeight()) {
			if(!animated.work) {
				$('#blogMenu').removeClass('active');
				$('#workMenu').addClass('active');
				$('#bigHeader').css('visibility', 'hidden');
				$('#blog').css('visibility', 'hidden');

				$('#verticalHeaderContainer').removeClass('col-md-push-10')
				$('#contentContainer').removeClass('col-md-pull-2');

				$('#verticalHeader').css('visibility', '');
				$('#work').css('visibility', '');
				$('#workIntro').css('visibility', '');
				$('#workIntro').animateCSS('flipInY');
				setImageVisibility('');
				
				for (var i = 1; i <= 5; i++) {
					$('#img-'+i).animateCSS('zoomIn');
				}

				$('#verticalHeader').animateCSS('slideInLeft');
				animated.work = true;			
			}
			animated.about = false;
			animated.blog = false;
		} else if($(window).scrollTop() > $('#work').outerHeight()){ // blog
			console.log('not work part');
			if(!animated.blog) {
				$('#workMenu').removeClass('active');
				$('#blogMenu').addClass('active');
				$('#work').css('visibility', 'hidden');
				$('#workIntro').css('visibility', 'hidden');
				setImageVisibility('hidden');
				$('#verticalHeader').css('visibility', '');
				$('#verticalHeader').animateCSS('bounceInRight');
				$('#verticalHeaderContainer').addClass('col-md-push-10');
				$('#contentContainer').addClass('col-md-pull-2');

				$('#blog').css('visibility', '');
				$('#blog').animateCSS('slideInLeft');
		
				animated.blog = true;			
			}
			animated.work = false;
			animated.about = false
		} else { // about

			if(!animated.about) {
				$('#aboutMenu').css({
					'background-color': '#337ab7',
					'border-radius' : '4px'
				});
				$('#aboutContent').animateCSS('fadeIn');
				$('#verticalHeader').css('visibility', 'hidden');
				$('#bigHeader').css('visibility', '');
				$('#work').css('visibility', 'hidden');
				$('#workIntro').css('visibility', 'hidden');
				setImageVisibility('hidden');
	
				animated.about = true;	
			}
			animated.work = false;
			animated.blog = false;
		}
	});
} )( jQuery );

