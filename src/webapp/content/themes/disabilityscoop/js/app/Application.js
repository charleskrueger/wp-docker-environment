// App.js
define(
  ['jquery','underscore','utils','templates'],
  function($, _, Utils, Templates){

    var randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus lacus. Fusce sapien diam, aliquet quis odio ac, porttitor cursus lacus. Aenean quis dolor pharetra, pretium tellus ut, tincidunt massa. Cras in magna efficitur, faucibus risus quis, ultrices massa. Nam congue condimentum est eu malesuada. Sed lorem libero, semper sed auctor vel, vulputate eu tellus. Vestibulum nisi augue, condimentum at quam nec, egestas malesuada lectus. Phasellus vitae tortor nunc. Nam sed interdum risus, ac rhoncus tortor. Integer eget quam odio. Fusce sed elit ipsum. Ut ac tincidunt diam. Donec dapibus rutrum libero sed mollis. Duis finibus, orci vitae varius ornare, diam justo dignissim nisl, eu consectetur sapien felis eu massa. Sed sed quam in nulla malesuada gravida. Proin pharetra pharetra justo vel blandit. Vivamus vehicula ullamcorper ex, id accumsan tellus porta vitae. Sed finibus magna quis dui luctus, a maximus orci tempus. Quisque semper enim leo. Mauris pretium convallis orci, non dictum velit consequat id. Praesent ullamcorper, purus ut commodo aliquam, quam nibh feugiat est, sit amet aliquet est nisl sed erat. Nulla ullamcorper erat in purus ornare, sit amet tempus nibh auctor. Aliquam orci justo, mollis vitae ex sit amet, suscipit luctus dolor. Curabitur ornare dui massa, vel tempus ligula egestas id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus dui nisi, luctus quis finibus et, fermentum nec neque. Etiam venenatis nisi ut metus venenatis efficitur ac ac sapien. Vivamus nec quam nec dolor suscipit imperdiet. Nunc euismod justo nisl, non interdum eros tincidunt eu. Pellentesque molestie auctor erat a eleifend. Aenean ac vulputate enim, quis pellentesque nisi. Proin nec lectus quis elit imperdiet commodo eu a libero. Quisque non risus id felis pulvinar viverra. Donec nibh mi, pretium in neque non, molestie rhoncus lorem. Cras gravida egestas orci in tincidunt. Integer tortor diam, interdum id cursus id, suscipit vel neque. Nunc felis lectus, laoreet id sem eget, tempor mattis arcu. Suspendisse eget aliquet mi. Maecenas non tristique justo, ut finibus lectus. Morbi aliquam nisl ut quam suscipit, sit amet sollicitudin purus mattis. Vivamus eget ultrices mi, at semper odio. Curabitur malesuada libero mollis varius aliquam. Proin congue est arcu, nec rutrum mauris hendrerit in. Duis quis ipsum velit. In neque lacus, viverra at ullamcorper et, volutpat vel velit. Nullam pharetra quis nulla et eleifend. Nam viverra aliquam lorem sed finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce tincidunt consequat vehicula. Mauris viverra tellus id massa semper, eget ullamcorper dui porta. Quisque facilisis efficitur lectus eget porta. In hac habitasse platea dictumst. Integer congue libero arcu, sit amet porta est fermentum eu. Praesent porttitor porttitor nunc, a tempor ante fermentum ac. Cras porta vel urna fermentum mollis. In aliquet, erat ac varius sagittis, tellus felis vestibulum lacus, vel elementum velit augue in massa. Duis lobortis, nunc et tempus congue, magna magna fringilla justo, sit amet porta lectus mauris dictum neque. Maecenas accumsan rutrum nisi, eget condimentum elit accumsan sit amet. Phasellus interdum quis est in scelerisque. Aenean tristique libero eu massa maximus tincidunt.",
      randomTextLength = randomText.length,
      categoryList = ['Health &amp; Behavior','Education','Politics','Living','Money','Autism','Cerebral Palsy','Down Syndrome','Intellectual Disability'],
      startDate = Date.now(),
      rangeOfDays = 30,
      endDate = startDate - ( 1000 * 60 * 60 * 24 * rangeOfDays ),
      postData = {},
      i;

    var controller = {
        postCount : 20,
        rangeOfDays : 30,
        imageFrequency : 0.5,
        featurePriorityFrequency : 0.05,
        highPriorityFrequency : 0.2,
        averagePriorityFrequency : 0.6,
        rebuild : function() {
          console.log( 'rebuild!' );
          createRandomPosts();
        }
      },
      c = controller;


      /**
       * Pull a string from randomText between 12 and 80 characters. Remove periods and trailing spaces
       * @return {String} 
       */
    function createRandomTitle() {

      var randomStart = Utils.roundRandomBetween( 0,randomTextLength ),
        randomTitle = randomText.substr( randomStart, Utils.roundRandomBetween( 12, 80 ) ),
        startChar = randomTitle.indexOf( ' ' ),
        title = '';

      randomTitle = randomTitle
        .substr( startChar+1 )
        .replace( /\.|\s\w{0,2}$/g, '' )
        .toLowerCase();
      title = randomTitle.charAt(0).toUpperCase() + randomTitle.substr(1);
      // console.log( startChar, title );
      return title;
    }


    /**
     * Pull a string from random text between 60 and 300 characters
     * @return {String} 
     */
    function createRandomBody() {
      var randomStart = Utils.roundRandomBetween( 0,randomTextLength-300 ),
          randomBody = randomText.substr( randomStart, Utils.roundRandomBetween( 60, 300 ) ),
          startChar = randomBody.indexOf( ' ' ),
          body = '';

      randomBody = randomBody
        .substr( startChar+1 )
        .replace( /\s\w{0,2}$/, '' );

      body = randomBody.charAt(0).toUpperCase() + randomBody.substr(1) + "." ;
      return body;
    }


    /** 
     * Create an image object based on the frequency at which to display images in the grid
     * @return {Object} 
     */
    function createRandomImage() {
      var hasImage = Math.random() <= c.imageFrequency,
        image = false;

      if( hasImage ) {
        image = {
          src : ''
        };
      }
      return image;
    }


    /** 
     * Create an image object based on the frequency at which to display images in the grid
     * @return {Object} 
     */
    function createRandomPriority() {
      var value = Math.random(),
        priority = 3;

      switch( true ) {
        case value <= c.featurePriorityFrequency :
        priority = 0;
        break;
        case value <= c.highPriorityFrequency :
        priority = 1;
        break;
        case value <= c.averagePriorityFrequency :
        priority = 2;
        break;
      }
      return priority;
    }



    function createRandomPosts() {

      var posts = [],
        prettyDate,
        prettyTime,
        date;

      // Create Random Dates
      for( i=1; i!==c.postCount+1; i++ ) {
        date = new Date();
        date.setTime( Math.round( Utils.randomBetween( endDate, startDate ) ) );
        prettyDate = date.toDateString();
        prettyTime = date.toLocaleTimeString();
        posts.push({
          time : date.getTime(),
          displayDate : prettyDate,
          displayTime : prettyTime
        });
      }

      // Sort Dates, newest first
      posts.sort( function( a, b ) {
        return ( a.time > b.time ) ? -1 : (a.time < b.time) ? 1 : 0;
      });

      // Create Post Types
      for( i=c.postCount-1; i!==-1; i-- ) {
        postData = posts[i];
        postData.index = i+1;
        postData.title = createRandomTitle();
        postData.content = createRandomBody();
        postData.excerpt = postData.content.substr(0,200);
        postData.featuredCategory = categoryList[ Utils.roundRandomBetween(0,categoryList.length-1) ];
        postData.featuredImage = createRandomImage();
        postData.priority = createRandomPriority();
        console.log( postData.index + ' priority:' + postData.priority );
      }
      return posts;
    }













    var Application = function() {

      var self = this;
      
      this.$tileList = $('.tile-list');


      c.rebuild = function(){self.createPosts();};

      this.gui = new dat.GUI();
      this.gui.add( c, 'postCount', 10, 40 ).step(1).onFinishChange( c.rebuild );
      this.gui.add( c, 'imageFrequency', 0.1, 0.8 ).step(0.1).onFinishChange( c.rebuild );
      this.gui.add( c, 'highPriorityFrequency', 0.1, 0.5 ).step(0.1).onFinishChange( c.rebuild );
      this.gui.add( c, 'averagePriorityFrequency', 0.3, 0.9 ).step(0.1).onFinishChange( c.rebuild );
      this.gui.add( c, 'rebuild' );
      this.gui.open();

      this.createPosts();
    };

    Application.prototype = {

      constructor : Application,

      createPosts : function() {

        var self = this,
          postEl;



        // console.log( "Application.createPosts()" );
        this.posts = createRandomPosts();
        this.$tileList.empty();

        _.each( this.posts, function( post ) {
          postEl = Templates['tile'](post);
          self.$tileList.append( postEl );
        });

      }
    };


    return Application;
  });