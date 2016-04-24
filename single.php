<?php get_header(); ?>
<div class="container">
	<?php
		the_post();
		the_title('<h1>', '</h1>');
		the_content();
	?>
	<ul class="nav nav-pills nav-justified">
		<li id="aboutMenu" class="presentation">
			<a href="#" id="aboutLink" class="menu">About</a>
		</li>
		<li class="presentation">
			<a href="#work" id="workLink" class="menu">Work</a>
		</li>
		<li class="presentation">
			<a href="#contact" id="contactLink" class="menu">Contact</a>
		</li>
		<li class="presentation active">
			<a href="#blog" id="blogLink" class="menu">Blog</a>
		</li>
	</ul>
	<footer>
		&copy 2016 by Moch Deden
	</footer>	
</div>
<script>
	$(document.body).css('background-color', '#fff');
	$('*').css('color', '#000');
</script>
