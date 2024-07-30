# Sharerbox

Free minimalist and lightweight JavaScript-based social-media sharer for websites.
<p align="center"><b>Version:</b> <span id="sharerbox-semantic-version-number">0.11.0</span></p>
<p align="center"><a href="https://astudillojuanf.github.io/sharerbox/" target="_blank"><img height="250" src="https://astudillojuanf.github.io/sharerbox/images/cover/sharerbox.svg"></a></p>
<p align="center"><a href="https://astudillojuanf.github.io/sharerbox/" target="_blank">- Sneak Preview -</a></p>

## Description

 SharerBox is a free, minimalistic and lightweight JavaScript-Based social-media sharebar feature developed to provide fast, easy out-of-the-box social-media sharing integration to websites while eliminating the need for loading heavy or bulky third-party social sharing APIs, which affect user privacy, user experience, bandwith and loading speeds.

  Integrating SharerBox directly on your website for social-media sharing instead of external APIs will help you reduce loading speeds for visitors connected from slow networks, which will improve SEO scores and enhanced user experience, as well as device portability, specially for visitors connected from old computers or low-end devices. Plus, since there is no need for integrating obscure third-party code there is also no unauthorized data collection from private user information used by SharerBox.

  SharerBox is a personal project I work on during my free time, but i've created it with the intention of making it very easy to use for unexperienced enthusiasts and even easier to use and customize for web developers.

<h3 align="center"><b>Support:</b></h3>

<p align="center">
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/facebook-logo.svg" title="Facebbok" />
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/whatsapp-icon-soft-square.svg" title="WhatsApp" />
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/linkedin-logo.svg" title="LinkedIn" />
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/twitter-x-icon-soft-square.svg" title="X (Twitter)" />
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/reddit-icon-soft-square.svg" title="Reddit" />
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/pinterest-icon-soft-square.svg" title="Pinterest" />
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/tumblr-icon-soft-square.svg" title="Tumblr" />
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/telegram-icon-soft-square.svg" title="Telegram" />
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/trello-logo.svg" title="Trello" />
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/mastodon-icon-soft-square.svg" title="Mastodon" />
	<img width="50px" height="50px" src="https://astudillojuanf.github.io/sharerbox/icons/lemmy-icon-soft-square.svg" title="Lemmy" />
</p>

## Installation:

1. Download and store Sharerbox's **JavaScript File** on your server.

2. Load the script asynchronously inside your webpage's **HTML** `<head>` tag using the `async` attribute.

	Example:
	```html
	<script type="application/javascript" src="path/to/sharerbox.js" async></script>
	```

3. Copy this code snippet anywhere inside or after your **HTML** page's `<body>` tag.<br><br>Or alternatively, use your own logic to execute the code.

	Example:
```html
<script>
	window.addEventListener('load', function() {
		sharerbox( /* list your preferred social-networks and other options here, if blank options will be set to default */ );
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
	propertyC: true,
	propertyD: {
		argument: 'lorem ipsum'
	}
});
```

### Icon Options

* **Social-Networks:** A list of supported social-network names passed as a string (separated by spaces or commas) or as an array.

* **fediverseInstances:** [Not required] You can use this option to change which instances will be used on supported social networks that are part of the Fediverse. It accepts an object, argument must be named after a supported Fediverse social network (camel case), the value must be a single string with the domain name of your instance of choice.

* **iconSize:** Sets the size of the icons in pixels. This option accepts numeric values (default size: 45 pixels, accepted size ranges: 25 to 100 pixels).

Example:
```javascript
sharerbox({
	// Icon list: 'site1, site2, site3...'
	socialNetworks: 'facebook twitter whatsapp linkedin reddit mastodon lemmy',
	// fediverse Instances: { platform1: 'domain1.test', platform2: 'domain2.test', /* ... */ }
	fediverseInstances: {
		mastodon: 'mastodon.social',
		lemmy: 'lemmy.ml'
	},
	// Icon size: number
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

## Example

Full Example:
```html
<script>
	window.addEventListener('load', function(){

		sharerbox({
			// Icon list: 'site1, site2, site3...'
			socialNetworks: 'facebook twitter whatsapp linkedin reddit mastodon lemmy',
			// fediverse Instances: { platform1: 'domain1.test', platform2: 'domain2.test', /* ... */ }
			fediverseInstances: {
				mastodon: 'mastodon.social',
				lemmy: 'lemmy.ml'
			},
			// Icon size: number
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
_(Note: if no arguments are passed to the function SharerBox behavior will be set to default)_.

<h2 align="center">Author</h2>

<p align="center">Juan Astudillo</p>

<p align="center">
	<a rel="me" href="https://www.fiverr.com/astudillo_juan" target="_blank">Fiverr</a> | <a rel="me" href="https://www.linkedin.com/in/astudillojuanf/"  target="_blank">LinkedIn</a> | <a rel="me" href="mailto:astudillojuanfrancisco@gmail.com">Email</a>
</p>