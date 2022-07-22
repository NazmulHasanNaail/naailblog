<?php

/**
 * Enqueues the required scripts for the theme.
 */
function naailblog_enqueue_scripts() {
    wp_register_script( 'naail-blog', trailingslashit( get_template_directory_uri() ) . 'build/index.js', ['wp-element'], '1.0', true );

    $translation_array = array(
        'constants' => array(
            'SITE_TITLE'		 => get_bloginfo( 'name' ),
            'SITE_DESCRIPTION'	 => get_bloginfo( 'description' ),
            'SITE_URL'			 => get_bloginfo( 'url' ),
            'WP_VERSION'		 => get_bloginfo( 'version' ),
            'API'				 => '/wp-json/wp/v2/',
            'MENU_API'			 => '/wp-json/wp-api-menus/v2/',
            'Sidebar_API'			 => '/wp-json/wp-rest-api-sidebars/v1/',
            'POSTS_PER_PAGE'	 => get_option( 'posts_per_page' ),
            'FRONT_PAGE'		 => get_option( 'page_on_front' )
        )
    );
    wp_localize_script( 'naail-blog', 'phpData', $translation_array );
    wp_enqueue_script( 'naail-blog' );
    wp_enqueue_style( 'bootstrap', trailingslashit( get_template_directory_uri() ) . 'build/bootstrap.min.css' );
    wp_enqueue_style( 'naail-blog', trailingslashit( get_template_directory_uri() ) . 'build/index.css' );
}

add_action( 'wp_enqueue_scripts', 'naailblog_enqueue_scripts' );

/**
 * Sets the permalink structure required by the theme. This can not be changed by the user otherwise the theme might break.
 */
function set_naailblog_permalink(){
    global $wp_rewrite;
    $wp_rewrite->set_permalink_structure('/%year%/%monthnum%/%day%/%postname%/');
}
add_action('init', 'set_naailblog_permalink');

/**
 * Registering Navigation Menu and Sidebar for the theme.
 */
function naailblog_setup() {
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'naailblog' ),
    ) );

    register_sidebar( array(
        'name'			 => __( 'Sidebar', 'naailblog' ),
        'id'			 => 'sidebar-1',
        'description'	 => __( 'Sidebar to Display all the Widgets', 'naailblog' ),
        'before_widget'	 => '<section id="%1$s" class="widget %2$s clearfix">',
        'after_widget'	 => '</section>'
    ) );
}

add_action( 'after_setup_theme', 'naailblog_setup' );
