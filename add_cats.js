/*
* Add multiple categories from Magento admin dashboard using js from the browser console
*/

function updateCats() {
	// list of category names (replace with ones you want to add)
	var cats = [
		'Category name 1',
		'Category name 2',
		'Category name 3',
		'Category name 4',
		'Category name 5',
		'Category name 6',
		'Category name 7',
		'Category name 8',
		'Category name 9',
		'Category name 10',
		'Category name 11',
		'Category name 12',
		'Category name 13',
		'Category name 14',
		'Category name 15',
		'Category name 16',
		'Category name 17',
		'Category name 18',
		'Category name 19',
		'Category name 20',
	];
	
	// add category btn
	var $addCatLink = jQuery('#add_new_option_button');
	
	var $inputBox;
	
	// loop through all categories and add them
	for (var i = 0; i <= cats.length; i++) {
		$inputBox = jQuery('[name="option[value][option_' + (i) + '][0]"]');
		$inputBox.val(cats[i]);

		$addCatLink.click();
	}
}


updateCats();