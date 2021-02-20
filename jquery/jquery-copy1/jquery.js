(function( window, undefined ) {
    var
	// A central reference to the root jQuery(document)
	rootjQuery,

	// The deferred used on DOM ready
	readyList,

	// Support: IE9
	// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	location = window.location,
	document = window.document,
	docElem = document.documentElement,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "2.0.3",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
    rdashAlpha = /-([\da-z])/gi,
    
    // Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler and self cleanup method
	completed = function() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
    };
    
    jQuery.fn = jQuery.prototype = {
        jQuery: core_version,
        constructor: jQuery,    //修正contructor属性指向，防止人为修改
        init: function(selector, context, rootjQuery){
			return this;
            var match, elem;
            //selector 参数形式分类
            //特殊值如：$(""), $(null), $(undefined), $(false)
            if(!selector){
                return this;
            }
            //传入string选择器值：$("#div1"), $(".box"), $('div'), $('#div1 div.box'),$("<li>hello")
            if(typeof selector === "string"){
                if(selector.charAt(0) === '<' && selector.charAt(selector.length-1) === '>' && selector.length >= 3){

                }else{
                    
                }
            }
            //传入string创建元素：$("<li>"), $("<li>1</li><li>2</li>")
            //传入dom：$(this), $(document)
            //传入函数：$(function(){})
            //传入对象：$([]), $({})
		},
		// Start with an empty selector，存储选择器块
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,
	}
	// Give the init function the jQuery prototype for later instantiation
	jQuery.fn.init.prototype = jQuery.fn;
	
	// If there is a window object, that at least has a document property,
	// define jQuery and $ identifiers
	if ( typeof window === "object" && typeof window.document === "object" ) {
		window.jQuery = window.$ = jQuery;
	}
}( window ))