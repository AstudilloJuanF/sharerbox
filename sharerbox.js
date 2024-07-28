/*
					    				Sharerbox

			    		Version: 0.11.0; Author: Juan Astudillo

	* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	*																				*
	* 		+---------------------------------------------------------------+		*
	*		|		  		  Copyright © 2020 Juan Astudillo				|		*
	*		|																|		*
	*		|				<astudillojuanfrancisco@gmail.com>				|		*
	*		+---------------------------------------------------------------+		*
	*																				*
	* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


*/



					  /* Script */


// Inserting HTML markup and CSS Styles into the document

let sharerboxIconSize;

function sharerbox(options) {

	// Utilities 

	function capitalize(string) {

		typeof string !== 'string' ? string = string.toString() : null;
		string = string.slice(0,1).toUpperCase() + string.slice(1, string.length);
		
		return string;
	}

	function getType(variable) {

		return typeof variable;
	}

	function hasType(type, variable) {

		if (typeof variable === type.toLowerCase()) {
			return true;
		} else {supportedSocialNetworks = supportedSocialNetworks.join(', ');
			defaultSocialNetworks = defaultSocialNetworks.join(', ');
			return false;
		}
	}

	function warnWrongType(variable, expectedType) {
		throw new TypeError(`Property ${Object.keys(variable)} must be of type ${expectedType}.`);
	}

	
	// Supported & default social networks
	let supportedSocialNetworks = [
		'x',
		'facebook',
		'whatsapp',
		'linkedin',
		'reddit',
		'tumblr',
		'pinterest',
		'telegram',
		'trello',
		'mastodon',
		'lemmy'
	]
	.join(', ');

	let defaultSocialNetworks = [
		'x',
		'facebook',
		'whatsapp',
		'reddit'
	]
	.join(', ');

	// Default options
	let socialNetworksList = defaultSocialNetworks;
    let iconSize = 45;
    let behavior = 'popup';
    let position = 'right';
    let color = 'black';
    let visibility = 'hidden';
    let message = '';

	let defaultFediverseInstances = {
		mastodon: 'mastodon.social',
		lemmy: 'lemmy.ml'
	};

	let fediverseInstances = defaultFediverseInstances;

	if (options) {

		let argumentType = typeof options;

    	if (typeof options !== 'object' || Array.isArray(options)) {
			Array.isArray(options) ? argumentType = 'array' : null;
			throw new TypeError(`List of options must be of type object, ${argumentType} given.`);
		}

		if (options.socialNetworks) {

			if (options.socialNetworks === '') {
				socialNetworksList = 'none';
			} else {
				socialNetworksList = options.socialNetworks;

				// Update Twitter label to new brand name (X)
				socialNetworksList = options.socialNetworks.replaceAll(/(x)?(\/)?twitter(\/)?(x)?/ig, 'x');
			}
		}

		if (socialNetworksList.toLowerCase() === 'all') {
			socialNetworksList = supportedSocialNetworks;
		}

		if (options.fediverseInstances) {

			let fedInst = options.fediverseInstances;
			
			URL.canParse(`https://${fedInst.mastodon}`) ? fediverseInstances.mastodon = fedInst.mastodon : null;
			URL.canParse(`https://${fedInst.lemmy}`) ? fediverseInstances.lemmy = fedInst.lemmy : null;
		}

		options.iconSize ? iconSize = options.iconSize : null;
		options.visibility ? visibility = options.visibility : null;

		options.behavior ? behavior = options.behavior : null;
		!hasType('string', behavior) ? warnWrongType({behavior}, 'string') : null;

		options.position ? position = options.position : null;
		!hasType('string', position) ? warnWrongType({position}, 'string') : null;

		options.color ? color = options.color : null;
		!hasType('string', color) ? warnWrongType({color}, 'string') : null;

		options.message ? message = options.message : null;
		!hasType('string', message) ? warnWrongType({message}, 'string') : null;
	}


	// Setting sharerbox icons size in pixels;
	
    var maxSize = 100, minSize = 25, defaultSize = 45;
	let maxMin = ['maximum', 'minimum'];

	if (typeof iconSize === 'number') {
		sharerboxIconSize = Math.round(iconSize);
	} else if (typeof iconSize === 'string' && iconSize.match(/[\d]+/ig)) {
		sharerboxIconSize = Number(iconSize.replaceAll(/[^\d]+/ig, ''));
	} else {
		sharerboxIconSize = defaultSize;
		console.warn(`Value of property ${Object.keys({iconSize})[0]} is not a number, icon size set to default (${sharerboxIconSize}px).\n\nAccepted Sharerbox icon size ranges are ${minSize}px-${maxSize}px`);
	}

	if (typeof sharerboxIconSize === 'number' && (sharerboxIconSize < minSize || sharerboxIconSize > maxSize)) {
		sharerboxIconSize < minSize ? (sharerboxIconSize = minSize, maxMin = maxMin[1]) : undefined;
		sharerboxIconSize > maxSize ? (sharerboxIconSize = maxSize, maxMin = maxMin[0]) : undefined;

		console.warn(` ${capitalize(maxMin)} accepted size value for iconSize is ${sharerboxIconSize}px, icon size set to ${maxMin}.\n\nAccepted Sharerbox icon size ranges are ${minSize}px-${maxSize}px`);
	}

	var sharerboxExtraIconSize = Math.floor(sharerboxIconSize * 88.889 / 100);


	// HTML element variables for social icons

	var facebookHTML = `<!--Facebook-->
	<object class="sharerbox-icon-fig" id="facebook-fig">
		<a class="sharerbox-socialmedia-link" id="facebook-link" target="_blank">
			<svg class="sharerbox-icon" id="facebook-icon" viewBox="0 0 72 72">
				<g transform="translate(-152,-43)">
					<g transform="translate(152,43)">
						<rect width="72" height="72" rx="0" ry="0" fill="#4267b2"/>
						<path d="m60.464 13.417v9.3105l-5.5259.01439c-4.3315 0-5.1661 2.0578-5.1661 5.0654v6.6627h10.318l-1.3383 10.419h-8.9795v27.111h-10.762v-27.111h-9.0097v-10.419h9.0097v-7.6844c0-8.922 5.4381-13.786 13.41-13.786 3.8005 0 7.08.2878 8.0441.41732z" fill="#fff"/>
					</g>
				</g>
			</svg>
		</a>
	</object>`;

	var twitterHTML = `<!--Twitter/X-->
	<object class="sharerbox-icon-fig" id="twitterX-fig">
		<a class="sharerbox-socialmedia-link" id="twitterX-link" target="_blank">
			<svg viewBox="0 0 24 24" class="sharerbox-icon" id="twitterX-icon" fill="white">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
			</svg>
		</a>
	</object>`;

	var whatsappHTML = `<!--Whatsapp-->
	<object class="sharerbox-icon-fig" id="whatsapp-fig">
		<a class="sharerbox-socialmedia-link" id="whatsapp-link" target="_blank">
			<svg class="sharerbox-icon" id="whatsapp-icon" width="1225px" height="1225px" viewBox="-2.73 0 1225 1225">
				<g transform="matrix(.95 0 0 .95 30.478 36.539)" stroke-width=".9">
					<path d="m477.02 375.62c-10.111-22.479-20.756-22.929-30.375-23.323-7.8678-.3375-16.875-.3168-25.868-.3168-9 0-23.625 3.3822-35.993 16.889-12.375 13.507-47.25 46.16-47.25 112.57 0 66.417 48.375 130.59 55.118 139.61 6.75 9 93.382 149.64 230.58 203.74 114.03 44.965 137.23 36.021 161.98 33.771s79.861-32.646 91.111-64.167c11.25-31.514 11.25-58.528 7.875-64.174-3.375-5.625-12.375-9-25.875-15.75s-79.861-39.41-92.236-43.91-21.375-6.75-30.375 6.7644c-9 13.5-34.854 43.896-42.729 52.896-7.875 9.0207-15.75 10.146-29.25 3.3957-13.5-6.7707-56.974-21.01-108.55-66.994-40.127-35.775-67.219-79.96-75.094-93.473-7.875-13.5-.8442-20.812 5.9274-27.542 6.0606-6.0471 13.5-15.757 20.25-23.639 6.7356-7.8822 8.9856-13.507 13.486-22.507 4.5-9.0144 2.25-16.896-1.125-23.646s-29.608-73.503-41.611-100.19z" fill="#fff"/>
					<path d="m994.19 219.73c-102-102.07-237.64-158.32-382.14-158.38-297.78 0-540.11 242.25-540.23 540.02-.0351 95.183 24.835 188.09 72.105 269.99l-76.64 279.84 286.38-75.094c78.905 43.031 167.74 65.707 258.15 65.742h.2325c297.73 0 540.1-242.3 540.23-540.05.049-144.31-56.095-280-158.08-382.08zm-382.14 830.92h-.1755c-80.585-.042-159.61-21.677-228.54-62.578l-16.404-9.7245-169.95 44.557 45.373-165.64-10.688-16.98c-44.95-71.473-68.681-154.07-68.646-238.88.0981-247.49 201.52-448.84 449.19-448.84 119.94.0495 232.66 46.8 317.45 131.64 84.776 84.839 131.43 197.62 131.39 317.57-.1062 247.5-201.53 448.87-449.01 448.87z" fill="#fff"/>
				</g>
			</svg>
		</a>
	</object>`;

	var redditHTML = `<!--Reddit-->
	<object class="sharerbox-icon-fig" id="reddit-fig">
		<a class="sharerbox-socialmedia-link" id="reddit-link" target="_blank">
			<svg class="sharerbox-icon" id="reddit-icon" viewBox="0 0 512 512">
				<rect width="512" height="512" rx="15%" fill="#f40"/>
				<g fill="#fff">
					<ellipse cx="256" cy="307" rx="166" ry="117"/>
					<circle cx="106" cy="256" r="42"/>
					<circle cx="407" cy="256" r="42"/>
					<circle cx="375" cy="114" r="32"/>
				</g>
				<g stroke-linecap="round" stroke-linejoin="round" fill="none">
					<path d="m256 196 23-101 73 15" stroke="#fff" stroke-width="16"/>
					<path d="m191 359c33 25 97 26 130 0" stroke="#f40" stroke-width="13"/>
				</g>
				<g fill="#f40">
					<circle cx="191" cy="287" r="31"/>
					<circle cx="321" cy="287" r="31"/>
				</g>
			</svg>
		</a>
	</object>`;

	var linkedinHTML = `<!--LinkedIn-->
	<object class="sharerbox-icon-fig" id="linkedin-fig">
		<a class="sharerbox-socialmedia-link" id="linkedin-link" target="_blank">
			<svg class="sharerbox-icon" id="linkedin-icon" enable-background="new 0 0 512 512" viewBox="0 0 512 512" >
				<rect width="512" height="512" fill="#0077b5"/>
				<g transform="matrix(.72 0 0 .72 71.68 71.68)" fill="#fff">
					<rect y="160" width="114.5" height="352"/>
					<path d="m426.37 164.13c-1.216-.384-2.368-.8-3.648-1.152-1.536-.352-3.072-.64-4.64-.896-6.08-1.216-12.736-2.08-20.544-2.08-66.752 0-109.09 48.544-123.04 67.296v-67.296h-114.5v352h114.5v-192s86.528-120.51 123.04-32v224h114.46v-237.54c0-53.184-36.448-97.504-85.632-110.34z"/>
					<circle cx="56" cy="53.222" r="64.372" stroke-width="1.1495"/>
				</g>
			</svg>
		</a>
	</object>`;

	var pinterestHTML = `<!--Pinterest-->
	<object class="sharerbox-icon-fig" id="pinterest-fig">
		<a class="sharerbox-socialmedia-link" id="pinterest-link" target="_blank">
			<svg class="sharerbox-icon" id="pinterest-icon" width="75" height="75" viewBox="0 0 75 75">
				<g transform="matrix(2.0833,0,0,2.0833,6e-4,6e-4)">
					<g transform="translate(-1330,-635)">
						<g transform="translate(0,593)">
							<g transform="translate(1175,41)">
								<g transform="translate(155,1)">
									<rect width="36" height="36" rx="4" fill="#cd1d20"/>
									<path d="m18.315 7.2941c2.3789 0 4.3392.74155 5.8811 2.2247s2.3128 3.2085 2.3128 5.1762c0 2.5844-.65344 4.7136-1.9604 6.3877-1.3069 1.674-2.9882 2.511-5.0441 2.511-.67548 0-1.3142-.15418-1.9163-.46256-.60206-.30837-1.0206-.6975-1.2555-1.1674-.49927 1.9971-.79295 3.1865-.88106 3.5683-.32306 1.1454-1.1013 2.5551-2.3348 4.2291-.05874.05874-.12482.08076-.19824.06608s-.11013-.05139-.11013-.11013c-.23495-2.2027-.22027-3.8473.04405-4.9339l1.674-7.0485c-.29369-.558-.44053-1.2482-.44053-2.0705 0-.9398.24229-1.7327.72687-2.3789s1.0793-.96916 1.7841-.96916c.55801 0 .98385.18355 1.2775.55066s.44053.82966.44053 1.3877c0 .35242-.05874.77826-.17621 1.2775-.11748.49927-.279 1.0793-.48458 1.7401s-.35242 1.1968-.44053 1.6079c-.17621.67548-.0514 1.2555.37445 1.7401.42585.48458.9765.72687 1.652.72687 1.2041 0 2.188-.66813 2.9515-2.0044.76359-1.3363 1.1454-2.9589 1.1454-4.8678 0-1.4684-.47724-2.6652-1.4317-3.5903-.95448-.92511-2.2687-1.3877-3.9427-1.3877-1.909 0-3.4508.60939-4.6256 1.8282s-1.7621 2.6799-1.7621 4.3833c0 1.0279.279 1.8796.837 2.5551.20558.20558.279.44053.22026.70485l-.26432 1.0132c-.08811.35242-.30837.4699-.66079.35242-.58737-.23495-1.0793-.6094-1.4758-1.1233-.39648-.51395-.69016-1.094-.88106-1.7401s-.28634-1.3363-.28634-2.0705c0-.96917.19824-1.9163.59471-2.8414.39648-.92512.96182-1.7841 1.696-2.5771.73422-.79296 1.7107-1.4391 2.9295-1.9383s2.5624-.7489 4.0308-.7489z" fill="#fff"/>
								</g>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</a>
	</object>`;

	var tumblrHTML = `<!--Tumblr-->
	<object class="sharerbox-icon-fig" id="tumblr-fig">
		<a class="sharerbox-socialmedia-link" id="tumblr-link" target="_blank">
			<svg class="sharerbox-icon" id="tumblr-icon" viewBox="0 0 72 72" version="1.1">
				<g transform="translate(-152.000000, -267.000000)">
					<g transform="translate(152.000000, 267.000000)">
						<path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" id="Rounded" fill="#34455D"/>
						<path d="M47.7406584,50.3407377 C46.8671091,50.7664252 45.1965085,51.1367974 43.9507666,51.1686638 C40.1897087,51.2714782 39.4597404,48.4693359 39.4294354,46.4380008 L39.4294354,31.4953464 L48.8637092,31.4953464 L48.8637092,24.2273932 L39.4620942,24.2273932 L39.4620942,12 L32.5822681,12 C32.4689921,12 32.271274,12.1013112 32.2433228,12.3583471 C31.8408251,16.1005494 30.127268,22.6686434 23,25.294919 L23,31.4950458 L27.7546504,31.4950458 L27.7546504,47.1778433 C27.7546504,52.5479395 31.6313381,60.1769455 41.8653111,59.99687 C45.318317,59.936444 49.153225,58.4597653 50,57.1848071 L47.7406584,50.3407377" fill="#FFFFFF"/>
					</g>
				</g>
			</svg>
		</a>
	</object>`;

	var telegramHTML = `<!--Telegram-->
	<object class="sharerbox-icon-fig" id="telegram-fig">
		<a class="sharerbox-socialmedia-link" id="telegram-link" target="_blank">
			<svg class="sharerbox-icon" id="telegram-icon" viewBox="0 0 240 240">
				<g transform="matrix(3.4682 0 0 3.4682 0 -1e-5)">
					<path d="m14.4 34.3 23.3-9.6c2.3-1 10.1-4.2 10.1-4.2s3.6-1.4 3.3 2c-.1 1.4-.9 6.3-1.7 11.6l-2.5 15.7s-.2 2.3-1.9 2.7-4.5-1.4-5-1.8c-.4-.3-7.5-4.8-10.1-7-.7-.6-1.5-1.8.1-3.2 3.6-3.3 7.9-7.4 10.5-10 1.2-1.2 2.4-4-2.6-.6l-14.1 9.5s-1.6 1-4.6.1-6.5-2.1-6.5-2.1-2.4-1.5 1.7-3.1z" fill="#fff"/>
				</g>
			</svg>
		</a>
	</object>`;

	var trelloHTML = `<!--Trello-->
	<object class="sharerbox-icon-fig" id="trello-fig">
		<a class="sharerbox-socialmedia-link" id="trello-link" target="_blank">
			<svg class="sharerbox-icon" id="trello-icon" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
				<defs>
					<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
						<stop stop-color="#0091E6" offset="0%"/>
						<stop stop-color="#0079BF" offset="100%"/>
					</linearGradient>
				</defs>
				<rect fill="url(#a)" width="256" height="256" rx="25"/>
				<rect fill="#FFF" x="144.64" y="33.28" width="78.08" height="112" rx="12"/>
				<rect fill="#FFF" x="33.28" y="33.28" width="78.08" height="176" rx="12"/>
			</svg>
		</a>
	</object>`;

	var mastodonHTML = `<!--Mastodon-->
	<object class="sharerbox-icon-fig" id="mastodon-fig">
		<a class="sharerbox-socialmedia-link" id="mastodon-link" target="_blank">
			<svg class="sharerbox-icon" id="mastodon-icon" viewBox="0 0 90 90" fill="white">
				<path d="M 81.7014,23.4592 C 80.5616,15.12034 73.1774,8.54876 64.424,7.27536 62.9472,7.06019 57.3517,6.2771 44.3901,6.2771 H 44.2933 C 31.3281,6.2771 28.5465,7.06019 27.0697,7.27536 18.56,8.51348 10.78877,14.41838 8.903306,22.856 7.9964214,27.0113 7.899639,31.6181 8.068112,35.8439 8.308275,41.904 8.354874,47.9535 8.91406,53.989 c 0.38658,4.009 1.06096,7.9861 2.01809,11.9015 1.79226,7.2312 9.04735,13.249 16.15545,15.704 7.6103,2.5603 15.7945,2.9854 23.6364,1.2276 0.8626,-0.1976 1.7158,-0.4268 2.5593,-0.6879 1.9034,-0.5961 4.1366,-1.2628 5.7783,-2.4339 0.0225,-0.0164 0.041,-0.0376 0.054,-0.0621 0.013,-0.0244 0.0203,-0.0514 0.0212,-0.079 v -5.8484 c -4e-4,-0.0258 -0.0066,-0.0512 -0.0183,-0.0743 -0.0116,-0.0231 -0.0283,-0.0433 -0.049,-0.0592 -0.0206,-0.0159 -0.0446,-0.027 -0.0701,-0.0326 -0.0256,-0.0056 -0.0521,-0.0055 -0.0776,3e-4 -5.0242,1.181 -10.1727,1.773 -15.3382,1.7637 -8.8896,0 -11.2805,-4.1518 -11.9652,-5.8802 -0.5503,-1.4938 -0.8998,-3.0521 -1.0395,-4.6351 -0.0014,-0.0265 0.0036,-0.0531 0.0145,-0.0774 0.0109,-0.0244 0.0276,-0.0458 0.0485,-0.0627 0.021,-0.0168 0.0457,-0.0285 0.0721,-0.0342 0.0264,-0.0057 0.0538,-0.0052 0.08,0.0015 4.9405,1.173 10.005,1.765 15.0873,1.7637 1.2223,0 2.441,0 3.6634,-0.0317 5.1115,-0.1411 10.499,-0.3986 15.5281,-1.3652 0.1255,-0.0246 0.2509,-0.0458 0.3585,-0.0776 7.9325,-1.4991 15.4815,-6.2047 16.2486,-18.1203 0.0287,-0.4691 0.1004,-4.9137 0.1004,-5.4005 0.0036,-1.6543 0.5413,-11.7357 -0.0789,-17.9298 z M 69.4925,53.1918 H 61.1514 V 33.0855 c 0,-4.2329 -1.7923,-6.3917 -5.4378,-6.3917 -4.0075,0 -6.0148,2.5538 -6.0148,7.5981 v 11.0055 h -8.291 V 34.2919 c 0,-5.0443 -2.0109,-7.5981 -6.0184,-7.5981 -3.624,0 -5.4342,2.1588 -5.4378,6.3917 v 20.1063 h -8.334 V 32.4752 c 0,-4.2329 1.0981,-7.5957 3.2942,-10.0884 2.2654,-2.4868 5.237,-3.7637 8.9255,-3.7637 4.2691,0 7.4952,1.6155 9.6459,4.8431 l 2.0755,3.4287 2.079,-3.4287 c 2.1507,-3.2276 5.3768,-4.8431 9.6388,-4.8431 3.6849,0 6.6564,1.2769 8.929,3.7637 2.1962,2.4904 3.2942,5.8532 3.2942,10.0884 z" fill="inherit" />
			</svg>
		</a>
	</object>`;

	var lemmyHTML = `<!--Lemmy-->
	<object class="sharerbox-icon-fig" id="lemmy-fig">
		<a class="sharerbox-socialmedia-link" id="lemmy-link" target="_blank">
			<svg class="sharerbox-icon" id="lemmy-icon" viewBox="0 0 1024 1024">
				<g transform="translate(-1.0231016e-6,-58.039721)">
					<path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-width:28;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 167.03908,270.78735 c -0.94784,-0.002 -1.8939,0.004 -2.83789,0.0215 -4.31538,0.0778 -8.58934,0.3593 -12.8125,0.8457 -33.78522,3.89116 -64.215716,21.86394 -82.871086,53.27344 -18.27982,30.77718 -22.77749,64.66635 -13.46094,96.06837 9.31655,31.40203 31.88488,59.93174 65.296886,82.5332 0.20163,0.13618 0.40678,0.26709 0.61523,0.39258 28.65434,17.27768 57.18167,28.93179 87.74218,34.95508 -0.74566,12.61339 -0.72532,25.5717 0.082,38.84375 2.43989,40.10943 16.60718,77.03742 38.0957,109.67187 l -77.00781,31.4375 c -8.30605,3.25932 -12.34178,12.68234 -8.96967,20.94324 3.37211,8.2609 12.84919,12.16798 21.06342,8.68371 l 84.69727,-34.57617 c 15.70675,18.72702 33.75346,35.68305 53.12109,50.57032 0.74013,0.56891 1.4904,1.12236 2.23437,1.68554 l -49.61132,65.69141 c -5.45446,7.0474 -4.10058,17.19288 3.01098,22.5634 7.11156,5.37052 17.24028,3.89649 22.52612,-3.27824 l 50.38672,-66.71876 c 27.68572,17.53469 57.07524,31.20388 86.07227,40.25196 14.88153,27.28008 43.96965,44.64648 77.58789,44.64648 33.93762,0 63.04252,-18.68693 77.80082,-45.4375 28.7072,-9.21295 57.7527,-22.93196 85.1484,-40.40234 l 51.0977,67.66016 c 5.2858,7.17473 15.4145,8.64876 22.5261,3.27824 7.1115,-5.37052 8.4654,-15.516 3.011,-22.5634 l -50.3614,-66.68555 c 0.334,-0.25394 0.6727,-0.50077 1.0059,-0.75586 19.1376,-14.64919 37.0259,-31.28581 52.7031,-49.63476 l 82.5625,33.70507 c 8.2143,3.48427 17.6913,-0.42281 21.0634,-8.68371 3.3722,-8.2609 -0.6636,-17.68392 -8.9696,-20.94324 l -74.5391,-30.42773 c 22.1722,-32.82971 37.0383,-70.03397 40.1426,-110.46094 1.0253,-13.35251 1.2292,-26.42535 0.6387,-39.17578 30.3557,-6.05408 58.7164,-17.66833 87.2011,-34.84375 0.2085,-0.12549 0.4136,-0.2564 0.6153,-0.39258 33.412,-22.60147 55.9803,-51.13117 65.2968,-82.5332 9.3166,-31.40202 4.8189,-65.29118 -13.4609,-96.06837 -18.6553,-31.40951 -49.0859,-49.38228 -82.8711,-53.27344 -4.2231,-0.4864 -8.4971,-0.76791 -12.8125,-0.8457 -30.2077,-0.54448 -62.4407,8.82427 -93.4316,26.71484 -22.7976,13.16063 -43.3521,33.31423 -59.4375,55.30469 -44.9968,-25.75094 -103.5444,-40.25065 -175.4785,-41.43945 -6.4522,-0.10663 -13.0125,-0.10696 -19.67974,0.002 -80.18875,1.30929 -144.38284,16.5086 -192.87109,43.9922 -0.11914,-0.19111 -0.24287,-0.37932 -0.37109,-0.56446 -16.29,-22.764 -37.41085,-43.73706 -60.89649,-57.29493 -30.02247,-17.33149 -61.21051,-26.66489 -90.59375,-26.73633 z" />
					<path style="display:inline;opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:28;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 716.85595,362.96478 c 15.29075,-21.36763 35.36198,-41.10921 56.50979,-53.31749 66.66377,-38.48393 137.02617,-33.22172 170.08018,22.43043 33.09493,55.72093 14.98656,117.48866 -47.64399,159.85496 -31.95554,19.26819 -62.93318,30.92309 -97.22892,35.54473 M 307.14407,362.96478 C 291.85332,341.59715 271.78209,321.85557 250.63429,309.64729 183.97051,271.16336 113.60811,276.42557 80.554051,332.07772 47.459131,387.79865 65.56752,449.56638 128.19809,491.93268 c 31.95554,19.26819 62.93319,30.92309 97.22893,35.54473" />
					<path style="display:inline;opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:28;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 801.23205,576.8699 C 812.73478,427.06971 720.58431,321.98291 511.99999,325.38859 303.41568,328.79426 213.71393,428.0311 222.76794,576.8699 c 8.64289,142.08048 176.80223,246.40388 288.12038,246.40388 111.31815,0 279.45076,-104.5447 290.34373,-246.40388 z" />
					<path style="display:inline;opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 610.4991,644.28932 c 0,23.11198 18.70595,41.84795 41.78091,41.84795 23.07495,0 41.7809,-18.73597 41.7809,-41.84795 0,-23.112 -18.70594,-41.84796 -41.7809,-41.84796 -23.07496,0 -41.78091,18.73596 -41.78091,41.84796 z m -280.56002,0 c 0,23.32492 18.87829,42.23352 42.16586,42.23352 23.28755,0 42.16585,-18.9086 42.16585,-42.23352 0,-23.32494 -18.87829,-42.23353 -42.16585,-42.23353 -23.28757,0 -42.16586,18.90859 -42.16586,42.23353 z" />
					<path style="display:inline;opacity:1;fill:none;stroke:#000000;stroke-width:32;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 339.72919,769.2467 -54.54422,72.22481 m 399.08582,-72.22481 54.54423,72.22481 M 263.68341,697.82002 175.92752,733.64353 m 579.85765,-35.82351 87.7559,35.82351" />
					<path style="display:inline;opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:28;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 512.00082,713.08977 c -45.86417,0 -75.13006,31.84485 -74.14159,71.10084 1.07048,42.51275 32.46865,71.10323 74.14159,71.10323 41.67296,0 74.05118,-32.99608 74.14161,-71.10323 0.0932,-39.26839 -28.27742,-71.10084 -74.14161,-71.10084 z" />
				</g>
			</svg>
		</a>
	</object>`;

	// Transform sharerbox's social networks options string to an array
	var socialNetworksArray;

    if (!Array.isArray(socialNetworksList)) {
        socialNetworksArray = socialNetworksList.toLowerCase().split(RegExp(/, | |,/));
    } else {
        socialNetworksArray = socialNetworksList;
    }

	// Variable for storing HTML icons;
	var socialHTMLIcons = ``;

	// Parse and check array values
	for (var i = 0; i < socialNetworksArray.length; i++) {

		var socialNetworkName = socialNetworksArray[i].trim();

		switch (socialNetworkName) {
			case 'facebook':
				socialHTMLIcons = socialHTMLIcons.concat(`${facebookHTML}\n`);
			break;
			case 'x':
				socialHTMLIcons = socialHTMLIcons.concat(`${twitterHTML}\n`);
			break;
			case 'whatsapp':
				socialHTMLIcons = socialHTMLIcons.concat(`${whatsappHTML}\n`);
			break;
			case 'reddit':
				socialHTMLIcons = socialHTMLIcons.concat(`${redditHTML}\n`);
			break;
			case 'linkedin':
				socialHTMLIcons = socialHTMLIcons.concat(`${linkedinHTML}\n`);
			break;
			case 'pinterest':
				socialHTMLIcons = socialHTMLIcons.concat(`${pinterestHTML}\n`);
			break;
			case 'tumblr':
				socialHTMLIcons = socialHTMLIcons.concat(`${tumblrHTML}\n`);
			break;
			case 'telegram':
				socialHTMLIcons = socialHTMLIcons.concat(`${telegramHTML}\n`);
			break;
			case 'trello':
				socialHTMLIcons = socialHTMLIcons.concat(`${trelloHTML}\n`);
			break;
			case 'mastodon':
				socialHTMLIcons = socialHTMLIcons.concat(`${mastodonHTML}\n`);
			break;
			case 'lemmy':
				socialHTMLIcons = socialHTMLIcons.concat(`${lemmyHTML}\n`);
			break;
		}
	}

	// SharerBox's HTML markup
	var content = `<section id="sharerbox-section">
	<style type="text/css">
		#sharerbox-section{
			box-sizing: border-box;
			z-index: 9999;
			visibility: hidden;
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: unset;
			width: fit-content;
			height: fit-content;
			margin: auto 0;
			padding: 0;
			transform: translateX(-${sharerboxIconSize}px);
			transition: 0.25s linear;
		}

		#sharerbox-hidden-icons-wrap{
			visibility: visible;
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;
		}

		#sharerbox-social-icons-box{
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;
			width: ${sharerboxIconSize}px;
			height: fit-content;
			transition: 0.25s linear;
		}

		.sharerbox-socialmedia-link{
			display: block;
			margin: 0;
			padding: 0;
			height: ${sharerboxIconSize}px;
		}

		.sharerbox-icon-fig, #sharerbox-share-icon-fig{
			clear: both;
			display: block;
			cursor: pointer;
			padding: 0;
			margin: 0;
			width: ${sharerboxIconSize}px;
			height: ${sharerboxIconSize}px;
			aspect-ratio: 1 / 1;
			transition: 0.25s linear;
		}

		.sharerbox-icon-fig:hover{
			width: ${sharerboxIconSize * 2}px;
		}

		.sharerbox-icon{
			display: block;
			object-fit: contain;
			object-position: right;
			width: ${sharerboxIconSize}px;
			height: ${sharerboxIconSize}px;
			aspect-ratio: 1 / 1;
			padding: 0;
			margin: 0;

		}

		#facebook-fig{
			background: #4267b2;
		}

		#twitterX-fig{
			background: #000000;
		}

		#whatsapp-fig{
			background: #25D366;
		}

		#reddit-fig{
			background: #FF4400;
		}

		#linkedin-fig{
			background: #0077b5;
		}

		#pinterest-fig{
			background: #cd1d20;
		}

		#tumblr-fig{
			background: #34455D;
		}

		#telegram-fig{
			background: linear-gradient(-135deg, #37aee2, #1e96c8);
		}

		#trello-fig{
			background: linear-gradient(0deg, #0079BF, #0091E6);
		}

		#mastodon-fig{
			background: linear-gradient(0deg, #563ACC, #6364FF);
		}

		#lemmy-fig{
			background: #00A846;
		}

		.extra-buttons-fig{
			margin: 5px 2px 0 2px;
			position: relative;
		}

		.extra-buttons{
			width: ${sharerboxExtraIconSize}px;
			height: ${sharerboxExtraIconSize}px;
			aspect-ratio: 1 / 1;
			border-radius: 100%;
			border: solid 1px gray;
			transition: 0.1s linear;

		}

		.extra-buttons:hover{
			border: solid 1px green;
			transform: scale(1.07);
		}

		#other-social-media-fig{
			display: none;
		}

		#other-social-media-fig:hover svg{
			fill: dodgerblue;
			border-color: dodgerblue;
		}

		#other-social-media-fig:active svg{
			filter: brightness(85%);
		}

		#send-email-button, #copy-link-icon, #other-social-media-button{
			background: white;
		}

		#send-email-button:hover{
			background: white;
		}

		#send-email-button:active{
			background: palegreen;
		}

		#send-email-button:first-child, #copy-link-icon:first-child{
			fill: dimgray;
		}

		#send-email-button:hover:first-child, #copy-link-icon:hover:first-child{
			fill: green;
		}

		#send-email-button:hover #sb-email-envelope-bg{
			fill: #FFFF9E;
		}

		#sharerbox-share-icon-wrap{
			z-index: -1;
			visibility: visible;
			transition: 0.25s linear;
		}

		#sharerbox-share-icon{
			opacity: 0.5;
			stroke: white;
			stroke-width: 0.5;
			width: ${sharerboxExtraIconSize}px;
			height: ${sharerboxExtraIconSize}px;
			aspect-ratio: 1 / 1;
			transition: 0.25s linear;
		}

		#sharerbox-share-icon-fig{
			display: block;
			margin: auto 4px;
		}

		#sharerbox-share-icon:hover{
			opacity: 1;
		}
	</style>
	<div id="sharerbox-hidden-icons-wrap">
		<div id="sharerbox-social-icons-box">
			${socialHTMLIcons}
		</div>
		<!-- Additional social-media Button -->
		<object class="extra-buttons-fig" id="other-social-media-fig">
			<svg id="other-social-media-button" class="extra-buttons" enable-background="new 0 0 493.497 493.497" version="1.1" viewBox="0 0 493.5 493.5" xmlns="http://www.w3.org/2000/svg">
				<path d="m224.25 79.25v145h-145v45h145v145h45v-145h145v-45h-145v-145h-45z" style="paint-order:markers fill stroke"/>
			</svg>
		</object>
		<!--Send Email Button-->
		<object class="extra-buttons-fig" id="send-email-button-fig">
			<a class="sharerbox-socialmedia-link" id="send-email-link" title="Email">
				<svg class="extra-buttons" id="send-email-button" enable-background="new 0 0 493.497 493.497" viewBox="0 0 493.5 493.5" >
					<rect id="sb-email-envelope-bg" x="90.963" y="146.38" width="314.71" height="197.09" fill="white"/>
					<path d="m389.17 130.44h-284.84c-19.431 0-35.239 15.806-35.239 35.239v162.13c0 19.431 15.807 35.239 35.239 35.239h284.84c19.431 0 35.238-15.807 35.238-35.239v-162.13c.00072-19.432-15.806-35.239-35.237-35.239zm11.746 35.239v162.13c0 1.8533-.522 3.5453-1.291 5.1048l-83.043-83.049 84.31-84.31c0 .0468.0238.0806.0238.12672zm-308.33 162.13v-162.13c0-.0461.02376-.0792.02376-.126l84.31 84.31-83.048 83.048c-.7632-1.5595-1.2852-3.2508-1.2852-5.1048zm157.79-44.952c-1.9382 1.9375-5.3122 1.9375-7.2504 0l-128.92-128.92h265.09zm-56.849-16.38 32.989 32.99c5.4086 5.4079 12.595 8.3844 20.235 8.3844 7.6392 0 14.827-2.9765 20.235-8.3844l32.99-32.99 73.073 73.079h-252.6z" stroke-width=".72"/>
				</svg>
			</a>
		</object>
		<!--Copy URL Button-->
		<object class="extra-buttons-fig" id="copy-link-fig" title="Copy Link">
			<svg class="extra-buttons" id="copy-link-icon" width="1306.7" height="1306.7" viewBox="0 0 1306.7 1306.7">
				<g transform="matrix(.72 0 0 .72 182.91 182.95)" stroke-width="1.3333">
					<path d="m276 1305.2c-156.85-5.6678-289.14-155.44-274.46-312.05 3.0514-90.655 57.039-169.42 123.81-226.86 96.762-95.642 190.78-194.45 290.73-286.63 123.19-93.928 316.73-65.832 407.54 59.82 41.534 67.722-62.931 142.52-112.95 80.086-56.083-68.731-171.62-77.594-231.33-9.1253-104.44 103.13-208.85 206.37-310.44 312.3-62.244 81.217-16.29 213.22 83.363 237.62 77.05 26.164 146.49-26.017 193.42-81.698 45.169-44.962 90.243-90.019 135.37-135.03 59.362 28.479 130.65 30.581 191.4 5.0055-100.82 101.14-199.87 204.6-304.94 301.19-55.18 39.774-123.57 60.014-191.51 55.385zm422.67-422.67c-86.799-5.91-177.1-51.029-220.76-127.79-25.856-87.032 99.372-121.7 139.13-48.704 63.476 59.077 171.95 45.731 223.35-22.706 100.71-101.23 204.73-199.5 301-304.94 60.094-84.325 5.6901-214.88-95.131-234.33-64.946-16.126-128.95 18.019-169.05 67.931-50.726 50.146-101.09 100.65-151.63 150.99-59.78-28.583-131.99-30.665-192.91-4.3285 102.81-100.99 201.45-206.65 308.36-303.13 125.11-94.05 321.1-62.214 409.45 67.215 86.1 114.5 69.423 291.05-38.105 386.17-106.09 105.91-210.44 213.88-319.65 316.47-55.652 40.883-125.04 61.84-194.05 57.154z"/>
				</g>
			</svg>
		</object>
	</div>
	<div id="sharerbox-share-icon-wrap">
		<!--Share Icon-->
		<object id="sharerbox-share-icon-fig" title="Share!">
			<svg class="sharerbox-icon" id="sharerbox-share-icon" enable-background="new 0 0 57.884 57.884" viewBox="0 0 57.884 57.884" >
				<path d="m13.613 21.662c2.7441 0 5.2047-1.1826 6.921-3.06l14.909 7.1712c-.3564.9927-.5598 2.0538-.5598 3.1689 0 1.1133.2043 2.1762.5598 3.1689l-14.909 7.1694c-1.7163-1.8765-4.1796-3.0618-6.921-3.0618-5.1831 0-9.3861 4.2021-9.3861 9.3852 0 5.184 4.203 9.3861 9.3861 9.3861 5.184 0 9.3861-4.2021 9.3861-9.3861 0-.4968-.0504-.981-.1251-1.4571l15.872-7.6311c1.5516 1.134 3.4578 1.8108 5.5269 1.8108 5.1831 0 9.3852-4.2012 9.3852-9.3825 0-5.1858-4.2021-9.387-9.3852-9.387-2.0691 0-3.9753.6768-5.526 1.8126l-15.871-7.6329c.0738-.4761.1251-.9603.1251-1.4571 0-5.184-4.203-9.3852-9.387-9.3852-5.1831 0-9.3852 4.2012-9.3852 9.3852 0 5.1831 4.2012 9.3825 9.3843 9.3825z" stroke-width=".9"/>
			</svg>
		</object>
	</div>
</section>`;

	var sharerboxContainer =  document.getElementById('sharerbox-section');
	
	// Check if Sharerbox Container already exists and delete it
	if (sharerboxContainer) {
		sharerboxContainer.remove();
	}	

	// Insert Sharerbox Container on the document
	document.body.insertAdjacentHTML('beforeend', content);

	//Update Container variable
	sharerboxContainer =  document.getElementById('sharerbox-section');


	// icon variables
	var socialIconsWrap = document.getElementById('sharerbox-social-icons-box');
	var hiddenIconsContainer = document.getElementById('sharerbox-hidden-icons-wrap');
	var shareIconWrap = document.getElementById('sharerbox-share-icon-wrap');
	var shareIcon = document.getElementById('sharerbox-share-icon');

	var socialIconsCollection = document.getElementsByClassName('sharerbox-icon');


	// Link elements variables

	var facebookLink = document.getElementById('facebook-link');
	var twitterX_Link = document.getElementById('twitterX-link');
	var whatsappLink = document.getElementById('whatsapp-link');
	var redditLink = document.getElementById('reddit-link');
	var linkedinLink = document.getElementById('linkedin-link');
	var pinterestLink = document.getElementById('pinterest-link');
	var tumblrLink = document.getElementById('tumblr-link');
	var telegramLink = document.getElementById('telegram-link');
	var trelloLink = document.getElementById('trello-link');
	var mastodonLink = document.getElementById('mastodon-link');
	var lemmyLink = document.getElementById('lemmy-link');

	var emailButtonLink = document.getElementById('send-email-link');
	var copyLink = document.getElementById('copy-link-icon');

	var otherSocialMedia = document.getElementById('other-social-media-fig');

	var currentUrl = encodeURIComponent(document.URL);

	// Set sensible arguments to lower case
	behavior = behavior.toLowerCase();
	position = position.toLowerCase();
	color = color.toLowerCase();
	visibility = visibility.toString().toLowerCase();

	// (Unnecessary) gives a little format to the site description
	message = message.charAt(0).toUpperCase() + message.slice(1);
	message = message.trim();

	// Custom default description for social-media publications
	var customDescription = encodeURIComponent(message);

	// Setting URLs for supported social-media sharing links

		// Facebook sharer hyperlink
		var facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

		// Twitter/X sharer hyperlink
		var twitterX_URL = `https://x.com/intent/post?text=${customDescription}&url=${currentUrl}`;

		// Whatsapp sharer hyperlink
		var whatsappURL = `whatsapp://send?text=${customDescription}%20${currentUrl}`;

		// Reddit sharer hyperlink
		var redditURL = `https://www.reddit.com/submit/?url=${currentUrl}`;

		// LinkedIn sharer hyperlink
		var linkedinURL = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;

		// Pinterest sharer hyperlink
		var pinterestURL = `https://www.pinterest.com/pin/create/button/?url=${currentUrl}&description=${customDescription}`;

		// Tumblr sharer hyperlink
		var tumblrURL = `https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=${currentUrl}&title=${customDescription}`;

		// Telegram sharer hyperlink
		var telegramURL;
		if (typeof chrome !== 'undefined') {
			telegramURL = `tg://msg_url?url=${currentUrl}&text=${customDescription}`;
		} else {
			telegramURL = `https://t.me/share/url?url=${currentUrl}&text=${customDescription}`;
		}

		// Trello sharer hyperlink
		var trelloURL = `https://trello.com/add-card?url=${currentUrl}&name=${customDescription}&desc=${currentUrl}&mode=popup`;

		
		// Federated (Fediverse's) Social Networks

			// Mastodon sharer hyperlink
			var mastodonURL = `https://${fediverseInstances.mastodon}/share?text=${customDescription}&url=${currentUrl}`;

			// Lemmy sharer hyperlink
			var lemmyURL = `https://${fediverseInstances.lemmy}/create_post?url=${currentUrl}&title=${customDescription}`;


		//Email
		var sendEmailURL = `mailto:?subject=${customDescription}&body=${currentUrl}`;

		// Pop-up window opener function
		function openWindow(url) {
			window.open(url, '_blank', `width=${screen.width / 2}px, height=${screen.height / 2}px`);
		}

	if (behavior.match(/(popup|pop-up|window)/) || behavior === '') {

		// Event listeners for Pop-up window opener

		facebookLink ? facebookLink.onclick = function() {openWindow(facebookURL)} : undefined; // Facebook

		twitterX_Link ? twitterX_Link.onclick = function() {openWindow(twitterX_URL)} : undefined; // Twitter/X

		whatsappLink ? whatsappLink.onclick = function() {openWindow(whatsappURL)} : undefined; // Whatsapp

		redditLink ? redditLink.onclick = function() {openWindow(redditURL)} : undefined; // Reddit

		linkedinLink ? linkedinLink.onclick = function() {openWindow(linkedinURL)} : undefined; // LinkedIn

		pinterestLink ? pinterestLink.onclick = function() {openWindow(pinterestURL)} : undefined; // Pinterest

		tumblrLink ? tumblrLink.onclick = function() {openWindow(tumblrURL)} : undefined; // Tumblr

		telegramLink ? telegramLink.onclick = function() {openWindow(telegramURL)} : undefined; // Telegram

		trelloLink ? trelloLink.onclick = function() {openWindow(trelloURL)} : undefined; // Trello

		mastodonLink ? mastodonLink.onclick = function() {openWindow(mastodonURL)} : undefined; // Mastodon

		lemmyLink ? lemmyLink.onclick = function() {openWindow(lemmyURL)} : undefined; // Lemmy


	} else if (behavior.match(/(\btab\b|new-tab|new tab)/)) {

		// HREF attributes for new tabs

		facebookLink ? facebookLink.href = facebookURL : undefined; // Facebook

		twitterX_Link ? twitterX_Link.href = twitterX_URL : undefined; // Twitter/X

		whatsappLink ? whatsappLink.href = whatsappURL : undefined; // WhatsApp

		redditLink ? redditLink.href = redditURL : undefined; // Reddit

		linkedinLink ? linkedinLink.href = linkedinURL : undefined; // LinkedIn

		pinterestLink ? pinterestLink.href = pinterestURL : undefined; // Pinterest

		tumblrLink ? tumblrLink.href = tumblrURL : undefined; // Tumblr

		telegramLink ? telegramLink.href = telegramURL : undefined; // Telegram
		
		trelloLink ? (trelloURL = trelloURL.replace('&mode=popup', ''), trelloLink.href = trelloURL) : undefined; // Trello

		mastodonLink ? mastodonLink.href = mastodonURL : undefined; // Mastodon

		lemmyLink ? lemmyLink.href = lemmyURL : undefined; // Lemmy
	}

	// Email button href attribute
	emailButtonLink ? emailButtonLink.href = sendEmailURL : undefined; // Email

	// Function for copying URL on clipboard by clicking on the copy link icon
	function copyURL() {
		navigator.clipboard.writeText(document.URL);

		// Styling effects
		copyLink.parentElement.title = 'Copied!';
		copyLink.style.background = 'palegreen';
		copyLink.firstElementChild.firstElementChild.style.fill = 'green';
		setTimeout(function() {
			copyLink.parentElement.title = 'Copy Link';
			copyLink.removeAttribute('style');
			copyLink.firstElementChild.firstElementChild.removeAttribute('style');
		}, 10000);
	}

	copyLink.addEventListener('click', copyURL);

	// Implementing Share API for compatible browsers or devices
	if (navigator.share) {

		const shareData = {
			title: document.head.getElementsByTagName('title')[0].innerText,
			text: message,
			url: document.URL
		};

		otherSocialMedia.style.display = 'block';
		otherSocialMedia.onclick = ()=> navigator.share(shareData);
	}

	// Sets the share icon color
	color ? shareIcon.style.fill = color : undefined;
	color.match(/white|#[f]+$|rgb(a)?\(\s?(255[\,]?\s?) {3}\s*[\d.]*\s?\)/ig) ? shareIcon.style.stroke = 'black' : undefined;

	// Sets ShareBox icons position to the right
	if (position === 'right') {

		for (var i = 0; i <= (socialIconsCollection.length - 2); i++) {
			socialIconsCollection[i].style.float = 'none';
		}

		shareIconWrap.remove();
		sharerboxContainer.insertAdjacentElement('afterbegin', shareIconWrap);

		sharerboxContainer.style.cssText = `left: unset; right: 0px; transform: translateX(${sharerboxIconSize}px)`;
		socialIconsWrap.style.alignItems = 'flex-end';
		hiddenIconsContainer.style.alignItems = 'flex-end';
		shareIcon.style.transform = 'rotateY(180deg)';

	}

	// Sets SharerBox icons position to the left
	if (position === 'left') {

		for (var i = 0; i <= (socialIconsCollection.length - 2); i++) {
			socialIconsCollection[i].style.float = 'right';
		}

		shareIconWrap.remove();
		sharerboxContainer.appendChild(shareIconWrap);

		sharerboxContainer.style.cssText = `left: 0px; right: unset; transform: translateX(-${sharerboxIconSize}px)`;
		socialIconsWrap.style.alignItems = 'flex-start';
		hiddenIconsContainer.style.alignItems = 'flex-start';

	}

	// Setting default visibility (hidden by default)
	if (visibility.match(/(visible|yes|true)/)) {
		flipIcon();
	}

	// Handling icons interaction
	function flipIcon() {

		if (sharerboxContainer.style.left === 'unset') {

			if (shareIcon.style.transform === 'none') {
				shareIcon.style.transform = 'rotateY(180deg)';
				sharerboxContainer.style.transform = `translateX(${sharerboxIconSize}px)`;
			} else {
				shareIcon.style.transform = 'none';
				sharerboxContainer.style.transform = 'none';
			}

		} else if (sharerboxContainer.style.left === '0px') {

			if (shareIcon.style.transform === 'rotateY(180deg)') {
				shareIcon.style.transform = 'none';
				sharerboxContainer.style.transform = `translateX(-${sharerboxIconSize}px)`;
			} else {
				shareIcon.style.transform = 'rotateY(180deg)';
				sharerboxContainer.style.transform = 'none';
			}

		}
	}

	shareIcon.addEventListener('click', flipIcon);
}