<?php
/**
 * @package AngularWP
 * @subpackage Templates
 * @since 0.0.1
 */?><!DOCTYPE html>
<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if ( IE 7 )&!( IEMobile )]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if ( IE 8 )&!( IEMobile )]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js" ng-app="angularWP"><!--<![endif]-->

<head>
	<!-- WordPress head -->
	<?php wp_head(); ?>
	<!-- end WordPress head -->
	<?php ngwp_hook_head(); ?>
</head>

<body <?php body_class(); ?>>

	<div id="ngwp-webpage" class="ngwp-webpage">
		
		<header>
			<nav class="navbar navbar-default">
				<div class="container">
					<div class="navbar-header">
						<a href="#/" class="navbar-brand">AngularWP</a>
					</div>
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a href="#/">Home <i class="fa fa-home"></i></a>
						</li>
						<li>
							<a href="#/index">Index</a>
						</li>
						<li>
							<a href="#/page/1/hello-world">Example Page</a>
						</li>
						<li>
							<a href="#/page/2/sample-page">Example Post</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>