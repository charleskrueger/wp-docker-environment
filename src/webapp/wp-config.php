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
define('AUTH_KEY',         'fC|*frl{7E^ueJoJ!Y;H}-_:>EKoI_2*Blb%Ct+#SixYXgh{o~,hAL$j?h|[m,tp');
define('SECURE_AUTH_KEY',  'F`2o`4LF+g)8+)=a3usVmz2D#`F]MZ[$5}w!^nZf.G&FFH@P|AjVdW@$$umVP:+^');
define('LOGGED_IN_KEY',    '+lYlU--*F1)BE1J>V:AOyL0!`<;]PnU7iW-<%]+_J!: X}|-OJ@hyR/V:hH^$HM ');
define('NONCE_KEY',        'yG-;}y,^kU$gvmjY_91XoR,16]]!|X-p.  /|=v.c&fs8#CG=1TO.9QcFqFhNbAx');
define('AUTH_SALT',        'Q05l!dM;8^yKXjvX4YBapl2Hp]/Fk+9l/JEY/!@q;`&|dR+FLKU.1mPlKRw:I%$I');
define('SECURE_AUTH_SALT', 'c&[O 29dMhay)/B7Usp|*? r-/c(cLtTO6bgr 4JQqw{eOJ+:@c)w==y!;#S2|fR');
define('LOGGED_IN_SALT',   '~`)wbebrIbLoGMfAFqG+Iv&P+v#|A|7 urt4)X;B0Cv%wEAS!l=|zd.9|mt9mFmV');
define('NONCE_SALT',       '->.Lh+3k61i`_e:+bXwX-k+8thJk7,s:j%_`-:6.5V`W+CG-vpSb7*6gTB|fJ1o2');

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
