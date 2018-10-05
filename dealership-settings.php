<?php
/*
Plugin Name: Dealership Settings Page
Plugin URI:
Description:
Version: 1.0
Author: Kevin J. McMahon Jr.
Author URI:
License:GPLv2
*/
?>
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

add_filter( 'mb_settings_pages', 'motent_dealership_options_page' );
function motent_dealership_options_page( $settings_pages ) {
    $settings_pages[] = array(
        'id'          => 'dealership-settings',
        'option_name' => 'dealership_settings',
        'menu_title'  => 'Dealership Details',
	'columns' => '1',
	'style' => 'no-boxes',
	'position'    => '22'
    );
    return $settings_pages;
}

function motent_load_dealership_admin_style($hook) {
        // Load only on admin.php?page=dealership-settings
        if($hook != 'toplevel_page_dealership-settings') {
                return;
        }
        wp_enqueue_style( 'custom_wp_admin_css', plugins_url('/css/dealership-admin-style.css', __FILE__) );
}
add_action( 'admin_enqueue_scripts', 'motent_load_dealership_admin_style' );

function motent_change_title_text( $title ){
     $screen = get_current_screen();
     if  ( 'vehicle' == $screen->post_type ) {
          $title = 'Enter Vehicle Name | Leave Empty To Automatically Generate Title From Information Entered Below';
     }
     return $title;
}
  
add_filter( 'enter_title_here', 'motent_change_title_text' );
?>
