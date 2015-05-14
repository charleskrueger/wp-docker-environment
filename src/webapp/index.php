
<h1>HEllo WorLD</h1>

<?php echo '<p>DB_NAME: ' . getenv('MYSQL_DATABASE') . '</p>'; ?>
<?php echo '<p>DB_USER: ' . getenv('MYSQL_USER') . '</p>'; ?>
<?php echo '<p>DB_PASSWORD: ' . getenv('MYSQL_PASSWORD') . '</p>'; ?>
<?php echo '<p>DB_HOST: ' . 'db' . '</p>'; ?>
<?php echo '<p>DB_PORT: ' . getenv('DB_PORT') . '</p>'; ?>


<?php
/**
 * Front to the WordPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells WordPress to load the theme.
 *
 * @package WordPress
 */

/**
 * Tells WordPress to load the WordPress theme and output it.
 *
 * @var bool
 */
define('WP_USE_THEMES', true);


/** Loads the WordPress Environment and Template */
require('./wordpress/wp-blog-header.php');

