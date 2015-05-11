<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
 
// Include local configuration
if (file_exists(dirname(__FILE__) . '/local-config.php')) {
	include(dirname(__FILE__) . '/local-config.php');
}

// Global DB config
if (!defined('DB_NAME')) {
	define('DB_NAME', 'ds_wordpress');
}
if (!defined('DB_USER')) {
	define('DB_USER', 'ds_wordpress');
}
if (!defined('DB_PASSWORD')) {
	define('DB_PASSWORD', 'ds1234');
}
if (!defined('DB_HOST')) {
	define('DB_HOST', 'localhost');
}

/** Database Charset to use in creating database tables. */
if (!defined('DB_CHARSET')) {
	define('DB_CHARSET', 'utf8');
}

/** The Database Collate type. Don't change this if in doubt. */
if (!defined('DB_COLLATE')) {
	define('DB_COLLATE', '');
}

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '>-LRME|rg-B|Tv;j1!}Dqy-&-}KTRqdM|Pe4Vs,CQi8V*f*Hgd5izvk-cws^;[9M');
define('SECURE_AUTH_KEY',  'AITO>Lnlt!*(IO1% |XdM&|Cua`pW)xH8u@]C{Z67n7N_++d-rhZi+ i{%M]Y,^=');
define('LOGGED_IN_KEY',    'oerGIx@$t)PaO0p.Gtb,&+vFbJs(Vsyhnb;gc%r,wJ|XL-!Mv}.;[51al.Sr): 2');
define('NONCE_KEY',        '!wj(}ijRL5%$6KVR-cY|x_eUKP9j,Jya};Y2~h_+WdLE7-H5,Vhylmyp3e1hU:[H');
define('AUTH_SALT',        '6UybG%&uHFXdrQlD;0R-t!Y2LL7FT?~+F5+y!c a!c|N51Y3Z~W)1e].LHHJA>i1');
define('SECURE_AUTH_SALT', '&nfE1^AV=5!T6ipB6!UDH!7#/T)z^G4d>ZBr!1e+by -h;e0;mvo^3[?lIUUolx3');
define('LOGGED_IN_SALT',   '1rF9dx|b%||Uu};$WHAA|:8y9qV/bI:2dID-O+!88*<o[4`SPG*@o)9e|YXJu}=)');
define('NONCE_SALT',       '0Y9QBnQea[2_;WyoT|-niY#ngfbEa1P8/.(fIHXRz5z#=I^l[>~ayMY||p/|QJKr');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');


/**
 * Set custom paths
 *
 * These are required because wordpress is installed in a subdirectory.
 */
if (!defined('WP_SITEURL')) {
	define('WP_SITEURL', 'http://' . $_SERVER['SERVER_NAME'] . '/wordpress');
}
if (!defined('WP_HOME')) {
	define('WP_HOME',    'http://' . $_SERVER['SERVER_NAME'] . '');
}
if (!defined('WP_CONTENT_DIR')) {
	define('WP_CONTENT_DIR', dirname(__FILE__) . '/content');
}
if (!defined('WP_CONTENT_URL')) {
	define('WP_CONTENT_URL', 'http://' . $_SERVER['SERVER_NAME'] . '/content');
}


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if (!defined('WP_DEBUG')) {
	define('WP_DEBUG', false);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
