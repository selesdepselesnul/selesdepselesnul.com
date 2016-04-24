<?php get_header();?>
	<header class="row" id="bigHeader">

		<ul class="nav nav-pills nav-justified">
			<li id="aboutMenu" class="presentation">
				<a href="#bigHeader" id="aboutLink" class="menu">About</a>
			</li>
			<li class="presentation">
				<a href="#work" id="workLink" class="menu">Work</a>
			</li>
			<li class="presentation">
				<a href="#contact" id="contactLink" class="menu">Contact</a>
			</li>

		</ul>

		<div id="aboutContent" class="row">
			Hi. :) <br/>
			I'm Moch Deden <br/>
			a programmer from Bandung, Indonesia <br/>
			do u want to build a web, desktop or mobile app ? <br/>
			just hire me and i'll make it happen for you :)
		</div>

	</header>
	<section class="row" id="content">
		<div class="col-md-2" id="verticalHeaderContainer">
			<ul id="verticalHeader" class="nav nav-pills nav-stacked">
				<li role="presentation"><a href="#bigHeader" id="aboutLink">About</a></li>
				<li role="presentation" id="workMenu">
				<a href="#work" id="workLink">Work</a></li>
				<li role="presentation" id="contactMenu">
				<a href="#contact" id="contactLink">Contact</a></li>
			</ul>
		</div>

		<section class="col-md-10" id="contentContainer">
			<section class="row" id="work">
				<h1>Random selected works of mine</h1>
				<img src="<?php echo get_template_directory_uri() . '/images/projects/e-perizinan/home.png'; ?>" class="img-thumbnail img-reponsive img-preview ">
				<img src="<?php echo get_template_directory_uri() . '/images/projects/libas/main.png'; ?>" class="img-thumbnail img-reponsive img-preview ">
				<img src="<?php echo get_template_directory_uri() . '/images/projects/seeur/main.png'; ?>" class="img-thumbnail img-reponsive img-preview">
				<img src="<?php echo get_template_directory_uri() . '/images/projects/copaspedia/main.png'; ?>"  class="img-thumbnail img-reponsive img-preview ">
				<img src="<?php echo get_template_directory_uri() . '/images/projects/lapgas/main.png'; ?>" class="img-thumbnail img-reponsive img-preview ">
			</section>


			<section class="row content" id="contact" >
				LET'S GET IN TOUCH <br/>
				If you have a project you would like to hire me to work on<br/>
				or if you have something we could collaborate on,<br/>
				please feel free to get in touch.
				<br/>
				<p class="well">
				Send email to me ? <br/>
				<img src="<?php echo get_template_directory_uri().'/images/email.svg'?>" class="contact-image">
				<a href="mailto:selesdepselesnul@gmail.com?Subject=Hello" target="_top">selesdepselesnul@gmail.com</a>
				</p>
				<p class="well">
				Or call me on phone ?<br/>
				<img src="<?php echo get_template_directory_uri().'/images/phone.svg'?>" class="contact-image">
				<a href="tel:6282317287806">+6282317287806</a> <br/>
				</p>
				<p class="well">
				Or chat with me on telegram ? <br/>
				<img src="<?php echo get_template_directory_uri().'/images/telegram.svg'?>" class="contact-image"> @selesdepselesnul
				</p>
				<p class="well">
				Or you are programmer like me ? <br/>
					<img src="<?php echo get_template_directory_uri().'/images/github.svg'?>" class="contact-image">
					<a href="https://github.com/selesdepselesnul">
					https://github.com/selesdepselesnul</a>
				</p>
				<p class="well">
					Or just wanna chill with me ?<br/>
					yeah maybe we have same taste of music ?<br/>
					<img src="<?php echo get_template_directory_uri().'/images/lastfm.svg'?>" class="contact-image">
					<a href="http://last.fm/user/h1t4k3">
					http://last.fm/user/h1t4k3</a>
				</p>
				<footer>
					&copy 2016 by Moch Deden
				</footer>
			</section>
		</section>
	</section>
<?php get_footer(); ?>

