# Magento add multiple attributes from browser console
This JS snippet allows you to enter a list of Brands (or any attributes) from your browser console on the Magento admin. 
I created this script when working with Magento and I had to create a substantial amount of product brands. I didn't really want to tinker with Magentos DB (with 250 tables) so decided to do this using JS from the console.

## About the script
The script assumes you don't have any attributes within your list already.

### How to run it
Use a modern browser (Chrome/Firefox/IE11)
Login into your Magento admin panel
Run this in: Catalog > Attributes > Manage Attributes > Manage Label/ Options > Brand
Your url will look something like the following:
example.com/index.php/[YOUR_ADMIN_URI]/catalog_product_attribute/edit/attribute_id/

*catalog_product_attribute* can differ depending what attribute you are editing.

Once you are here hit F12/Right click and inspect element > go to the console tab > Replace the example attributes with your own list > copy the contents of the JS file > paste it into the console > hit enter!

There will be a 3 second delay giving jQuery some time to load and you should see new attributes being created from your list instantly.

Good luck :)
