# Sharerbox

Free minimalist and lightweight JavaScript-based social-media sharer for websites.

<p align="center"><img height="250" src="https://pbs.twimg.com/media/EZpSKM3XgAEjWtD.jpg"></p>

## Description

Sharerbox is a minimalistic social-media sharebar developed to provide simple social-media integration for websites without negatively affecting sites loading speeds calling for heavy or bulky external API requests

Version: 0.0.5

### Support

Sharerbox supports Facebook, Twitter, Whatsapp, Reddit and LinkedIn by default

## Installation:

1. Download and store Sharerbox's **JavaScript File** on your server.
2. Asynchronously load the script inside your desired webpage's **HTML** `<head>` tag using the `async` attribute.

	Example:
	```html
	<script type="application/javascript" src="path/to/sharerbox.js" async></script>
	```

3. Copy this code snippet anywhere inside or after your **HTML** page's `<body>` tag.

	Example:
	```html
	<script>
		window.onload = function(){
			sharerboxButtons( /* list your preferred social-networks here, else options are set to default */ );
			sharerSetup( /* Behavior options go here, else options are set to default */ );
		};
	</script>
	```
4. Save Changes
* All done, sharerbox is now enabled for your site.

## Options:

Sharerbox 0.0.5 supports four customization options:

### Buttons

* **buttons:** a quoted list of social-networks separated commas: `'site1, site2, site3'`

### Behavior Settings

* **Behavior:** `'pop-up'` _(default)_ or `'new tab'`
* **Position:** `'left'` or `'right'` _(default)_
* **Color:** `'color name'` _(Black by default)._ selects a color for the main button
* **Visibility:** `'visible'`, `'yes'` or `true` enables the icon bar default visibility _(hidden by default)_
* **Description:** `'quoted text'` lets you create a predefined message or website description for social-networks

## Customization

### Customizing Buttons

To customize social-network buttons all you need is to enter a quoted text string with a list of supported social network names into the `sharerboxButtons()` function inside the `<body>` tag code snippet.

Example:
```javascript
sharerboxButtons('site1, site2, site3');
```

if these options are leaved blank sharerbox will display the default buttons.

### Customizing Behavior

To customize Sharerbox behaviour all you need to do is to enter these options into the `sharerSetup()` function inside the `<body>` tag code snippet, each argument written as a quoted word (_'quoted'_), separated from each other by commas.

Example:
```javascript
sharerSetup('tab', 'right', 'black', 'visible');
```

if these options are leaved blank sharerbox will execute with it's default behavior.

Example:
```html
<script>
	window.onload = function(){

		// Buttons list = 'site1, site2, site3'
		sharerboxButtons('facebook, twitter, whatsapp, reddit');

		// Setup arguments = Behavior, Position, Color, Visibility, Description
		sharerSetup('pop-up', 'left', 'black', true, 'custom message or description goes here (optional)');
	};
</script>
```


|Author        |
|--------------|
|Juan Astudillo|
