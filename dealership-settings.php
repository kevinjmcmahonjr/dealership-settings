add_filter( 'mb_settings_pages', 'prefix_options_page' );
function prefix_options_page( $settings_pages ) {
    $settings_pages[] = array(
        'id'          => 'dealership-settings',
        'option_name' => 'dealership-settings',
        'menu_title'  => 'Dealership Details',
    );
    return $settings_pages;
}
