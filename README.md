# Sharerbox

Free minimalist and lightweight JavaScript-based social-media sharer for websites.

<p align="center"><img height="250" src="https://pbs.twimg.com/media/EZpSKM3XgAEjWtD.jpg"></p>

## Description

Version: 0.0.6

Sharerbox is a minimalistic and lightweight social-media sharebar developed to provide fast and easy-to-use social-media integration for websites without negatively affecting websites loading speed by calling for heavy or bulky external APIs

Sharerbox use is intended for both experienced and unexperienced users

### Support

Sharerbox 0.0.6 includes support for Facebook, Twitter, Whatsapp, Reddit, LinkedIn and Pinterest

## Options:

Sharerbox 0.0.6 supports four customization options:

### Icons

* **List:** a list with social-network names separated by spaces or commas: `'site1, site2, site3'`

### Behavior Settings

* **Behavior:** `'pop-up'` _(default)_ or `'new tab'` sets how the sharer menus will be deployed
* **Position:** `'left'` or `'right'` _(default)_ sets the position of the sharebar in the screen
* **Color:** `'color name'` _(Black by default)._ selects a color for the toggle button
* **Visibility:** `'visible'`, `'yes'` or `true` enables the icon bar default visibility _(hidden by default)_
* **Description:** `'quoted text'` creates a predefined message or website description for social-networks

## Customization

### Setting Icons

You can specify which social-network icons will be displayed by Sharerbox by going to the `sharerboxIcons()` function inside the `<body>` tag code snippet and typing a list of supported social-network items separated by spaces or commas, the full list must be wrapped around quotation marks.

Example:
```javascript
sharerboxIcons('site1, site2, site3, site...');
```

if this function is leaved blank sharerbox will display the default buttons

### Setting Behavior

To customize Sharerbox overall behavior enter these options into the `sharerSetup()` function located inside the code snippet pasted on your page's `<body>` tag, each argument must be written as a quoted word (_'word'_), each word separated from each other by commas.

Example:
```javascript
sharerSetup('tab', 'right', 'black', 'visible');
```

if these options are leaved blank sharerbox will display it's default behavior.

Example:
```html
<script>
	window.onload = function(){

		// Buttons list: 'site1, site2, site3'
		sharerboxIcons('facebook, twitter, whatsapp, reddit');

		// Setup arguments: Behavior, Position, Color, Visibility, Description
		sharerSetup('pop-up', 'left', 'black', true, 'custom message or description goes here (optional)');
	};
</script>
```

## Installation:

1. Download and store Sharerbox's **JavaScript File** on your server.

2. Asynchronously load the script inside your webpage's **HTML** `<head>` tag using the `async` attribute.

	Example:
	```html
	<script type="application/javascript" src="path/to/sharerbox.js" async></script>
	```

3. Copy this code snippet anywhere inside or after your **HTML** page's `<body>` tag.

	Example:
```html
<script>
	window.onload = function(){
		sharerboxIcons( /* list your preferred social-networks here, else options are set to default */ );
		sharerSetup( /* Behavior options go here, else options are set to default */ );
	};
</script>
```
4. Save Changes

* All done, sharerbox is now enabled for your site.


|Author        |
|--------------|
|Juan Astudillo|
