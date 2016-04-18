$(document).ready(function() {
	$('#work').css('visibility', 'hidden');
	$('#contact').css('visibility', 'hidden');
	$('#horizontalHeader').css('visibility', 'hidden');
	$(window).scroll(function(e) {
		if ($(window).scrollTop() >= $('#work').offset().top 
			&& $(window).scrollTop() <= $('#contact').offset().top) {
			$('#work').css('visibility', '');
			$(document.body).css('background-color', 'grey');
			$('#bigHeader').css('visibility', 'hidden');
			$('#horizontalHeader').css('visibility', '');
			console.log('work');
		} else {
			console.log('not work part');
			$('#horizontalHeader').css('visibility', 'hidden');
			$('#bigHeader').css('visibility', '');
			$('#work').css('visibility', 'hidden');
			$(document.body).css('background-color', 'black');
		}
	});
});