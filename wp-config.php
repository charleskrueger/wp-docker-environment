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
define('AUTH_KEY',         '^+?NR>9x^H|2+n1hHN=F]%lTZDofH<mMhFNC*4t -4^ a(gr9P{`<<Ux$@#pcT+j');
define('SECURE_AUTH_KEY',  'R[Q++9x(XwTI6s][q>)&c~0K0uN-do^S8b ~HojKF-9GST49oPc`EL{kJ-tycP-[');
define('LOGGED_IN_KEY',    '<uijC1kA6/z|e-%a@T|KL]^Bu$YZukwNnM[l|NiD-{O,3]d`CJd:2(!*)/9k0~F/');
define('NONCE_KEY',        'P*jK.E|3x`AAHsadGKC+|MKIDs]9|~2e08q|U zdyI;t `c pJi|u;WfV*.N7G_w');
define('AUTH_SALT',        'e*gt7|F>UWc</JyZAaFPrxVBUA:}#/X[7()kVZN#s9: jc+U(`)t/z+)sOla~yXA');
define('SECURE_AUTH_SALT', 'lR?/c~l[%U;Fh_{qOL!5E`f mv,{#1XLrr+i@i?sdej9wxz~f=sA3&N#R12P{wWC');
define('LOGGED_IN_SALT',   '>caJapDH2gNYK;_bH[cUlW<:e,sSmZ|C$pwf_+L._hWz7UhmA[bE&&kyK6*D^Dc0');
define('NONCE_SALT',       ';:`Xy-+:MQb;4[2b!m1XWo|._OJSxoZq>(^C$y{r&o_Ax,UD^=(`T[7oXkJ{fO(W');

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
	define('WP_SITEURL', 'http://' . $_SERVER['SERVER_NAME'] . '/src/wordpress');
}
if (!defined('WP_HOME')) {
	define('WP_HOME',    'http://' . $_SERVER['SERVER_NAME'] . '');
}
if (!defined('WP_CONTENT_DIR')) {
	define('WP_CONTENT_DIR', dirname(__FILE__) . '/src/content');
}
if (!defined('WP_CONTENT_URL')) {
	define('WP_CONTENT_URL', 'http://' . $_SERVER['SERVER_NAME'] . '/src/content');
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
