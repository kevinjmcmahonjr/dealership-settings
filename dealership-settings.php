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

add_filter( 'mb_settings_pages', 'prefix_options_page' );
function prefix_options_page( $settings_pages ) {
    $settings_pages[] = array(
        'id'          => 'dealership-settings',
        'option_name' => 'dealership-settings',
        'menu_title'  => 'Dealership Details',
    );
    return $settings_pages;
}
?>
