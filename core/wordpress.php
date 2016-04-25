<?php

class angularwp_enqueue {
  
  function __construct() {
    global $angularwp_enqueue;

    $angularwp_enqueue = new stdClass;
    
    add_action( 'wp_enqueue_scripts', array( &$this, 'angularwp_scripts' ) );
    add_action( 'wp_enqueue_scripts', array( &$this, 'angularwp_styles' ) );
    
  }
  
  function angularwp_scripts() {
    wp_enqueue_script( 'angularjs', get_template_directory_uri().'/library/js/angular.js', '', null, false );
    wp_enqueue_script( 'angularjs-route', get_template_directory_uri().'/library/js/angular-route.js', array( 'angularjs' ), null, false );
    wp_enqueue_script( 'angularjs-resource', get_template_directory_uri().'/library/js/angular-resource.js', array( 'angularjs' ), null, false );
    wp_enqueue_script( 'angularjs-animate', get_template_directory_uri().'/library/js/angular-animate.js', array( 'angularjs' ), null, false );
    wp_enqueue_script( 'angularjs-cookies', get_template_directory_uri().'/library/js/angular-cookies.js', array( 'angularjs' ), null, false );
    wp_enqueue_script( 'bootstrap-js', get_template_directory_uri().'/library/js/bootstrap-min.js', array( 'jquery' ), null, false );
    wp_enqueue_script( 'angularwp-app', get_template_directory_uri().'/library/js/app.js', array( 'angularjs' ), null, false );

    wp_localize_script( 'angularwp-app', 'ajaxInfo',
      array(
        
        'api_url'      => rest_get_url_prefix() . '/wp/v2/',
        'template_directory' => get_template_directory_uri() . '/',
        'nonce'        => wp_create_nonce( 'wp_rest' ),
        'is_admin'       => current_user_can('administrator')
        
      )
    );
    
  }
  
  function angularwp_styles() {
    
    wp_enqueue_style( 'appcss', get_template_directory_uri().'/library/css/app.css', array(), null, 'all' );
    
  }
  
} 


function ngwp_hook_head() { 
  do_action('ngwp_hook_head');
}
function ngwp_hook_footer() { 
  do_action('ngwp_hook_footer');
}

?>