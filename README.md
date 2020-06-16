# Sharerbox

Free minimalist and lightweight JavaScript-based social-media sharer for websites.

<p align="center"><a href="https://astudillojuanf.github.io/sharerbox/" target="_blank"><img height="250" src="https://astudillojuanf.github.io/sharerbox/images/cover/sharerbox.svg"></a></p>
<p align="center"><b><i>Version:</b> 0.0.7b</i></p>

## Description

 SharerBox is a free, minimalistic and lightweight JavaScript-Based social-media sharebar feature developed to provide fast and easy-to-use social-media sharing integration for small websites by eliminating the need for loading heavy or bulky third-party social APIs, which usually have a negative impact on loading speeds and unauthorizedly recolect private user information.

  Integrating SharerBox directly on your website for social-media sharing instead of external APIs should significantly reduce loading speeds for visitors connected from slow networks, which will result on improved SEO indexation and enhanced user experience and device portability, specially for visitors connected from old computers or low-end devices. Plus, since there is no need for integrating obscure third-party code there is also no unauthorized recolection of private user information derived from using SharerBox.

  SharerBox is currently a personal project, but it's integration process is intended to be easy for unexperienced users as well as very easy to customize for developers

<h3 align="center"><b>Support:</b></h3>

<p align="center">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/facebook-logo.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/twitter-icon-soft-square.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/whatsapp-icon-soft-square.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/linkedin-logo.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/reddit-icon-soft-square.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/pinterest-icon-soft-square.svg">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/tumblr-icon-soft-square.svg">
</p>

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

## Options:

Sharerbox 0.0.7b supports four customization options:

### Icons

* **Social-Networks:** `'site1, site2, site3'` A string list of social-network names separated by spaces of commas.

### Setting Icons

You can specify which social-network icons will be displayed by going to the `sharerboxIcons()` function inside the code snippet pasted within  your `<body>` tag and typing a string list of supported social-network items separated by spaces or commas, the full list must be wrapped around quotation marks.

Example:
```javascript
sharerboxIcons('site1, site2, site3, site...');
```
OR

Example:
```javascript
sharerboxIcons('site1 site2 site3 site...');
```

_(if this function is leaved blank sharerbox will display it's default buttons)_.

### Behavior Settings

* **Behavior:** `'pop-up'` _(default)_ or `'new tab'`; Sets how the sharer menus will be deployed.
* **Position:** `'left'` or `'right'` _(default)_; Sets the position of the sharebar in the screen.
* **Color:** `'color name'` _(Black by default)._; Selects a color for the toggle button.
* **Visibility:** `'visible'`, `'yes'` or `true`; Enables the icon bar default visibility _(`hidden` by default)_.
* **Description:** `'quoted text'`; Creates a predefined message or website description for social-networks.

### Setting Behavior

To customize Sharerbox overall behavior enter these options into the `sharerSetup()` function located inside the code snippet pasted on your page's `<body>` tag, each argument must be written as a quoted word (_'word'_), each quoted word separated from each other by commas.

Example:
```javascript
sharerSetup('tab', 'right', 'black', 'visible');
```

_(if these options are leaved blank sharerbox will display it's default behavior)_.

## Example

Full Example:
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


<h2 align="center">Author</h2>

<p align="center">Juan Astudillo</p>

<p align="center">
	<a href="https://www.fiverr.com/astudillo_juan">Fiverr</a> | <a href="https://www.linkedin.com/in/juan-astudillo/">LinkedIn</a>
</p>
