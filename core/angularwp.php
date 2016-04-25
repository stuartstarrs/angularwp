<?php

class angularwp {
  
  function __construct() {
    global $angularwp;

    $angularwp = new stdClass;
    // WP Theme Init
    add_action( 'init', array( &$this, 'angularwp_register_nav_menus' ) );
    add_action( 'init', array( &$this, 'angularwp_register_sidebar' ) );

    // WP After theme loads
    add_action( 'after_setup_theme', array( &$this, 'angularwp_add_theme_support' ) );
    add_action( 'admin_init', array( &$this, 'angularwp_isAPI' ) );
    

    new angularwp_enqueue();


  }
  
  // Check REST API exists
  function angularwp_isAPI(){
    if ( !class_exists( 'WP_REST_Response' ) ) {
      add_action( 'admin_notices', array( $this, 'errorAPI' ) );
    } 
  }

  function angularwp_errorAPI(){
    echo '<div class="alert alert-danger" role="alert"><strong>JSON REST API</strong> must exist</div>';
  }


  // WP - add theme support
  function angularwp_add_theme_support(){
    add_theme_support( 'post-thumbnails' );
    add_theme_support('menus');
    add_post_type_support( 'page', 'excerpt' );
    }

    // WP - register navs
    function angularwp_register_nav_menus() {
    register_nav_menus(
      array(
        'header-menu' => __( 'Header Menu' ),
        'footer-menu' => __( 'Footer Menu' )
      )
    );
  }

  // WP - add sidebar
  function angularwp_register_sidebar() {
  
    register_sidebar(array(
      'name'      => 'Main Sidebar',
      'id'      => 'main-sidebar',
      'before_widget' => '<div>',
      'after_widget'  => '</div>',
      'before_title'  => '<h3>',
      'after_title' => '</h3>'
    ));
  
  }

}

  
  
?>