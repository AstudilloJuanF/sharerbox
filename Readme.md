# Sharebox

A Free minimalist and lightweight JavaScript-based social-media sharer for websites.

## Installation:

1. Download and store Sharebox's **JavaScript file** on your server\
2. Asynchronously load the script inside your desired webpage's **HTML** ```<head>``` tag using the ```async``` attribute\

	Example:\
	```html
	<script type="application/javascript" src="path/to/sharebox.js" async></script>
	```

3. Copy this code snippet anywhere inside ~~or after~~ your **HTML** page's ```<body>``` tag\

	Example:\
	```html
	<script>
		window.onload = function(){
			sharebox( // customization options go here, if leaved blank options are set to default);
		};
	</script>
	```
4. Save Changes\
* All done, sharebox is now enabled for your site\

## Options:

Sharebox supports three ways of customization:

* **Position:** ```left``` or ```right``` _(default)_
* **Color:** color name _(Black by default)_
* **Visibility:** _(hidden by default)_ ```'visible'```, ```'yes'``` or ```true``` to enable default visibility;
* **Description:** Sharebox lets you choose an optional text description of your site for social-media

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
