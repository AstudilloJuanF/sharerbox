# Sharebox

A Free minimalist and lightweight JavaScript-based social-media sharer for websites.

## Installation:

1. Download and store Sharebox's **JavaScript file** on your server\
2. Asynchronously load the script inside your desired webpage's **HTML** ```<head>``` tag\

	Example:\
	```html
	<script type="application/javascript" src="path/to/sharebox.js" async></script>
	```

3. Copy this snippet of code anywhere inside ~~or after~~ your **HTML** page's ```<body>``` tag\

	Example:\
	```html
	<script>
		window.onload = function(){
			sharebox( // customization options go here, if leaved blank options are set to default);
		};
	</script>
	```

* All done, sharebox is now enabled on your site\

## Options:

Sharebox supports three ways of customization:

* **Position:** _left_ or _right (default)_
* **Color:** _color name (Black by default)_
* **Visibility:** (hidden by default) ```true```, ```'yes'```, or ```'visible'``` to enable;
* **message:** Sharebox lets you choose a short text description of your site for social-media. _This option goes blank by default_

### Customizing options

To customize sharebox options you only need to pass them into ```sharebox()``` function as strings separated by commas\

	Example:\
	```html
	<script>
		window.onload = function(){


			// Arguments order: Position, Color, Visibility, Custom Message
			sharebox( 'left', 'black', true, 'custom message or description goes here (optional)' );


		};
	</script>
	```

Author        |
--------------|
Juan Astudillo|
