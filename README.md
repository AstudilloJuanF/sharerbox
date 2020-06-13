# Sharerbox

Free minimalist and lightweight JavaScript-based social-media sharer for websites.

<p align="center"><img height="250" src="https://astudillojuanf.github.io/sharerbox/images/cover/sharerbox.svg"></p>

## Description

_**Version:** 0.0.7b_

Sharerbox is a minimalistic and lightweight social-media sharebar developed to provide fast and easy-to-use social-media integration for websites without negatively affecting websites loading speed by calling for heavy or bulky external APIs

Sharerbox use is intended for both experienced and unexperienced users

### Support

Sharerbox 0.0.7b includes support for Facebook, Twitter, Whatsapp, Reddit, LinkedIn and Pinterest

## Options:

Sharerbox 0.0.7b supports four customization options:

### Icons

* **Social-Networks:** `'site1, site2, site3'` A string list of social-network names separated by spaces of commas.

### Behavior Settings

* **Behavior:** `'pop-up'` _(default)_ or `'new tab'`; Sets how the sharer menus will be deployed.
* **Position:** `'left'` or `'right'` _(default)_; Sets the position of the sharebar in the screen.
* **Color:** `'color name'` _(Black by default)._; Selects a color for the toggle button.
* **Visibility:** `'visible'`, `'yes'` or `true`; Enables the icon bar default visibility _(hidden by default)_.
* **Description:** `'quoted text'`; Creates a predefined message or website description for social-networks.

## Customization

### Setting Icons

You can specify which social-network icons will be displayed by going to the `sharerboxIcons()` function inside the code snippet pasted within  your `<body>` tag and typing a string list of supported social-network items separated by spaces or commas, the full list must be wrapped around quotation marks.

Example:
```javascript
sharerboxIcons('site1, site2, site3, site...');
```

_(if this function is leaved blank sharerbox will display it's default buttons)_.

### Setting Behavior

To customize Sharerbox overall behavior enter these options into the `sharerSetup()` function located inside the code snippet pasted on your page's `<body>` tag, each argument must be written as a quoted word (_'word'_), each quoted word separated from each other by commas.

Example:
```javascript
sharerSetup('tab', 'right', 'black', 'visible');
```

_(if these options are leaved blank sharerbox will display it's default behavior)_.

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
4. Save Changes and reload your site.

* All done, sharerbox will be now enabled on your site.


|Author        |
|--------------|
|Juan Astudillo|
