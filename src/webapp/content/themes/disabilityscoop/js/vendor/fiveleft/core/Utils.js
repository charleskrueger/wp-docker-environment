// fiveleft/core/Utils.js
// Fiveleft core utilities
/**
 * @see https://gist.github.com/neolitec/1344610
 * @see http://www.createjs.com/Docs/EaselJS/classes/Graphics.html
 */
define([],function(){

	var _u = {};

	// usage: log('inside coolFunc',this,arguments);
	// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
	// _u.log = function(){
	// 	log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);typeof console.log=="object"?log.apply.call(console.log,console,a):console.log.apply(console,a)}};(function(a){function b(){}for(var c="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),d;d=c.pop();)a[d]=a[d]||b})(function(){try{console.log();return window.console}catch(a){return window.console={}}}());(function(){var a=jQuery.event.special,b="D"+ +(new Date),c="D"+(+(new Date)+1);a.scrollstart={setup:function(){var c,d=function(b){var d=this,e=arguments;if(c)clearTimeout(c);else{b.type="scrollstart";jQuery.event.handle.apply(d,e)}c=setTimeout(function(){c=null},a.scrollstop.latency)};jQuery(this).bind("scroll",d).data(b,d)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(b))}};a.scrollstop={latency:300,setup:function(){var b,d=function(c){var d=this,e=arguments;b&&clearTimeout(b);b=setTimeout(function(){b=null;c.type="scrollstop";jQuery.event.handle.apply(d,e)},a.scrollstop.latency)};jQuery(this).bind("scroll",d).data(c,d)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(c))}}})();String.prototype.trunc=function(a,b){var c=this.length>a,d=c?this.substr(0,a-1):this;d=b&&c?d.substr(0,d.lastIndexOf(" ")):d;return c?d+"...":d;
	// };

	_u.shuffle = function() {
		return 0.5 - Math.random();
	};

	_u.toRad = function( degrees ) {
		return degrees*(Math.PI/180);
	};

	_u.toDeg = function( radians ) {
		return radians*(180/Math.PI);
	};

	_u.randomBetween = function( min, max ) {
		return min + (Math.random() * (max-min));
	};

	_u.roundRandomBetween = function( min, max ) {
		return this.round( min + (Math.random() * (max-min)) );
	};

	_u.randomAround = function( value ) {
		return (value * -0.5) + (Math.random()*value);
	};

	_u.eitherOr = function( a, b ) {
		return Math.random() > 0.5 ? a : b;
	};

	_u.randomPosNeg = function() {
		return -1 + (2*Math.random());
	};

	_u.clamp = function( value, min, max ) {
		return (value < min) ? min : (value > max) ? max : value; 
	};

	_u.spread = function( value, min, max ) {
		return (value > min && value < max) ? ( value>=((max-min)*0.5) ? max : min ) : value;
	};

	/**
	 * More Efficient Rounding function using bitwise operator '<< 0'
	 * @see http://jsperf.com/math-round-vs-hack/3
	 * @param  {Number} val
	 * @return {Number} rounded number
	 */
	_u.round = function( val ) {
		return (0.5 + val) << 0;
	};

	_u.isBetween = function (value, min, max) {
		return ((value > min) && (value < max)); 
	};

	_u.inRange = function (value, min, max) {
		return ((value >= min) && (value <= max)); 
	};

	_u.ratioBetween = function (value, min, max) {
		return (value-min)/(max-min);
	};

	_u.ratioOf = function( value, min, max ) {
		return min + (max-min)*value;
	};

	_u.interpolate = function( a, b, ratio ) {
		return a + (b-a)*ratio;
	};

	_u.isObject = function (value) {
		return typeof value === 'object' && value !== null; 
	};

	_u.isNumber = function (value)  {
		return typeof value === 'number'; 
	};

	_u.isString = function (value)  {
		return typeof value === 'string'; 
	};

	_u.isFunction = function (value)  {
		return typeof value === 'function'; 
	};

	_u.isArray = function (value)  {
		return Object.prototype.toString.call(value) === '[object Array]'; 
	};

	_u.isNull = function (value)  {
		return value === null; 
	};

	_u.isUndefined = function (value)  {
		return typeof value === 'undefined'; 
	};

	_u.firstToLast = function( array ) {
		var item = array.shift();
		array.push(item);
		return item;
	};

	_u.lastToFirst = function( array ) {
		var item = array.pop();
		array.unshift( item );
		return item;
	};




	// EASING //
	// no easing, no acceleration
	_u.linear = function(t) { return t; };
	// accelerating from zero velocity
	_u.easeInQuad = function(t) { return t*t; };
	// decelerating to zero velocity
	_u.easeOutQuad = function(t) { return t*(2-t); };
	// acceleration until halfway, then deceleration
	_u.easeInOutQuad = function(t) { return t<0.5 ? 2*t*t : -1+(4-2*t)*t; };
	// accelerating from zero velocity 
	_u.easeInCubic = function(t) { return t*t*t; };
	// decelerating to zero velocity 
	_u.easeOutCubic = function(t) { return (--t)*t*t+1; };
	// acceleration until halfway, then deceleration 
	_u.easeInOutCubic = function(t) { return t<0.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; };
	// accelerating from zero velocity 
	_u.easeInQuart = function(t) { return t*t*t*t; };
	// decelerating to zero velocity 
	_u.easeOutQuart = function(t) { return 1-(--t)*t*t*t; };
	// acceleration until halfway, then deceleration
	_u.easeInOutQuart = function(t) { return t<0.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t; };
	// accelerating from zero velocity
	_u.easeInQuint = function(t) { return t*t*t*t*t; };
	// decelerating to zero velocity
	_u.easeOutQuint = function(t) { return 1+(--t)*t*t*t*t; };
	// acceleration until halfway, then deceleration 
	_u.easeInOutQuint = function(t) { return t<0.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; };



	// COLOR HELPERS //
	_u.getRGB = function(r, g, b, alpha) {
		if (r !== null && b === null) {
			alpha = g;
			b = r&0xFF;
			g = r>>8&0xFF;
			r = r>>16&0xFF;
		}
		return (alpha===null) ? "rgb("+r+","+g+","+b+")" : "rgba("+r+","+g+","+b+","+alpha+")";
	};

	_u.getHSL = function(h, s, l, alpha) {
		return alpha===null ? "hsl("+(h%360)+","+s+"%,"+l+"%)" : "hsla("+(h%360)+","+s+"%,"+l+"%,"+alpha+")";
	};

	return _u;
});

