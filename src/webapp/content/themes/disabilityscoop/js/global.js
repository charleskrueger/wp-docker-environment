require.config({
	baseUrl: "content/themes/yeopress/js",
	paths: {
    jquery: "vendor/jquery/jquery",
		underscore: "vendor/underscore/underscore",
    datgui: "vendor/dat.gui/dat.gui",
    utils: "vendor/fiveleft/core/Utils",
    tweenmax: "vendor/gsap/src/minified/TweenMax.min",
    handlebars: "vendor/handlebars/handlebars",
		app: "app/Application",
    templates: "app/templates"
	},
  shim: {}
});

require(
  ['jquery','app','datgui','tweenmax'], 
  function($, Application) {
    console.log('Working!!');
    new Application();
  });
