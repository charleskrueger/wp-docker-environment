(function(){

	// Namespace
	window.fiveleft = (typeof window.fiveleft == "undefined") ? {} : window.fiveleft;
	
	// Dependencies
	var dependencies = [ "Vector" ];
	for( var d=dependencies.length-1; d!==-1; d-- ) {
		if( typeof fiveleft[dependencies[d]] === "undefined" ) {
			throw new Error( "fiveleft.MotionVector uses " + dependencies[d].toString() + " but could not find it" );
		}
	}

	function MotionVector( x, y, z )
	{
		this.x = x||0;
		this.y = y||0;
		this.z = z||0;

		// Affecting Vectors
		this.target = new fiveleft.Vector();
		this.acc = new fiveleft.Vector();
		this.vel = new fiveleft.Vector(); 
		this.maxVelocity = new fiveleft.Vector(); 
		this.speed = new fiveleft.Vector(); 
		this.friction = new fiveleft.Vector(1,1,1);

		// Internal Functions
		var applyUpdate = function() {
			this.acc.set().add( this.friction );
			this.vel.subtractVectors( this.target, this ).multiply( this.acc );

			// TODO: Add max/min velocity
			// if( this.maxVelocity.length() !== 0 ) {
			// 	this.vel.limit
			// }
			this.add( this.vel );
		};

		// Functions
		this.setTarget = mv_setTarget;
		this.onUpdate = mv_onUpdate;
		
		this.update = function() {
			applyUpdate.apply( this );
			this.onUpdate();
		};
	}


	// --------------------------------------------------------------------
	// Cached Functions
	// --------------------------------------------------------------------

	
	function mv_setTarget( v )
	{
		this.target.copy(v);
		this.update();
	}

	
	function mv_onUpdate()
	{
		// intended to be overridden
		//  - can call this.x, this.y to get scope position
	}


	function mv_setMaxVelocity( v ) 
	{
		if( !v ) {
			this.maxVelocity.set( 0, 0, 0 );
		}else{
			this.maxVelocity.copy( v );
		}
	}


	// --------------------------------------------------------------------
	// Prototype & Namespace Definition
	// --------------------------------------------------------------------

	MotionVector.prototype = new fiveleft.Vector();
	MotionVector.constructor = MotionVector;

	fiveleft.MotionVector = MotionVector;


}());

// var Accelerator = function() 
// 	{
// 		this.target = new fiveleft.Vector();
// 		this.pos = new fiveleft.Vector();
// 		this.acc = new fiveleft.Vector();
// 		this.vel = new fiveleft.Vector(); 
// 		this.speed = new fiveleft.Vector(); 
// 		this.friction = new fiveleft.Vector(1,1,1);
// 		var applyUpdate = function() {
// 			this.acc
// 				.set()
// 				.add( this.friction );
// 			this.vel
// 				.subtractVectors( this.target, this.pos )
// 				.multiply( this.acc );
// 			this.pos
// 				.add( this.vel );
// 		};
// 		this.update = function() {
// 			applyUpdate.apply(this);
// 			this.onUpdate();
// 			return this.pos;
// 		};
// 		this.set = function( v ){
// 			this.target.copy(v);
// 			this.update();
// 		};
// 	};

// 	Accelerator.prototype = {
// 		constructor : Accelerator
// 		,target : null
// 		,pos : null
// 		,acc : null
// 		,vel : null 
// 		,friction : null
// 		,set : function() {}
// 		,update : function() {}
// 		,onUpdate : function() {}
// 	};