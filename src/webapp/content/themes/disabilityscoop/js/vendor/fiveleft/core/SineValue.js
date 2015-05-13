define(['fiveleft/core/Utils'],function( Utils ){

	

	/** 
	 * SineValue Consturctor
	 * <p>Configure, define shortcuts and initialize</p>
	 * <p>SineValue.js</p>
	 */
	function SineValue( value, options ) {

		this.options = options || {};

		// Properties
		this.startValue = value || 0;

		// Functions
		this.update = sineValue_update;
		this.reset = sineValue_reset;

		// Set all properties
		this.reset();
	}


	function sineValue_reset() {
		this.min = this.options.min || -this.startValue;
		this.max = this.options.max || this.startValue;
		this.value = this.min;
		this.variance = this.max-this.min;
		this.stepAmount = this.options.stepAmount || 0.025;
		this.stepValue = (Math.PI/2) - this.stepAmount;
		return this.value;
	}


	function sineValue_update() {
		this.stepValue += this.stepAmount;
		this.sin = Math.sin( this.stepValue );
		this.cos = Math.cos( this.stepValue );
		this.value = Utils.ratioOf( ((this.sin+1)*0.5), this.min, this.max );
		return this.value;
	}

	return SineValue;
});