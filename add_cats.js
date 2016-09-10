
/*
* Add multiple attributes into Magento using JavaScript
* Written by: Abel
*
*/

(function() {

	var config = {
		/* ====================================================
		* Replace the below with ones you want to add
		* ====================================================*/
		attributes: [
			'Attribute name 1',
			'Attribute name 2',
			'Attribute name 3',
			'Attribute name 4',
			'Attribute name 5',
			'Attribute name 6',
			'Attribute name 7',
			'Attribute name 8',
			'Attribute name 9',
			'Attribute name 10'
		],
		
		jqueryLibUrl: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
	}


	// load jquery
	function loadJQuery() {
		// bail if jQuery already exists
		if (typeof jQuery != 'undefined') return false;
		
		var jq = document.createElement('script');
		jq.src = config.jqueryLibUrl;
		document.getElementsByTagName('head')[0].appendChild(jq);
	}


	// add attributes
	function updateAttr() {
		var attributes = config.attributes;
		
		// add Attribute btn
		var $addCatLink = jQuery('#add_new_option_button');
		
		var $inputBox;
		
		// loop through all attributes and add them - assuming you don't have some values in this already
		for (var i = 0; i < attributes.length; i++) {
			$inputBox = jQuery('[name="option[value][option_' + (i) + '][0]"]');
			$inputBox.val(attributes[i]);
			
			// output
			console.log('Added: ' + attributes[i]);

			$addCatLink.click();
		}
	}
	
	function init () {
		loadJQuery();		
		
		// give jquery sometime to load from the server
		setTimeout(function() {
			// avoid jQuery confilct
			jQuery.noConflict();			
			updateAttr();
		},3000);
	}
	
	init();
})();
