# Sharerbox

Free minimalist and lightweight JavaScript-based social-media sharer for websites.

## Installation:

**1.** Download and store Sharerbox's **JavaScript File** on your server.
**2.** Asynchronously load the script inside your desired webpage's **HTML** `<head>` tag using the `async` attribute.

Example:
```html
<script type="application/javascript" src="path/to/sharerbox.js" async></script>
```

**3.** Copy this code snippet anywhere inside ~~or after~~ your **HTML** page's ```<body>``` tag.

Example:
```html
<script>
	window.onload = function(){
		sharerbox( // customization options go here, if empty options are set to default);
	};
</script>
```
**4.** Save Changes
* All done, sharerbox is now enabled for your site.

## Options:

Sharerbox 0.0.1 supports four customization options:

* **Position:** `'left'` or `'right'` _(default)_
* **Color:** `'color name'` _(Black by default)_
* **Visibility:** `'visible'`, `'yes'` or `true` to enable default visibility _(hidden by default)_
* **Description:** Sharerbox lets you choose an optional message or site description for social-media

### Customizing options

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
