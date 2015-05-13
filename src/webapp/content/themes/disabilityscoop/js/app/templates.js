define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["tile"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "has-image";
},"3":function(depth0,helpers,partials,data) {
    return "      <div class='featured-image'>\n        <div class='image-wrapper'>\n          <span class='image-placeholder'></span>\n        </div>\n      </div>\n";
},"5":function(depth0,helpers,partials,data) {
    return " | <span class='has-image'>Image</span>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<li class='tile priority-"
    + alias3(((helper = (helper = helpers.priority || (depth0 != null ? depth0.priority : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"priority","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.featuredImage : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "' data-index='"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "'>\n  <div class='tile-inner'>\n    <div class='tile-content'>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.featuredImage : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      <div class='category-info'>\n        <span class='index'>"
    + ((stack1 = ((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span> | \n        <span class='featured-category'>"
    + ((stack1 = ((helper = (helper = helpers.featuredCategory || (depth0 != null ? depth0.featuredCategory : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"featuredCategory","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n      </div>\n      <h1 class='title'>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n      <p class='content-wrapper'>\n        "
    + alias3(((helper = (helper = helpers.excerpt || (depth0 != null ? depth0.excerpt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"excerpt","hash":{},"data":data}) : helper)))
    + "\n      </p>\n      <p class='time-marker'><span class='date'>"
    + alias3(((helper = (helper = helpers.displayDate || (depth0 != null ? depth0.displayDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayDate","hash":{},"data":data}) : helper)))
    + "</span> | <span class='time'>"
    + alias3(((helper = (helper = helpers.displayTime || (depth0 != null ? depth0.displayTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayTime","hash":{},"data":data}) : helper)))
    + "</span></p>\n      <div class='tile-layout-info'>\n        <span class='priority'>Priority: "
    + alias3(((helper = (helper = helpers.priority || (depth0 != null ? depth0.priority : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"priority","hash":{},"data":data}) : helper)))
    + "</span>\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.featuredImage : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n  </div>\n</li>";
},"useData":true});

return this["JST"];

});