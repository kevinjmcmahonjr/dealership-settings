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

?>
