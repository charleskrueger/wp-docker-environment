define(['fiveleft/core/Utils','fiveleft/core/Vector'],function( Utils, Vector ){

	function Rectangle( x, y, w, h ){
		this.x = x||0;
		this.y = y||0;
		this.width = w||0;
		this.height = h||0;
		this.tl = new Vector( this.x, this.y );
		this.br = new Vector( this.x+this.width, this.y+this.height );
		this.center = new Vector( this.x+(this.width/2), this.y+(this.height/2) );
		this.position = new Vector( this.x, this.y );
		return this.update();	
	}

	Rectangle.prototype = {
		constructor : Rectangle,
		x : 0,
		y : 0,
		width : 0,
		height : 0,
		t : 0, // top
		r : 0, // right
		b : 0, // bottom
		l : 0, // left
		tl : null,
		br : null,
		center : null,
		position : null,


		toString : function( f ){
			var fix = typeof f==="undefined" ? -1 : f;
			return "Rectangle (" + ((fix>-1) ? "x:" + this.x.toFixed(fix) + ", y:" + this.y.toFixed(fix) + ", width:" + this.width.toFixed(fix) + ", height:" + this.height.toFixed(fix) : "x:" + this.x + ", y:" + this.y + ", width:" + this.width + ", height:" + this.height) + ")";
		},

		set : function( x, y, w, h ) {
			this.x = x||this.x;
			this.y = y||this.y;
			this.width = w||this.width;
			this.height = h||this.height;
			return this.update();
		},

		setPosition : function( x, y ){
			this.x = x||this.position.x||this.x;
			this.y = y||this.position.y||this.y;
			return this.update();
		},

		setSize : function( w, h ){
			this.width = w||this.width;
			this.height = h||this.height;
			return this.update();
		},

		setBottom : function( value ){
			this.height = (value>this.y) ? value-this.y : 0;
			return this.update();
		},

		setWidth : function( w ){
			this.width = w||0;
			return this.update();
		},

		setHeight : function( h ){
			this.height = h||0;
			return this.update();
		},

		setCenter : function( vector ){
			this.x = round( vector.x - (this.width/2));
			this.y = round( vector.y - (this.height/2));
			return this.update();
		},

		copy : function( r ) {
			this.x = r.x;
			this.y = r.y;
			this.width = r.width;
			this.height = r.height;
			return this.update();
		},

		clone : function() {
			return new fiveleft.Rectangle( this.x, this.y, this.width, this.height );
		},

		getAspectRatio : function() {
			return this.height/this.width;
		},

		getArea : function(){
			return this.width*this.height;
		},

		getIntersects : function( v ) {
			return inRange( v.x, this.x, this.br.x ) && inRange( v.y, this.y, this.br.y );
		},

		getTopLeft : function() {
			return this.update().tl;
		},

		getPosition : function(){
			this.update();
			return this.position;
		}, 

		getCenter : function(){
			this.update();
			return this.center.interpolateVectors( this.tl, this.br, 0.5 );
		},

		getRight : function(){
			return this.x + this.width;
		},

		getBottom : function(){
			return this.y + this.height;
		},

		scaleRect : function( rect, amtW, amtH ) {
			var amt = (amtH===null) ? amtW : false;

			// start from the center
			this.center.copy( rect.update().center );
			
			this.width = rect.width * (amt||amtW);
			this.x = this.center.x - (this.width*0.5);
			this.height = rect.height * (amt||amtH);
			this.y = this.center.y - (this.height*0.5);
			return this.update();
		},

		interpolateTo : function( rect, amtW, amtH ) {
			var amt = (amtH===null) ? amtW : false;
			this.x = this.x + ( (rect.x - this.x) * (amt||amtW) );
			this.y = this.y + ( (rect.y - this.y) * (amt||amtH) );
			this.width = this.width + ((rect.width - this.width) * (amt||amtW) );
			this.height = this.height + ((rect.height - this.height) * (amt||amtH) );
			return this.update();
		},

		interpolateRects : function( r1, r2, amtW, amtH ) {
			var amt = (amtH===null) ? amtW : false;
			this.x = r1.x + ( (r2.x - r1.x) * (amt||amtW) );
			this.y = r1.y + ( (r2.y - r1.y) * (amt||amtH) );
			this.width = r1.width + ((r2.width - r1.width) * (amt||amtW) );
			this.height = r1.height + ((r2.height - r1.height) * (amt||amtH) );
			return this.update();
		},

		update : function(){
			this.tl.set( this.x, this.y );
			this.br.set( this.getRight(), this.getBottom() );
			this.l = this.x;
			this.t = this.y;
			this.r = this.br.x;
			this.b = this.br.y;
			this.center.interpolateVectors( this.tl, this.br, 0.5 );
			this.position = this.tl;
			return this;
		},

		round : function() {
			this.x = (0.5 + this.x) << 0;
			this.y = (0.5 + this.y) << 0;
			this.width = (0.5 + this.width) << 0;
			this.height = (0.5 + this.height) << 0;
			return this.update();
		}
	};


	Rectangle.clone = function( v ) {
		return new Rectangle(v.x, v.y, v.width, v.height);
	};


	Rectangle.getRotatedBoundry = function( rect, angle ) {
		var origin = rect.update().center,
			deg = Utils.toDeg(angle) % 90,
			useW, useH,
			angleAdjust = Utils.toRad(deg);

		useW = rect.width;
		useH = rect.height;
		rect.width = (Math.cos(angleAdjust) * useW) + (Math.sin(angleAdjust) * useH);
		rect.height = (Math.sin(angleAdjust) * useW) + (Math.cos(angleAdjust) * useH);
		return rect.setCenter( origin );
	};

	// , offset : function( value ) 
	// {
	// 	var usePerc = typeof value!=="number" && value.indexOf("%") > -1
	// 		,usePx = typeof value!=="number" && value.indexOf("px") > -1
	// 		,amt = 
	// 			usePerc ? parseInt(value, 10)/100 : 
	// 			usePx ? parseInt(value, 10) :
	// 			value;


	// 	this.x -= usePerc ? (this.width*(amt/2)) : amt;
	// 	this.y -= usePerc ? (this.height*(amt/2)) : amt;
	// 	this.width += usePerc ? (this.width*amt) : this.width+(amt*2);
	// 	this.height += usePerc ? (this.height*amt) : this.height+(amt*2);
	// 	return this.update();
	// }

	// , offsetRect : function( rect, value ) 
	// {
	// 	var usePerc = typeof value!=="number" && value.indexOf("%") > -1
	// 		,amt = usePerc ? parseInt(value, 10)/100 : value;
	// 	this.x = usePerc ? rect.x-(rect.width*(amt/2)) : rect.x-amt;
	// 	this.y = usePerc ? rect.y-(rect.height*(amt/2)) : rect.y-amt;
	// 	this.width = usePerc ? rect.width+(rect.width*amt) : rect.width+(amt*2);
	// 	this.height = usePerc ? rect.height+(rect.height*amt) : rect.height+(amt*2);
	// 	return this.update();
	// }
	// 
	return Rectangle;
});
