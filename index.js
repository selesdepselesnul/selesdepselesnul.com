$(document).ready(function() {
	$('#work').css('visibility', 'hidden');
	$('#contact').css('visibility', 'hidden');
	$('#horizontalHeader').css('display', 'none');
	$(window).scroll(function(e) {
		if ($(window).scrollTop() >= $('#work').offset().top) {
			$('#work').css('visibility', '');
			$(document.body).css('background-color', 'white');
		} else {
			$('#work').css('visibility', 'hidden');
			$(document.body).css('background-color', 'black');
		}
	});
});