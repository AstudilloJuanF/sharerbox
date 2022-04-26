# Sharerbox

Free minimalist and lightweight JavaScript-based social-media sharer for websites.

<p align="center"><a href="https://astudillojuanf.github.io/sharerbox/" target="_blank"><img height="250" src="https://astudillojuanf.github.io/sharerbox/images/cover/sharerbox.svg"></a></p>
<p align="center"><i><b>Version:</b> <span id="sharerbox-semantic-version-number">0.9.0</span></i></p>

## Description

 SharerBox is a free, minimalistic and lightweight JavaScript-Based social-media sharebar feature developed to provide fast and easy out-of-the-box social-media sharing integration for small websites by eliminating the need for loading heavy or bulky third-party social APIs, which usually have a negative impact on loading speeds and unauthorizedly recolect private user information.

  Integrating SharerBox directly on your website for social-media sharing instead of external APIs should significantly reduce loading speeds for visitors connected from slow networks, which will result on improved SEO indexation and enhanced user experience and device portability, specially for visitors connected from old computers or low-end devices. Plus, since there is no need for integrating obscure third-party code there is also no unauthorized recolection of private user information derived from using SharerBox.

  SharerBox is currently a personal project, but it's integration process is intended to be easy for unexperienced users as well as very easy to customize for developers

<h3 align="center"><b>Support:</b></h3>

<p align="center">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/facebook-logo.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/whatsapp-icon-soft-square.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/twitter-icon-soft-square.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/linkedin-logo.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/reddit-icon-soft-square.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/pinterest-icon-soft-square.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/tumblr-icon-soft-square.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/telegram-icon-soft-square.svg">
</p>

## Installation:

1. Download and store Sharerbox's **JavaScript File** on your server.

2. Asynchronously load the script inside your webpage's **HTML** `<head>` tag using the `async` attribute.

	Example:
	```html
	<script type="application/javascript" src="path/to/sharerbox.js" async></script>
	```

3. Copy this code snippet anywhere inside or after your **HTML** page's `<body>` tag.<br><br>Or alternatively, use your own logic to execute the code.

	Example:
```html
<script>
	window.addEventListener('load', function() {
		sharerbox(/* list your preferred social-networks and other options here, if blank options will be set to default */ );
	});
</script>
```
4. Save Changes and reload your site.

* All done, sharerbox will be now enabled on your website.

## Options:

### Setting options

You can customize Sharerbox by passing options as object properties to the `sharerbox()` function inside your code snippet.

*(if no arguments are passed to the function SharerBox behavior will be set to default)*

Example:
 ```javascript
 sharerbox({
	propertyA: 'string',
	propertyB: 50,
	propertyC: true
});
```

### Icon Options

* **Social-Networks:** A list of supported social-network names passed as a string (separated by spaces or commas) or as an array.

* **iconSize:** Sets the size of the icons in pixels. It accepts numeric values (default size: 45 pixels, accepted size ranges: 25 to 100 pixels).

Example:
```javascript
sharerbox({
	// Icon list: 'site1, site2, site3...'
	// Icon size: number
	socialNetworks: 'site1, site2, site3, site...'),
	iconSize: 45
});
```

### Other Options

* **Behavior:** `'pop-up'` _(default)_ or `'new tab'`; Sets how the sharer menus will be deployed.
* **Position:** `'left'` or `'right'` _(default)_; Sets the position of the sharebar on the screen.
* **Color:** `'color name'` _(Black by default)._; Selects a color for the toggle button.
* **Visibility:** `'visible'`, `'yes'` or `true`; Changes the icon bar default visibility _(`hidden` by default)_.
* **Description:** `'quoted text'`; Sets a predefined message or description of your website for people to share on social-networks.

Example:
```javascript
sharerbox({
	// Setup arguments: Behavior, Position, Color, Visibility, Message
	behavior: 'popup',
	position: 'right',
	color: 'black',
	visibility: true,
	message: 'Write a custom message/description here (optional)'
});
```

### Setting Behavior

To customize Sharerbox overall behavior enter these options into the `sharerSetup()` function located inside the code snippet pasted on your page's `<body>` tag, each argument must be written as a quoted word (_'word'_), each quoted word separated from each other by commas.

Example:
```javascript
sharerSetup('tab', 'right', 'black', 'visible', 'Custom description');
```

_(if these options are leaved blank SharerBox will run with it's default behavior)_.

## Example

Full Example:
```html
<script>
	window.addEventListener('load', function(){

		sharerbox({
			// Icon list: 'site1, site2, site3...'
			// Icon size: number
			socialNetworks: 'facebook twitter whatsapp linkedin reddit',
			iconSize: 45,
			// Setup arguments: Behavior, Position, Color, Visibility, Message
			behavior: 'popup',
			position: 'right',
			color: 'black',
			visibility: true,
			message: 'Write a custom message/description here (optional)'
		});
	});
</script>
```


<h2 align="center">Author</h2>

<p align="center">Juan Astudillo</p>

<p align="center">
	<a href="https://www.fiverr.com/astudillo_juan" target="_blank">Fiverr</a> | <a href="https://www.linkedin.com/in/juan-astudillo/"  target="_blank">LinkedIn</a> | <a href="mailto:astudillojuanfrancisco@gmail.com">Email</a>
</p>
