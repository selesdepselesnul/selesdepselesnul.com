<?php get_header();?>
	<header class="row" id="bigHeader">

		<ul class="nav nav-pills index-nav-menu">
			<li id="aboutMenu" class="presentation active">
				<a href="#" id="aboutLink">About</a>
			</li>
			<li class="presentation">
				<a href="#work" id="workLink">Work</a>
			</li>
			<li class="presentation">
				<a href="#blog" id="blogLink">Blog</a>
			</li>

		</ul>

		<div id="aboutContent" class="row">
			<br />
			Hi :)<br/>
			my name is Moch Deden <br/>
			i'm a web, desktop and mobile programmer from Bandung, Indonesia <br/>
			If you have a project you would like to hire me to work on<br/>
			or if you have something we could collaborate on,<br/>
			please feel free to get in touch.
			<br/>
				<p class="well">
					<img title="telegram" src="<?php echo get_template_directory_uri().'/images/telegram.svg'?>" class="contact-image"> @selesdepselesnul
				</p>
				<p class="well">
					<img title="email" src="<?php echo get_template_directory_uri().'/images/email.svg'?>" class="contact-image">
					<a href="mailto:selesdepselesnul@gmail.com?Subject=Hello" target="_top">selesdepselesnul@gmail.com</a>
				</p>
				<p class="well">
					<img title="github" src="<?php echo get_template_directory_uri().'/images/github.svg'?>" class="contact-image">
					<a href="https://github.com/selesdepselesnul">
					https://github.com/selesdepselesnul</a>
				</p>
				<p class="well">
					<img title="last.fm" src="<?php echo get_template_directory_uri().'/images/lastfm.svg'?>" class="contact-image">
					<a href="http://last.fm/user/h1t4k3">
					http://last.fm/user/h1t4k3</a>
				</p>	
		</div>
	</header>
	<section class="row" id="content">
		<div class="col-md-2" id="verticalHeaderContainer">
			<ul id="verticalHeader" class="nav nav-pills nav-stacked">
				<li role="presentation"><a href="#" id="aboutLink">About</a></li>
				<li role="presentation" id="workMenu">
					<a href="#work" id="workLink">Work</a>
				</li>
				<li role="presentation" id="blogMenu">
					<a href="#blog" id="blogLink">Blog</a>
				</li>
			</ul>
		</div>

		<section class="col-md-10" id="contentContainer">
		
			<section class="row" id="work">
				<h1 id="workIntro">Random selected works of mine</h1>
				<img id="img-1" src="<?php echo get_template_directory_uri() . '/images/projects/e-perizinan/home.png'; ?>" class="img-thumbnail img-reponsive img-preview ">
				<img id="img-2" src="<?php echo get_template_directory_uri() . '/images/projects/libas/main.png'; ?>" class="img-thumbnail img-reponsive img-preview ">
				<img id="img-3" src="<?php echo get_template_directory_uri() . '/images/projects/seeur/main.png'; ?>" class="img-thumbnail img-reponsive img-preview">
				<img id="img-4" src="<?php echo get_template_directory_uri() . '/images/projects/copaspedia/main.png'; ?>"  class="img-thumbnail img-reponsive img-preview ">
				<img id="img-5" src="<?php echo get_template_directory_uri() . '/images/projects/lapgas/main.png'; ?>" class="img-thumbnail img-reponsive img-preview ">
			</section>

			<section class="row" id="blog" >
				Read my blog ? here are some newest posts<br />
				<?php 
					if(have_posts())
						while (have_posts()) {
							the_post();
							echo '<div class="individual-note">';
							the_title_attribute();
							echo '<br /><a class="btn btn-default" target="_blank" href="';
							the_permalink();
							echo '">';
							echo "read it";
							echo '</a>';
							echo '</div>';
						}
					else
							echo "<h2>Currently I have none</h2>";
				?>						
				
				<div class="text-left nav-post">
					<?php echo next_posts_link('<< Older'); ?>	
				</div>
				<div class="text-right nav-post">
						<?php echo previous_posts_link('Newer >>'); ?>	
				</div>
				<br />
				<footer>
					selesdepselesnul.com &copy 2016 by Moch Deden
				</footer>
			</section>
		</section>
	</section>
<script>
	$('.nav-post > a').attr('href', $('.nav-post > a').attr('href')+'#blog');
</script>
<?php get_footer(); ?>

