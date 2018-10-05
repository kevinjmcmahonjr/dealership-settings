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
    );
    return $settings_pages;
}

add_action( 'admin_enqueue_scripts', 'motent_load_dealership_admin_style' );
function motent_load_dealership_admin_style(){
	wp_register_style ('dealership_admin_css', get_template_directory_uri() . '/css/dealership-admin-style.css' );
	wp_enqueue_style ('dealership_admin_css', get_template_directory_uri() . '/css/dealershipt-admin-style.css' );
}
?>
