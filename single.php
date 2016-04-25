<?php get_header(); ?>
<div class="container">
	<div class="row">
		<div id="blogContent" class="col-md-10">
			<?php
				the_post();
				the_title('<h1>', '</h1><br />');
				the_content();
				echo "<br /><br />";
			?>
			<div class="text-left">
				<?php previous_post_link();?>
			</div>
			<div class="text-right">
				<?php next_post_link();?>
			</div>		
		</div>
		<div class="col-md-2">
			<div class="single-nav-menu">
				<ul class="nav nav-pills nav-stacked">
					<li id="aboutMenu" class="presentation">
						<a href="<?php echo get_site_url().'#'?>" id="aboutLink" class="menu">About</a>
					</li>
					<li class="presentation">
						<a href="<?php echo get_site_url().'#work'?>" id="workLink" class="menu">Work</a>
					</li>
					<li class="presentation">
						<a href="<?php echo get_site_url().'#contact'?>" id="contactLink" class="menu">Contact</a>
					</li>
					<li class="presentation active">
						<a href="#" id="blogLink" class="menu">Blog</a>
					</li>
				</ul>
				<footer id="singlePostFooter">
					&copy 2016 by Moch Deden
				</footer>						
			</div>
		</div>
	</div>
</div>
<script>
	$(document.body).css('background-color', '#fff');
	$('*').css('color', '#000');
</script>
