# Magento: add multiple attribute values from browser console
This JS snippet allows you to enter a list of attributes from your browser console on the Magento admin. Magento doesn't allow you to enter multiple attributes in one go via upload or admin panel. 

## How to
- Use a modern browser (Chrome/Firefox/IE11)
- Login into your Magento admin panel
- Run this in: Catalog > Attributes > Manage Attributes > Manage Label/ Options > Brand
- Your url will look something like the following: https://example.com/index.php/[YOUR_ADMIN_URI]/catalog_product_attribute/edit/attribute_id/
  - *catalog_product_attribute* can differ depending what attribute you are editing.

- Once you are here hit F12/Right click and inspect element 
  - Go to the console tab 
- Replace the example attributes with your own list 
- Copy the contents of the JS file and paste it into the console 
- Hit enter!
- There will be a 3 second delay giving jQuery some time to load and you should see new attributes being created from your list instantly.
- Have a scroll and check all the entries are as you expect
- If you are not happy with the result just refresh your page and changes will not saved
- If you are happy with the new values created then just hit save/submit

## Note
The script assumes you don't have any attributes within your list so running it if this is not the case won't work - it will just create blank input fields.

Use with care! 

Good luck :)
