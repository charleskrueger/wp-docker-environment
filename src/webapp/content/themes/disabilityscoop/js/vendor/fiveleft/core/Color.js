// fiveleft/core/Color.js
// Fiveleft core utilities
/**
 * @see https://gist.github.com/neolitec/1344610
 * @see http://www.createjs.com/Docs/EaselJS/classes/Graphics.html
 */
define(['fiveleft/core/Utils'],function( Utils ){


	// Color Constructor
	// @param redOrHex - the red [0-255] or hex [#xxxxxx] value of the color
	// @param greenOrAlpha - the green [0-255] or alpha [0-1] value of the color
	// @param blue - the blue [0-255] value of the color
	// @param alpha - the alpha [0-1] value of the color
	function Color( redOrHex, greenOrAlpha, blue, alpha )
	{
		var useHex = (typeof redOrHex !== "undefined" && redOrHex.length>3 );
		var hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(redOrHex);
		this.r = useHex ? parseInt(hex[1], 16) : redOrHex||0;
		this.g = useHex ? parseInt(hex[2], 16) : greenOrAlpha||0;
		this.b = useHex ? parseInt(hex[3], 16) : blue||0;
		this.alpha = useHex ? greenOrAlpha : alpha||1;
	}


	Color.prototype = {
		
		r : 0, // Red [0-255]
		g : 0, // Green [0-255]
		b : 0, // Blue [0-255]
		h : 0, // Hue [0-360]
		s : 0, // Saturation [0-1]
		l : 0, // Lightness [0-1]
		alpha : 1, // Alpha [0-1]
		
		// Set Color values
		// @param redOrHex - the red [0-255] or hex [#xxxxxx] value of the color
		// @param greenOrAlpha - the green [0-255] or alpha [0-1] value of the color
		// @param blue - the blue [0-255] value of the color
		// @param alpha - the alpha [0-1] value of the color
		set : function( redOrHex, greenOrAlpha, blue, alpha ) {
			var useHex = (redOrHex !== null && redOrHex.length>3);
			var hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(redOrHex);
			this.alpha = useHex ? greenOrAlpha : alpha||1;
			this.r = useHex ? parseInt(hex[1], 16) : redOrHex||0;
			this.g = useHex ? parseInt(hex[2], 16) : greenOrAlpha||0;
			this.b = useHex ? parseInt(hex[3], 16) : blue||0;
			return this;
		},
		
		copy : function( c ) {
			this.r = c.r;
			this.g = c.g;
			this.b = c.b;
			this.alpha = c.alpha;
			return this;
		},
		
		getHex : function() {
			return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
		},
		
		getRGB : function() {
			return "rgb(" + Math.round(this.r) + "," + Math.round(this.g) + "," + Math.round(this.b) + ")";
		},
		
		getRGBA : function() {
			return "rgba(" + Math.round(this.r) + "," + Math.round(this.g) + "," + Math.round(this.b) + "," + this.alpha + ")";
		},
		
		setHex : function( hex ) {
			this.r = hex&0xFF;
			this.g = hex>>8&0xFF;
			this.b = hex>>16&0xFF;
			return this;
		},
		
		setRGB : function( r, b, g ) {
			this.r = r||0;
			this.g = g||0;
			this.b = b||0;
			return this;
		},
		
		setRGBA : function( r, b, g, a ) {
			this.r = r||0;
			this.g = g||0;
			this.b = b||0;
			this.alpha = a||1;
			return this;
		},
		
		setRandom : function( minValue, maxValue ) {
			var min = minValue||0,			
				max = maxValue||255;
			this.r = round(Utils.randomBetween(min, max));
			this.g = round(Utils.randomBetween(min, max));
			this.b = round(Utils.randomBetween(min, max));
			return this;
		},
		
		add : function( c ) {
			this.r = (this.r+c.r)*0.5;
			this.g = (this.g+c.g)*0.5;
			this.b = (this.b+c.b)*0.5;
			this.alpha = (this.alpha+c.alpha)*0.5;
			return this;
		},
		
		addColors : function( c1, c2 ) {
			return this.copy(c1).add(c2);
		},
		
		lighten : function( amount ) {
			var amt = Utils.clamp(amount,-1,1);
			this.r = this.r + (amt<0 ? this.r*amt : (255-this.r)*amt);
			this.g = this.g + (amt<0 ? this.g*amt : (255-this.g)*amt);
			this.b = this.b + (amt<0 ? this.b*amt : (255-this.b)*amt);
			return this;
		},
		
		darken : function( amount ) {
			var amt = Utils.clamp(amount,-1,1);
			this.r = this.r - (amt<0 ? (255-this.r)*amt : this.r*amt);
			this.g = this.g - (amt<0 ? (255-this.g)*amt : this.g*amt);
			this.b = this.b - (amt<0 ? (255-this.b)*amt : this.b*amt);
			return this;
		},
		
		mix : function( c, amount ) {
			var amt = Utils.clamp(amount,0,1);
			this.r = this.r + (c.r - this.r)*amt;
			this.g = this.g + (c.g - this.g)*amt;
			this.b = this.b + (c.b - this.b)*amt;
			return this;
		},
		
		mixColors : function( c1, c2, amount ) {
			var amt = Utils.clamp(amount,0,1);
			this.r = c1.r + (c2.r - c1.r)*amt;
			this.g = c1.g + (c2.g - c1.g)*amt;
			this.b = c1.b + (c2.b - c1.b)*amt;
			return this;
		},
		
		desaturate : function( amount ) {
			return this.saturate( 100-amount );
		},
		
		saturate : function( amount ) {
			//var amt = Utils.clamp(amount,0,1);
			this.convertToHSL();
			this.s = Utils.clamp(amount,0,100);
			this.convertToRGB();
			return this;
		},

		/**
		 * Calculates HSL color
		 * RGB must be normalized
		 * Must be executed in a Color object context
		 * http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
		 */
		convertToHSL : function() {
			// log( "convertToHSL r:", this.r, " g:", this.g, " b:", this.b );
			var d, h=0, s=0, l=0, r=this.r/255, g=this.g/255, b=this.b/255, max=Math.max(r,g,b), min=Math.min(r,g,b);
			l = (max+min) * 0.5;
			if(max !== min) {
				d = max-min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max+min);
				switch(max){
				case r: 
					h = (g - b) / d + (g < b ? 6 : 0); 
					break;
				case g: 
					h = (b - r) / d + 2; 
					break;
				case b: 
					h = (r - g) / d + 4; 
					break;
				}
				h /= 6;
			}// else (max===min) is achromatic
			this.h = Math.round(360*h);
			this.s = Math.round(100*s);
			this.l = Math.round(100*l);
			return this;
		},
 
		/**
		 * Calculates RGB color
		 * HSL must be normalized
		 * Must be executed in a Color object context
		 * http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
		 */
		convertToRGB : function() {
			var r, g, b, p, q, h=this.h/360, s=this.s/100, l=this.l/100;

			if( s===0 ) {
				r = g = b = l;
			}else{
				q = (l<0.5) ? l*(1+s) : l + s - l * s;
				p = 2 * l - q;
				r = Color.hueToRGB( p, q, h+1/3 );
				g = Color.hueToRGB( p, q, h );
				b = Color.hueToRGB( p, q, h-1/3 );
			}
			// log( "convertToHSL r:", r, " g:", g, " b:", b );
			this.r = Math.round(255*r);
			this.g = Math.round(255*g);
			this.b = Math.round(255*b);
			return this;
		},

		toString : function() {
			// log( this );
			var rgba_str = "Color rgba(" + this.r + "," + this.g + "," + this.b + "," + this.alpha.toFixed(2) + ")";
			var hsl_str = (typeof this.h !== "undefined") ? " hsl(" + this.h + "," + this.s + "," + this.l + ")" : "";
			return rgba_str + hsl_str;
		}
	};



	Color.random = function( minValue, maxValue ) {
		var min = minValue||0,
			max = maxValue||255,
			r = round(Utils.Utils.randomBetween(min, max)),
			g = round(Utils.Utils.randomBetween(min, max)),
			b = round(Utils.Utils.randomBetween(min, max));
		return new fiveleft.Color( r, g, b, 1 );
	};

	Color.clone = function( c ) {
		return new fiveleft.Color( c.r, c.g, c.b, c.alpha );
	};

	// COLOR HELPERS //
	Color.getRGB = function(r, g, b, alpha) {
		if (r !== null && b === null) {
			alpha = g;
			b = r&0xFF;
			g = r>>8&0xFF;
			r = r>>16&0xFF;
		}
		return (alpha===null) ? "rgb("+r+","+g+","+b+")" : "rgba("+r+","+g+","+b+","+alpha+")";
	};

	Color.getHSL = function(h, s, l, alpha) {
		return alpha===null ? "hsl("+(h%360)+","+s+"%,"+l+"%)" : "hsla("+(h%360)+","+s+"%,"+l+"%,"+alpha+")";
	};

	Color.hueToRGB = function(p, q, t) {
		if(t < 0) t += 1;
    if(t > 1) t -= 1;
    if(t < 1/6) return p + (q - p) * 6 * t;
    if(t < 1/2) return q;
    if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
		// var r;
		// t = (t < 0) ? t+1 : (t > 1) ? t-1 : t;
		// r = (t < 1/6) ? p+(q-p) * 6 * t :
		// (t < 1/2) ? q :
		// (t < 2/3) ? p+(q-p) * (2/3 - t) * 6 :
		// p;
		// return r;
	};
 
  /**
   * Calculates RGB color (nomalized)
   * HSL must be normalized
   * Must be executed in a Color object context
   * http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
   */
  // HSLToRGB: function() {
  //     var h = this.h,
  //         s = this.s,
  //         l = this.l,
  //         hue2rgb = function(p, q, t){
  //             if(t < 0) t += 1;
  //             if(t > 1) t -= 1;
  //             if(t < 1/6) return p + (q - p) * 6 * t;
  //             if(t < 1/2) return q;
  //             if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  //             return p;
  //         };
  //     if(s == 0) {
  //         this.r = this.g = this.b = l; // achromatic
  //     } else {
  //         var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  //         var p = 2 * l - q;
  //         this.r = hue2rgb(p, q, h + 1/3);
  //         this.g = hue2rgb(p, q, h);
  //         this.b = hue2rgb(p, q, h - 1/3);
  //     }
  // },
	return Color;
});