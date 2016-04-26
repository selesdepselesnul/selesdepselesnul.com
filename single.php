<?php get_header(); ?>
	<div class="row">
		<div id="blogContent" class="col-md-10">
			<?php
				the_post();
				the_title('<h1>', '</h1><br />');
				the_content();
			?>
			<div class="text-left">
				<?php previous_post_link();?>
			</div>
			<div class="text-right">
				<?php next_post_link();?>
			</div>
			<div id="disqus_thread"></div>		
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
						<a href="<?php echo get_site_url().'#blog'?>" id="contactLink" class="menu">Blog</a>
					</li>
				</ul>
				<footer id="singlePostFooter">
					&copy 2016 by Moch Deden
				</footer>						
			</div>
		</div>
	</div>
<script>
	$(document.body).css('background-color', '#fff');
	$('*').css('color', '#000');
	 /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
    /*
    var disqus_config = function () {
        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
        var d = document, s = d.createElement('script');
        
        s.src = '//selesdepselesnul.disqus.com/embed.js';  // IMPORTANT: Replace EXAMPLE with your forum shortname!
        
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>

<?php get_footer(); ?>
