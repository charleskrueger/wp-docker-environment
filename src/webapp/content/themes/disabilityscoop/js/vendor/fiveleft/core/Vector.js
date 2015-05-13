define([],function(){

	function Vector( x, y, z )
	{
		this.x = x||0;
		this.y = y||0;
		this.z = z||0;
	}

	Vector.prototype = 
	{
		constructor : Vector,

		x : 0,

		y : 0,

		z : 0,

		set : function( x, y, z ){
			this.x = x||0;
			this.y = y||0;
			this.z = z||0;
			return this;
		},

		copy : function( v ){
			this.x = v.x;
			this.y = v.y;
			this.z = v.z;
			return this;
		},

		clone : function(){
			return new Vector(this.x, this.y, this.z);
		},

		toString : function( f ){
			var fix = typeof f==="undefined" ? -1 : f;
			return "Vector (" + ((fix>-1) ? "x:" + this.x.toFixed(fix) + ", y:" + this.y.toFixed(fix) + ", z:" + this.z.toFixed(fix) : "x:" + this.x + ", y:" + this.y + ", z:" + this.z) + ")";
		},

		add : function( v ){
			this.x += v.x;
			this.y += v.y;
			this.z += v.z;
			return this;
		},

		addVectors : function( v1, v2 ){
			this.x = v1.x+v2.x;
			this.y = v1.y+v2.y;
			this.z = v1.z+v2.z;
			return this;
		},

		addScalar : function( s ){
			this.x += s;
			this.y += s;
			this.z += s;
			return this;
		},

		subtract : function( v ){
			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;
			return this;
		},

		subtractVectors : function( v1, v2 ){
			this.x = v1.x-v2.x;
			this.y = v1.y-v2.y;
			this.z = v1.z-v2.z;
			return this;
		},

		subtractScalar : function( s ){
			this.x -= s;
			this.y -= s;
			this.z -= s;
			return this;
		},

		multiply : function( v ){
			this.x *= v.x;
			this.y *= v.y;
			this.z *= v.z;
			return this;
		},

		multiplyVectors : function( v1, v2 ){
			this.x = v1.x*v2.x;
			this.y = v1.y*v2.y;
			this.z = v1.z*v2.z;
			return this;
		},

		multiplyScalar : function( s ){
			this.x *= s;
			this.y *= s;
			this.z *= s;
			return this;
		},

		divide : function( v ){
			this.x /= v.x;
			this.y /= v.y;
			this.z /= v.z;
			return this;
		},

		divideVectors : function( v1, v2 ){
			this.x = v1.x/v2.x;
			this.y = v1.y/v2.y;
			this.z = v1.z/v2.z;
			return this;
		},

		divideScalar : function( s ){
			this.x /= s;
			this.y /= s;
			this.z /= s;
			return this;
		},

		cross : function( v ){
			var _x=this.x, _y=this.y, _z=this.z;
			this.x = _y*v.z - _z*v.y;
			this.y = _z*v.x - _x*v.z;
			this.y = _x*v.y - _y*v.x;
			return this;
		},

		crossVectors : function( v1, v2 ){
			this.x = v1.y*v2.z - v1.z*v2.y;
			this.y = v1.z*v2.x - v1.x*v2.z;
			this.y = v1.x*v2.y - v1.y*v2.x;
			return this;
		},

		min : function( v ){
			this.x = this.x < v.x ? v.x : this.x;
			this.y = this.y < v.y ? v.y : this.y;
			this.z = this.z < v.z ? v.z : this.z;
			return this;
		},

		max : function( v ){
			this.x = this.x > v.x ? v.x : this.x;
			this.y = this.y > v.y ? v.y : this.y;
			this.z = this.z > v.z ? v.z : this.z;
			return this;
		},

		clamp : function( minV, maxV ){
			this.min( minV );
			this.max( maxV );
			return this;
		},

		negate : function(){
			this.multiplyScalar(-1);
			return this;
		},

		normalize : function(){
			this.divideScalar( this.length() );
			return this;
		},

		limit : function( min, max ){
			var len = this.length();
			if( min !== null && len < min) {
				this.setLength(min);
			}else if( max !==null && len > max ) {
				this.setLength(max);
			}
			return this;
		},

		distanceSquared : function( v ){
			var dx=this.x-v.x, dy=this.y-v.y, dz=this.z-v.z;
			return dx*dx + dy*dy + dz*dz;
		},

		distance : function( v ){
			return Math.sqrt(this.distanceSquared(v));
		},

		lengthSquared : function(){
			return this.x*this.x + this.y*this.y + this.z*this.z;
		},

		length : function(){
			return Math.sqrt(this.lengthSquared());
		},

		setLength : function( l ) {
			var len = this.length();
			if( len !== 0 && l !== len ) {
				this.multiplyScalar( l/len );
			}
			return this;
		},

		dot : function( v ){
			return this.x*v.x + this.y*v.y + this.z*v.z;
		},

		dotVectors : function( v1, v2 ){
			return v1.x*v2.x + v1.y*v2.y + v1.z*v2.z;
		},

		angleTo : function( v ) {
			return Math.atan2(this.x-v.x, this.y-v.y);	
		},

		interpolateTo : function( v, a ) {
			var r = a||0.5;
			this.x = this.x + (v.x - this.x)*r;
			this.y = this.y + (v.y - this.y)*r;
			this.z = this.z + (v.z - this.z)*r;
			return this;
		},

		interpolateVectors : function( v1, v2, a ) {
			var r = a||0.5;
			this.x = v1.x + (v2.x - v1.x)*r;
			this.y = v1.y + (v2.y - v1.y)*r;
			this.z = v1.z + (v2.z - v1.z)*r;
			return this;
		},

		/**
		 * Using bitwise operator hack to maximize speed
		 * @see http://jsperf.com/math-round-vs-hack/3
		 * @return Vector
		 */
		round : function() {
			this.x = (0.5 + this.x) << 0;
			this.y = (0.5 + this.y) << 0;
			this.z = (0.5 + this.z) << 0;
			return this;
		}

		//,atAngle : function( )
		
	};

	Vector.clone = function( v ) {
		return new Vector(v.x, v.y, v.z);
	};

	return Vector;
});