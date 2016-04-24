<?php

function add_theme_scripts() {
  
  
  wp_enqueue_style( 'bootstrap.min', 
  	get_template_directory_uri().'/css/bootstrap.min.css' );
  
  wp_enqueue_style( 'animate.min', 
  	get_template_directory_uri().'/css/animate.min.css' );
 
  wp_enqueue_style( 'style', get_stylesheet_uri(), 
    array('bootstrap.min', 'animate.min') );

  wp_enqueue_script('jquery.min', 
    get_template_directory_uri() .'/js/jquery.min.js');  
  
  wp_enqueue_script('bootstrap.min', 
  	get_template_directory_uri() .'/js/bootstrap.min.js',
  	array('jquery.min'));

  wp_enqueue_script('jquery.animatecss', 
  	get_template_directory_uri() .'/js/jquery.animatecss.js',
  	array('jquery.min'));

  wp_enqueue_script('index', 
  	get_template_directory_uri() .'/js/index.js',
  	array('jquery.min', 'bootstrap.min', 'jquery.animatecss'));
}

add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );