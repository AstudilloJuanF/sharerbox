# Sharerbox

Free minimalist and lightweight JavaScript-based social-media sharer for websites.

<p align="center"><img height="250" src="https://pbs.twimg.com/media/EZ5srCAWoAUOwnR.jpg"></p>

## Description

Sharerbox is a minimalistic social-media sharebar developed to provide simple social-media integration for websites without negatively affecting sites loading speeds calling for heavy or bulky external API requests

### Support

Sharerbox supports Facebook, Twitter, Whatsapp, Reddit and LinkedIn by default

## Installation:

1. Download and store Sharerbox's **JavaScript File** on your server.
2. Asynchronously load the script inside your desired webpage's **HTML** `<head>` tag using the `async` attribute.

	Example:
	```html
	<script type="application/javascript" src="path/to/sharerbox.js" async></script>
	```

3. Copy this code snippet anywhere inside or after your **HTML** page's ```<body>``` tag.

	Example:
	```html
	<script>
		window.onload = function(){
			sharerbox( // customization options go here, if empty options are set to default);
		};
	</script>
	```
4. Save Changes
* All done, sharerbox is now enabled for your site.

## Options:

Sharerbox 0.0.1 supports four customization options:

* **Position:** `'left'` or `'right'` _(default)_
* **Color:** `'color name'` _(Black by default)_
* **Visibility:** `'visible'`, `'yes'` or `true` to enable default visibility _(hidden by default)_
* **Description:** Sharerbox lets you choose an optional message or site description for social-media

### Customization

To customize Sharerbox you only need to pass these options into `sharerbox()` function as strings separated by commas

Example:
```html
<script>
	window.onload = function(){
			// Arguments order: Position, Color, Visibility, Custom Message
		sharerbox('left', 'black', true, 'custom message or description goes here (optional)');
	};
</script>
```


|Author        |
|--------------|
|Juan Astudillo|
