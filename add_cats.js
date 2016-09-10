
/*
* Add multiple Brand attributes from Magento admin dashboard using js on browser console
* 
* Run this in Catalog > Attributes > Manage Attributes > Manage Label/ Options > Brand
*/

(function() {

	var config = {
		// Change this to reflect the list of your categories 
		//list of category names (replace with ones you want to add)
		categories: [
			'Category name 1',
			'Category name 2',
			'Category name 3',
			'Category name 4',
			'Category name 5',
			'Category name 6',
			'Category name 7',
			'Category name 8',
			'Category name 9',
			'Category name 10'
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


	// add categories
	function updateCats() {
		var cats = config.categories;
		
		// add category btn
		var $addCatLink = jQuery('#add_new_option_button');
		
		var $inputBox;
		
		// loop through all categories and add them - assuming you don't have some values in this already
		for (var i = 0; i <= cats.length; i++) {
			$inputBox = jQuery('[name="option[value][option_' + (i) + '][0]"]');
			$inputBox.val(cats[i]);

			$addCatLink.click();
		}
	}
	
	
	function init () {
		loadJQuery();		
		
		// give jquery sometime to load from the server
		setTimeout(function() {
			// avoid jQuery confilct
			jQuery.noConflict();			
			updateCats();
		},3000);
	}
	
	init();
})();
