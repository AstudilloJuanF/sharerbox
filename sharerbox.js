/*
					    				Sharerbox

			    		Version: 0.8.1; Author: Juan Astudillo

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

function sharerboxIcons(socialNetworksList = 'facebook, twitter, whatsapp, reddit', iconSize = 45){


	// Setting sharerbox icons size in pixels;

	var maxSize = 100, minSize = 25, defaultSize = 45;
	let maxMin = ['maximum', 'minimum'];

	if (typeof iconSize === 'number'){
		sharerboxIconSize = iconSize;
	} else if (typeof iconSize === 'string' && Number(iconSize.replaceAll(/[a-z]*/ig, '')) != 0){
		sharerboxIconSize = Number(iconSize.replaceAll(/[a-z]*/ig, ''));
	}
	
	if (typeof sharerboxIconSize === 'number' && (sharerboxIconSize < minSize || sharerboxIconSize > maxSize)){
		sharerboxIconSize < minSize ? (sharerboxIconSize = minSize, maxMin = maxMin[1]) : undefined;
		sharerboxIconSize > maxSize ? (sharerboxIconSize = maxSize, maxMin = maxMin[0]) : undefined;

		console.warn(`Currently the ${maxMin} accepted size value for SharerBox's icons is ${sharerboxIconSize}px, icon size set to ${maxMin} by default.\n\nAccepted Sharerbox icon size ranges are ${minSize}px-${maxSize}px`);
	} else if(typeof sharerboxIconSize != 'number'){
		sharerboxIconSize = defaultSize;
		
		console.warn(`The value introduced to set SharerBox icon size is not a number, icon size set to default (${sharerboxIconSize}px).\n\nAccepted Sharerbox icon size ranges are ${minSize}px-${maxSize}px`);
	}

	var sharerboExtraIconSize = Math.floor(sharerboxIconSize * 88.889 / 100);
	

	// variables for HTML social icons

	var facebookHTML = `<!--Facebook-->
	<object class="sharerbox-icon-fig" id="fb-fig">
		<a class="sharerbox-socialmedia-link" id="fb-link" target="_blank">
			<svg class="sharerbox-icon" id="fb-icon" viewBox="0 0 72 72">
				<g transform="translate(-152,-43)">
					<g transform="translate(152,43)">
						<rect width="72" height="72" rx="0" ry="0" fill="#4267b2"/>
						<path d="m60.464 13.417v9.3105l-5.5259.01439c-4.3315 0-5.1661 2.0578-5.1661 5.0654v6.6627h10.318l-1.3383 10.419h-8.9795v27.111h-10.762v-27.111h-9.0097v-10.419h9.0097v-7.6844c0-8.922 5.4381-13.786 13.41-13.786 3.8005 0 7.08.2878 8.0441.41732z" fill="#fff"/>
					</g>
				</g>
			</svg>
		</a>
	</object>`;

	var twitterHTML = `<!--Twitter-->
	<object class="sharerbox-icon-fig" id="tw-fig">
		<a class="sharerbox-socialmedia-link" id="tweet-link" target="_blank">
			<svg class="sharerbox-icon" id="tw-icon" viewBox="0 0 72 72">
				<g transform="translate(-264 -43)">
					<g transform="translate(264 43)">
						<polygon id="Square" points="0 72 72 72 72 0 0 0" fill="#1da1f2"/>
						<path d="m55.087 25.715c.62155 13.851-9.7066 29.294-27.991 29.294-5.561 0-10.737-1.6311-15.095-4.4252 5.2236.61566 10.439-.83267 14.579-4.0784-4.3084-.079021-7.9457-2.9261-9.1983-6.8383 1.5427.29485 3.0606.20876 4.4464-.16748-4.7365-.95297-8.0047-5.2189-7.8986-9.7809 1.328.73714 2.8471 1.1806 4.4617 1.2301-4.3863-2.9297-5.6282-8.7206-3.0476-13.147 4.8557 5.9584 12.111 9.8788 20.297 10.29-1.4354-6.1613 3.2375-12.093 9.5934-12.093 2.833 0 5.3923 1.1948 7.1874 3.1089 2.2433-.4411 4.3509-1.2608 6.2533-2.3895-.73478 2.2999-2.2963 4.2306-4.3296 5.4477 1.992-.23706 3.8897-.76662 5.6565-1.5498-1.3198 1.9755-2.9898 3.7093-4.9135 5.0974" fill="#fff"/>
					</g>
				</g>
			</svg>
		</a>
	</object>`;

	var whatsappHTML = `<!--Whatsapp-->
	<object class="sharerbox-icon-fig" id="ws-fig">
		<a class="sharerbox-socialmedia-link" id="ws-link" target="_blank">
			<svg class="sharerbox-icon" id="ws-icon" width="1225px" height="1225px" viewBox="-2.73 0 1225 1225">
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

	// Transform sharerboxIcons() argument string into array values
	var socialNetworks = socialNetworksList.toLowerCase().split(RegExp(/, | |,/));

	// Variable for HTML icon storage;
	var socialHTMLIcons = ``;

	// Parse and check array values
	for(var i = 0; i < socialNetworks.length; i++){

		var socialNetworkName = socialNetworks[i].trim();

		switch(socialNetworkName){
			case 'facebook':
				socialHTMLIcons = socialHTMLIcons.concat(`${facebookHTML}\n`);
			break;
			case 'twitter':
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
		}
	}

	// SharerBox's HTML markup
	var content = `<style type="text/css">
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

	#sharerbox-social-icons-box:hover{
		width: ${sharerboxIconSize * 2}px;
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
		transition: 0.25s linear;
	}

	.sharerbox-icon-fig:hover{
		width: ${sharerboxIconSize * 2}px;
	}

	.sharerbox-icon{
		display: block;
		object-fit: contain;
		object-position: right;
		padding: 0;
		margin: 0;
		width: ${sharerboxIconSize}px;
		height: ${sharerboxIconSize}px;

	}

	#fb-fig{
		background: #4267b2;
	}

	#tw-fig{
		background: #1da1f2;
	}

	#ws-fig{
		background: limegreen;
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

	.extra-buttons-fig{
		margin: 5px 2.5px 0 2.5px;
		position: relative;
	}

	.extra-buttons{
		width: ${sharerboExtraIconSize}px;
		height: ${sharerboExtraIconSize}px;
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
		visibility: visible;
		transition: 0.25s linear;
	}

	#sharerbox-share-icon{
		opacity: 0.5;
		stroke: white;
		stroke-width: 0.5;
		width: ${sharerboExtraIconSize}px;
		height: ${sharerboExtraIconSize}px;
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
<section id="sharerbox-section">
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

	document.body.insertAdjacentHTML('beforeend', content);

}



// Function for SharerBox's preferences customization;

function sharerSetup(behavior = 'popup', position = 'right', color = 'black', visibility = 'hidden', shareDescription = ''){

	// icon variables

	var sharerboxContainer =  document.getElementById('sharerbox-section');
	var socialIconsWrap = document.getElementById('sharerbox-social-icons-box');
	var hiddenIconsContainer = document.getElementById('sharerbox-hidden-icons-wrap');
	var shareIconWrap = document.getElementById('sharerbox-share-icon-wrap');
	var shareIcon = document.getElementById('sharerbox-share-icon');

	var socialIconsCollection = document.getElementsByClassName('sharerbox-socialmedia-link');

	// Link elements variables

	var fbLink = document.getElementById('fb-link');
	var twLink = document.getElementById('tweet-link');
	var wsLink = document.getElementById('ws-link');
	var redditLink = document.getElementById('reddit-link');
	var linkedinLink = document.getElementById('linkedin-link');
	var pinterestLink = document.getElementById('pinterest-link');
	var tumblrLink = document.getElementById('tumblr-link');
	var telegramLink = document.getElementById('telegram-link');

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
	shareDescription = shareDescription.charAt(0).toUpperCase() + shareDescription.slice(1);
	shareDescription = shareDescription.trim();

	// Custom default description for social-media publications
	var customDescription = encodeURIComponent(shareDescription);

	// Setting URLs for supported social-media sharing links

		// Facebook sharer hyperlink
		var facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

		// Twitter sharer hyperlink
		var tweetURL = `https://twitter.com/intent/tweet?text=${customDescription}&url=${currentUrl}`;

		// Whatsapp sharer hyperlink
		var whatsappURL = `whatsapp://send?text=${customDescription}%20${currentUrl}`;

		// Reddit sharer hyperlink
		var redditURL = `https://www.reddit.com/submit/?url=${currentUrl}&title=${customDescription}`;

		// LinkedIn sharer hyperlink
		var linkedinURL = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;

		// Pinterest sharer hyperlink
		var pinterestURL = `https://www.pinterest.com/pin/create/button/?url=${currentUrl}&description=${customDescription}`;

		// Tumblr sharer hyperlink
		var tumblrURL = `https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=${currentUrl}&title=${customDescription}`;

		// Telegram sharer hyperlink
		var telegramURL = `tg://msg_url?url=${currentUrl}&text=${customDescription}`;

		//Email
		var sendEmailURL = `mailto:?subject=${customDescription}&body=${currentUrl}`;

		// Pop-up window opener function
		function openWindow(url){
			window.open(url, '_blank', `width=${screen.width / 2}px, height=${screen.height / 2}px`);
		}

	if(behavior.match(/(popup|pop-up|window)/) || behavior === ''){

		// Event listeners for Pop-up window opener

		fbLink ? fbLink.onclick = function(){openWindow(facebookURL)} : undefined; // Facebook

		twLink ? twLink.onclick = function(){openWindow(tweetURL)} : undefined; // Twitter

		wsLink ? wsLink.onclick = function(){openWindow(whatsappURL)} : undefined; // Whatsapp

		redditLink ? redditLink.onclick = function(){openWindow(redditURL)} : undefined; // Reddit

		linkedinLink ? linkedinLink.onclick = function(){openWindow(linkedinURL)} : undefined; // LinkedIn

		pinterestLink ? pinterestLink.onclick = function(){openWindow(pinterestURL)} : undefined; // Pinterest

		tumblrLink ? tumblrLink.onclick = function(){openWindow(tumblrURL)} : undefined; // Tumblr

		telegramLink ? telegramLink.onclick = function(){openWindow(telegramURL)} : undefined; // telegram


	}else if(behavior.match(/(\btab\b|new-tab|new tab)/)){

		// HREF attributes for new tabs

		fbLink ? fbLink.href = facebookURL: undefined; // Facebook

		twLink ? twLink.href = tweetURL: undefined; // Twitter

		wsLink ? wsLink.href = whatsappURL: undefined; // WhatsApp

		redditLink ? redditLink.href = redditURL: undefined; // Reddit

		linkedinLink ? linkedinLink.href = linkedinURL: undefined; // LinkedIn

		pinterestLink ? pinterestLink.href = pinterestURL: undefined; // Pinterest

		tumblrLink ? tumblrLink.href = tumblrURL: undefined; // Tumblr

		telegramLink ? telegramLink.href = telegramURL: undefined; // telegram

	}

	// Email button href attribute
	emailButtonLink ? emailButtonLink.href = sendEmailURL : undefined; // Email

	// Function for copying URL on clipboard by clicking on the copy link icon
	function copyURL(){
		navigator.clipboard.writeText(document.URL);

		// Styling effects
		copyLink.parentElement.title = 'Copied!';
		copyLink.style.background = 'palegreen';
		copyLink.firstElementChild.firstElementChild.style.fill = 'green';
		setTimeout(function(){
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
			text: shareDescription,
			url: document.URL
		};

		otherSocialMedia.style.display = 'block';
		otherSocialMedia.onclick = ()=> navigator.share(shareData);
	}

	// Sets the share icon color
	color ? shareIcon.style.fill = color : undefined;
	color.match(/white|#[f]+$|rgb(a)?\(\s?(255[\,]?\s?){3}\s*[\d.]*\s?\)/ig) ? shareIcon.style.stroke = 'black' : undefined;

	// Sets ShareBox icons position to the right
	if(position === 'right'){

		for(var i = 0; i <= (socialIconsCollection.length - 2); i++){
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
	if(position === 'left'){

		for(var i = 0; i <= (socialIconsCollection.length - 2); i++){
			socialIconsCollection[i].style.float = 'right';
		}

		shareIconWrap.remove();
		sharerboxContainer.appendChild(shareIconWrap);

		sharerboxContainer.style.cssText = `left: 0px; right: unset; transform: translateX(-${sharerboxIconSize}px)`;
		socialIconsWrap.style.alignItems = 'flex-start';
		hiddenIconsContainer.style.alignItems = 'flex-start';

	}

	// Setting default visibility (hidden by default)
	if(visibility.match(/(visible|yes|true)/)){
		flipIcon();
	}

	// Handling icons interaction
	function flipIcon(){

		if(sharerboxContainer.style.left === 'unset'){

			if(shareIcon.style.transform === 'none'){
				shareIcon.style.transform = 'rotateY(180deg)';
				sharerboxContainer.style.transform = `translateX(${sharerboxIconSize}px)`;
			}else{
				shareIcon.style.transform = 'none';
				sharerboxContainer.style.transform = 'none';
			}

		}else if(sharerboxContainer.style.left === '0px'){

			if(shareIcon.style.transform === 'rotateY(180deg)'){
				shareIcon.style.transform = 'none';
				sharerboxContainer.style.transform = `translateX(-${sharerboxIconSize}px)`;
			}else{
				shareIcon.style.transform = 'rotateY(180deg)';
				sharerboxContainer.style.transform = 'none';
			}

		}
	}

	shareIcon.addEventListener('click', flipIcon);

}
