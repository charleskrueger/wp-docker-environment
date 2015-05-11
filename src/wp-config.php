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
	define('DB_PASSWORD', 'ds12345');
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
define('AUTH_KEY',         'v4v|Q?^,3h0-48&/g-q(#fH#D=!K6+rIQq;J54GoDKiQm6Zo pB6|![VB|Fx~.X?');
define('SECURE_AUTH_KEY',  'T``c6cSuIg<#Mra]WV|:88>L_%!]!B/-q(FBztJfeS`kw>PoQYo4awmXbM++N%5`');
define('LOGGED_IN_KEY',    'B|i]D$65vjrHKTXq](r$|r?3m~Z<-1$@:N_(Et=#0+7BYyrX;uXp!F0Zs:MuiFeu');
define('NONCE_KEY',        'u+Ks.`}oTRcRnkRDg_ya4,fU-)vps1SRVPhGh^KVWJ?aOT^jXorg-ay}o(Cz3>@N');
define('AUTH_SALT',        '|Q:@1Co[UZ|n4j!X{L}B;2Vi_-L)yCB$Do+TMD2>B-C6EMZ`|(+bB(eq[J9m +cw');
define('SECURE_AUTH_SALT', '31s{_fXwerqj*)nH{SBwN<ix_uFp4*e6OLUQ}~DB.-PKtPwg-qINv,1N[;ySNGQg');
define('LOGGED_IN_SALT',   'Y><7C-^b42l=_K5ElOq$4?`Q7Bh0;WNGD0:`4MP0`.>-saFdf2!+p]$A<4oC~][$');
define('NONCE_SALT',       '&e!u>nRJ`4/YZLdl-+rz3Z5JA)=Xitr!8[HMebZFj9E[GD)p#{db.44g=e*;G>66');

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
