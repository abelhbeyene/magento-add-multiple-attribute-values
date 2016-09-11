# Magento: add multiple attribute values from browser console
This JS snippet allows you to enter a list of attributes from your browser console on the Magento admin. I created this script when working with Magento and I had to create a substantial amount of product attribute values. I didn't really want to tinker with Magentos DB (with 250 tables) so decided to do this using JS from the console.

## How to
- Use a modern browser (Chrome/Firefox/IE11)
- Login into your Magento admin panel
- Navigate to: Catalog > Attributes > Manage Attributes > Manage Label/ Options > Brand
- Your url will look something like the following: https://example.com/index.php/[YOUR_ADMIN_URI]/catalog_product_attribute/edit/attribute_id/
  - *catalog_product_attribute* can differ depending what attribute you are editing.

- Once you are here hit F12/Right click and inspect element 
  - Go to the console tab 
- Replace the example attributes with your own list 
- Copy the contents of the JS file and paste it into the console 
- Hit enter!
- There will be a 3 second delay giving jQuery some time to load and you should see new attributes being created from your list instantly
- Have a scroll and check all the entries are as you expect
- If you are happy with the new values that you see listed then hit save/submit
- If you are not happy with the list refresh your page and changes will not saved

## Note
The script assumes you don't have any attributes within your list so running it if this is not the case won't work - it will just create blank input fields.

Use with care! 

Good luck :)
