/*
							  Sharerbox

			    Version: 0.0.5; Author: Juan Astudillo

	* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	*																*
	*		+-----------------------------------------------+		*
	*		|	 	 Copyright © 2020 Juan Astudillo		|		*
	*		|												|		*
	*		|		<astudillojuanfrancisco@gmail.com>		|		*
	*		+-----------------------------------------------+		*
	*																*
	* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


*/



					  /* Script */


// Inserting HTML markup and CSS Styles into the document

	function sharerboxButtons(socialNetworksList = 'facebook, twitter, whatsapp, reddit'){

		var facebookHTML = `<!--Facebook-->
		<object class="sharerbox-icon-fig" id="fb-fig">
			<a class="sharerbox-socialmedia-link" id="fb-link" target="_blank">
				<svg class="sharerbox-icon" id="fb-icon" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fill-rule="evenodd">
						<g id="Social-Icons---Circle-Black" transform="translate(-152,-43)">
							<g id="Facebook" transform="translate(152,43)">
								<rect id="Oval" width="72" height="72" rx="0" ry="0" fill="#4267b2"/>
								<path d="m60.464 13.417v9.3105l-5.5259.01439c-4.3315 0-5.1661 2.0578-5.1661 5.0654v6.6627h10.318l-1.3383 10.419h-8.9795v27.111h-10.762v-27.111h-9.0097v-10.419h9.0097v-7.6844c0-8.922 5.4381-13.786 13.41-13.786 3.8005 0 7.08.2878 8.0441.41732z" fill="#fff"/>
							</g>
						</g>
					</g>
				</svg>
			</a>
		</object>`;

	var twitterHTML = `<!--Twitter-->
		<object class="sharerbox-icon-fig" id="tw-fig">
			<a class="sharerbox-socialmedia-link" id="tweet-link" target="_blank">
				<svg class="sharerbox-icon" id="tw-icon" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fill-rule="evenodd">
						<g id="Social-Icons---Squared-Black" transform="translate(-264 -43)">
							<g id="Twitter" transform="translate(264 43)">
								<polygon id="Square" points="0 72 72 72 72 0 0 0" fill="#1da1f2"/>
								<path d="m55.087 25.715c.62155 13.851-9.7066 29.294-27.991 29.294-5.561 0-10.737-1.6311-15.095-4.4252 5.2236.61566 10.439-.83267 14.579-4.0784-4.3084-.079021-7.9457-2.9261-9.1983-6.8383 1.5427.29485 3.0606.20876 4.4464-.16748-4.7365-.95297-8.0047-5.2189-7.8986-9.7809 1.328.73714 2.8471 1.1806 4.4617 1.2301-4.3863-2.9297-5.6282-8.7206-3.0476-13.147 4.8557 5.9584 12.111 9.8788 20.297 10.29-1.4354-6.1613 3.2375-12.093 9.5934-12.093 2.833 0 5.3923 1.1948 7.1874 3.1089 2.2433-.4411 4.3509-1.2608 6.2533-2.3895-.73478 2.2999-2.2963 4.2306-4.3296 5.4477 1.992-.23706 3.8897-.76662 5.6565-1.5498-1.3198 1.9755-2.9898 3.7093-4.9135 5.0974" fill="#fff"/>
							</g>
						</g>
					</g>
				</svg>
			</a>
		</object>`;

	var whatsappHTML = `<!--Whatsapp-->
		<object class="sharerbox-icon-fig" id="ws-fig">
			<a class="sharerbox-socialmedia-link" id="ws-link" target="_blank">
				<svg class="sharerbox-icon" id="ws-icon" width="1225px" height="1225px" version="1.1" viewBox="-2.73 0 1225 1225" xmlns="http://www.w3.org/2000/svg">
					<path d="m979.2 241.02c-98.03-98.097-228.37-152.15-367.25-152.21-286.18 0-519.06 232.82-519.17 518.98-.03334 91.473 23.868 180.77 69.296 259.47l-73.654 268.94 275.22-72.167c75.829 41.354 161.21 63.146 248.09 63.181h.22344c286.13 0 519.05-232.85 519.17-519 .047-138.69-53.91-269.09-151.92-367.19zm-367.25 798.54h-.16843c-77.444-.041-153.39-20.833-219.63-60.14l-15.764-9.3452-163.32 42.821 43.605-159.18-10.271-16.319c-43.198-68.687-66.004-148.07-65.972-229.57.0949-237.85 193.67-431.35 431.69-431.35 115.26.0479 223.6 44.977 305.07 126.51 81.472 81.533 126.31 189.92 126.27 305.19-.1008 237.86-193.68 431.39-431.51 431.39z" fill="#e0e0e0" stroke-width=".855"/>
					<g transform="matrix(.95 0 0 .95 30.478 36.539)" stroke-width=".9">
						<path d="m86.065 1132.4 73.99-270.16c-45.647-79.067-69.652-168.77-69.623-260.64.1197-287.46 234.07-521.32 521.52-521.32 139.51.063 270.46 54.358 368.91 152.9 98.473 98.543 152.67 229.53 152.61 368.83-.1197 287.47-234.08 521.35-521.5 521.35-.0207 0 .0144 0 0 0h-.2322c-87.279-.028-173.04-21.938-249.21-63.45z" fill="url(#a)"/>
						<path d="m477.02 375.62c-10.111-22.479-20.756-22.929-30.375-23.323-7.8678-.3375-16.875-.3168-25.868-.3168-9 0-23.625 3.3822-35.993 16.889-12.375 13.507-47.25 46.16-47.25 112.57 0 66.417 48.375 130.59 55.118 139.61 6.75 9 93.382 149.64 230.58 203.74 114.03 44.965 137.23 36.021 161.98 33.771s79.861-32.646 91.111-64.167c11.25-31.514 11.25-58.528 7.875-64.174-3.375-5.625-12.375-9-25.875-15.75s-79.861-39.41-92.236-43.91-21.375-6.75-30.375 6.7644c-9 13.5-34.854 43.896-42.729 52.896-7.875 9.0207-15.75 10.146-29.25 3.3957-13.5-6.7707-56.974-21.01-108.55-66.994-40.127-35.775-67.219-79.96-75.094-93.473-7.875-13.5-.8442-20.812 5.9274-27.542 6.0606-6.0471 13.5-15.757 20.25-23.639 6.7356-7.8822 8.9856-13.507 13.486-22.507 4.5-9.0144 2.25-16.896-1.125-23.646s-29.608-73.503-41.611-100.19z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd"/>
						<path d="m994.19 219.73c-102-102.07-237.64-158.32-382.14-158.38-297.78 0-540.11 242.25-540.23 540.02-.0351 95.183 24.835 188.09 72.105 269.99l-76.64 279.84 286.38-75.094c78.905 43.031 167.74 65.707 258.15 65.742h.2325c297.73 0 540.1-242.3 540.23-540.05.049-144.31-56.095-280-158.08-382.08zm-382.14 830.92h-.1755c-80.585-.042-159.61-21.677-228.54-62.578l-16.404-9.7245-169.95 44.557 45.373-165.64-10.688-16.98c-44.95-71.473-68.681-154.07-68.646-238.88.0981-247.49 201.52-448.84 449.19-448.84 119.94.0495 232.66 46.8 317.45 131.64 84.776 84.839 131.43 197.62 131.39 317.57-.1062 247.5-201.53 448.87-449.01 448.87z" fill="#fff"/>
					</g>
				</svg>
			</a>
		</object>`;

	var redditHTML = `<!--Reddit-->
		<object class="sharerbox-icon-fig" id="reddit-fig">
			<a class="sharerbox-socialmedia-link" id="reddit-link" target="_blank">
				<svg class="sharerbox-icon" id="reddit-icon" xmlns="http://www.w3.org/2000/svg" aria-label="Reddit" role="img" viewBox="0 0 512 512">
					<rect width="512" height="512" rx="15%" fill="#f40"/>
					<g fill="#fff"><ellipse cx="256" cy="307" rx="166" ry="117"/>
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
				<svg class="sharerbox-icon" id="linkedin-icon" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
					<rect width="512" height="512" fill="#0077b5" fill-opacity=".99515" style="paint-order:normal"/>
					<g transform="matrix(.72 0 0 .72 71.68 71.68)" fill="#fff">
						<rect y="160" width="114.5" height="352"/>
						<path d="m426.37 164.13c-1.216-.384-2.368-.8-3.648-1.152-1.536-.352-3.072-.64-4.64-.896-6.08-1.216-12.736-2.08-20.544-2.08-66.752 0-109.09 48.544-123.04 67.296v-67.296h-114.5v352h114.5v-192s86.528-120.51 123.04-32v224h114.46v-237.54c0-53.184-36.448-97.504-85.632-110.34z"/>
						<circle cx="56" cy="53.222" r="64.372" stroke-width="1.1495"/>
					</g>
				</svg>
			</a>
		</object>`;

		var socialmedia = ['facebook', 'twitter', 'whatsapp', 'reddit', 'linkedin'];

		var socialNetworks = socialNetworksList.split(',');

		var HTMLSocialmediaIcons = ` `;

		for(i = 0; i < socialNetworks.length; i++){

			socialNetworkName = socialNetworks[i].trim();

			switch(socialNetworkName){
				case 'facebook':
					HTMLSocialmediaIcons = HTMLSocialmediaIcons.concat(`${facebookHTML}\n`);
				break;
				case 'twitter':
					HTMLSocialmediaIcons = HTMLSocialmediaIcons.concat(`${twitterHTML}\n`);
				break;
				case 'whatsapp':
					HTMLSocialmediaIcons = HTMLSocialmediaIcons.concat(`${whatsappHTML}\n`);
				break;
				case 'reddit':
					HTMLSocialmediaIcons = HTMLSocialmediaIcons.concat(`${redditHTML}\n`);
				break;
				case 'linkedin':
					HTMLSocialmediaIcons = HTMLSocialmediaIcons.concat(`${linkedinHTML}\n`);
				break;
			}
		}

		var content = `<style type="text/css">
	#sharerbox-section{
		box-sizing: border-box;
		z-index: 9999;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		position: fixed;
		top: 33.33%;
		bottom: 33.33%;
		left: 0;
		right: unset;
		margin: 0;
		padding: 0;
		transform: translateX(-45px);
		transition: 0.25s linear;
	}

	#sharerbox-copy-url-wrap{
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: flex-start;
	}

	#sharerbox-social-icons-box{
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: flex-start;
		width: 45px;
		height: fit-content;
		transition: 0.25s linear;
	}

	#sharerbox-social-icons-box:hover{
		width: 90px;
	}

	.sharerbox-socialmedia-link{
		display: block;
		margin: 0;
		padding: 0;
		height: 45px
	}

	.sharerbox-icon-fig{
		display: block;
		padding: 0;
		margin: 0;
	}

	.sharerbox-icon{
		display: block;
		object-fit: contain;
		object-position: right;
		cursor: pointer;
		padding: 0;
		margin: 0;
		width: 45px;
		height: 45px;
		transition: 0.25s linear;
	}

	.sharerbox-icon:hover{
		width: 90px;
	}

	#fb-icon{
		background: #4267b2;
	}

	#tw-icon{
		background: #1da1f2;
	}

	#ws-icon{
		/*background: #4FCE5D; ------ Whatsapp's Official "UFO Green" color */
		background: limegreen;
	}

	#reddit-icon{
		background: #FF4400;
	}

	#linkedin-icon{
		background: #0077b5;
	}

	#copy-link-fig{
		margin: 5px 2.5px 0 2.5px;
		position: relative;
	}

	#copy-link-icon{
		background: darkgray;
		width: 40px;
		height: 40px;
		border-radius: 100%;
		filter: brightness(90%);
		box-shadow: 0 0 2.5px rgb(0,0,0, 0.9);
		transition: 0.15s linear;

	}

	#copy-link-icon:hover{
		transform: scale(1.05);
		filter: brightness(95%);
	}

	#copy-link-fig:hover #copy-link-status{
		display: inline;
	}

	#sharerbox-share-icon{
		opacity: 0.5;
		width: 40px;
		height: 40px;
		transition: 0.25s linear;
	}

	#sharerbox-share-icon:hover{
		opacity: 1;
	}

	#sharerbox-share-icon-fig{
		display: block;
		margin-left: 4px;
	}

	#sharerbox-share-icon-wrap{
		transition: 0.25s linear;
	}
</style>
<section id="sharerbox-section">
	<div id="sharerbox-copy-url-wrap">
		<div id="sharerbox-social-icons-box">
			${HTMLSocialmediaIcons}
		</div>
		<!--Copy Link Icon-->
		<object class="sharerbox-icon-fig" id="copy-link-fig">
			<svg class="sharerbox-icon" id="copy-link-icon" width="1306.7" height="1306.7" version="1.1" viewBox="0 0 1306.7 1306.7" xmlns="http://www.w3.org/2000/svg">
				<g transform="matrix(.72 0 0 .72 182.91 182.95)" stroke-width="1.3333">
					<path d="m276 1305.2c-156.85-5.6678-289.14-155.44-274.46-312.05 3.0514-90.655 57.039-169.42 123.81-226.86 96.762-95.642 190.78-194.45 290.73-286.63 123.19-93.928 316.73-65.832 407.54 59.82 41.534 67.722-62.931 142.52-112.95 80.086-56.083-68.731-171.62-77.594-231.33-9.1253-104.44 103.13-208.85 206.37-310.44 312.3-62.244 81.217-16.29 213.22 83.363 237.62 77.05 26.164 146.49-26.017 193.42-81.698 45.169-44.962 90.243-90.019 135.37-135.03 59.362 28.479 130.65 30.581 191.4 5.0055-100.82 101.14-199.87 204.6-304.94 301.19-55.18 39.774-123.57 60.014-191.51 55.385zm422.67-422.67c-86.799-5.91-177.1-51.029-220.76-127.79-25.856-87.032 99.372-121.7 139.13-48.704 63.476 59.077 171.95 45.731 223.35-22.706 100.71-101.23 204.73-199.5 301-304.94 60.094-84.325 5.6901-214.88-95.131-234.33-64.946-16.126-128.95 18.019-169.05 67.931-50.726 50.146-101.09 100.65-151.63 150.99-59.78-28.583-131.99-30.665-192.91-4.3285 102.81-100.99 201.45-206.65 308.36-303.13 125.11-94.05 321.1-62.214 409.45 67.215 86.1 114.5 69.423 291.05-38.105 386.17-106.09 105.91-210.44 213.88-319.65 316.47-55.652 40.883-125.04 61.84-194.05 57.154z" style="fill:#F7F7F7;"/>
				</g>
			</svg>
		</object>
	</div>
	<div id="sharerbox-share-icon-wrap">
		<!--Share Icon-->
		<object class="sharerbox-icon-fig" id="sharerbox-share-icon-fig">
			<svg class="sharerbox-icon" id="sharerbox-share-icon" enable-background="new 0 0 57.884 57.884" viewBox="0 0 57.884 57.884" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
				<path d="m13.613 21.662c2.7441 0 5.2047-1.1826 6.921-3.06l14.909 7.1712c-.3564.9927-.5598 2.0538-.5598 3.1689 0 1.1133.2043 2.1762.5598 3.1689l-14.909 7.1694c-1.7163-1.8765-4.1796-3.0618-6.921-3.0618-5.1831 0-9.3861 4.2021-9.3861 9.3852 0 5.184 4.203 9.3861 9.3861 9.3861 5.184 0 9.3861-4.2021 9.3861-9.3861 0-.4968-.0504-.981-.1251-1.4571l15.872-7.6311c1.5516 1.134 3.4578 1.8108 5.5269 1.8108 5.1831 0 9.3852-4.2012 9.3852-9.3825 0-5.1858-4.2021-9.387-9.3852-9.387-2.0691 0-3.9753.6768-5.526 1.8126l-15.871-7.6329c.0738-.4761.1251-.9603.1251-1.4571 0-5.184-4.203-9.3852-9.387-9.3852-5.1831 0-9.3852 4.2012-9.3852 9.3852 0 5.1831 4.2012 9.3825 9.3843 9.3825z" stroke-width=".9"/>
			</svg>
		</object>
	</div>
</section>`;

		document.body.insertAdjacentHTML('beforeend', content);

		return true;

	}







// Function for Sharerbox's preferences customization;

	function sharerSetup(behavior = 'popup', position = 'right', color = 'black', visibility = 'hidden', shareMessage = ''){

		// icon variables;

		var sharerboxContainer =  document.getElementById('sharerbox-section');
		var socialIconsWrap = document.getElementById('sharerbox-social-icons-box');
		var copyUrlContainer = document.getElementById('sharerbox-copy-url-wrap');
		var shareIconWrap = document.getElementById('sharerbox-share-icon-wrap');
		var shareIcon = document.getElementById('sharerbox-share-icon');

		// Link elements variables

		var fbLink = document.getElementById('fb-link');
		var twLink = document.getElementById('tweet-link');
		var wsLink = document.getElementById('ws-link');
		var redditLink = document.getElementById('reddit-link');
		var linkedinLink = document.getElementById('linkedin-link');

		var copyLink = document.getElementById('copy-link-icon');

		var currentUrl = encodeURIComponent(document.URL);

		// Set sensible arguments to lower case
		behavior = behavior.toLowerCase();
		position = position.toLowerCase();
		color = color.toLowerCase();
		visibility = visibility.toLowerCase();

		// (Unnecessary) gives a little format to the site description
		shareMessage = shareMessage.charAt(0).toUpperCase() + shareMessage.slice(1);
		shareMessage = shareMessage.trim();

		shareMessage = (function(){
			if(!(shareMessage.match(/:$/))){
				shareMessage = shareMessage.concat(':');
			}

			return shareMessage;
		})();

		// Custom default description for social-media publications
		var customDescription = encodeURIComponent(shareMessage);

		// Setting URLs for social-media sharing links

			// Facebook sharer hyperlink
			facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

			// Twitter sharer hyperlink
			tweetURL = `https://twitter.com/intent/tweet?text=${customDescription}&url=${currentUrl}`;

			// Whatsapp sharer hyperlink
			whatsappURL = `whatsapp://send?text=${customDescription}%20${currentUrl}`;

			// Reddit sharer hyperlink
			redditURL = `https://www.reddit.com/submit/?url=${currentUrl}`;

			// LinkedIn sharer hyperlink
			linkedinURL = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;

			// Pop-up window opener function
			function openWindow(url){
				window.open(url, 'blank', `width=${window.outerWidth / 2}px, height=${window.outerHeight / 2}px`);
			}

		if(behavior === 'popup' || behavior === 'pop-up' || behavior === 'window' || behavior === ''){

			// event listeners for Pop-up window opener

			if(fbLink){
				fbLink.onclick = function(){openWindow(facebookURL)}; // Facebook
			}

			if(twLink){
				twLink.onclick = function(){openWindow(tweetURL)}; // Twitter
			}

			if(wsLink){
				wsLink.onclick = function(){openWindow(whatsappURL)}; // Whatsapp
			}

			if(redditLink){
				redditLink.onclick = function(){openWindow(redditURL)}; // Reddit
			}

			if(linkedinLink){
				linkedinLink.onclick = function(){openWindow(linkedinURL)}; // LinkedIn
			}

		}else if(behavior === 'tab' || behavior === 'new-tab' || behavior === 'new tab'){

			// href attributes for new tabs

			if(fbLink){
				fbLink.href = facebookURL; // Facebook
			}

			if(twLink){
				twLink.href = tweetURL; // Twitter
			}

			if(wsLink){
				wsLink.href = whatsappURL; // Whatsapp
			}

			if(redditLink){
				redditLink.href = redditURL; // Reddit
			}

			if(linkedinLink){
				linkedinLink.href = linkedinURL; // LinkedIn
			}

		}

		// Function for copying URL on clipboard by clicking on the copy link icon
		function copyURL(){
			navigator.clipboard.writeText(document.URL);

			// Styling effects
			copyLink.style.background = '#2DB82D';
			copyLink.style.filter = 'none';
			setTimeout(function(){copyLink.removeAttribute('style');}, 2000)
		}

		copyLink.addEventListener('click', copyURL);

		// Sets the share icon color
		if(color){
			shareIcon.style.fill = color;
		}

		// Sets sharerbox icons position to the right
		if(position === 'right'){

			shareIconWrap.remove();
			sharerboxContainer.insertAdjacentElement('afterbegin', shareIconWrap);

			sharerboxContainer.style.cssText = 'left: unset; right: 0px; transform: translateX(45px)';
			socialIconsWrap.style.alignItems = 'flex-end';
			copyUrlContainer.style.alignItems = 'flex-end';
			shareIcon.style.transform = 'rotateY(180deg)';

		}

		// Sets sharerbox icons position to the left
		if(position === 'left'){

			shareIconWrap.remove();
			sharerboxContainer.appendChild(shareIconWrap);

			sharerboxContainer.style.cssText = 'left: 0px; right: unset; transform: translateX(-45px)';
			socialIconsWrap.style.alignItems = 'flex-start';
			copyUrlContainer.style.alignItems = 'flex-start';

		}

		// Setting default visibility (hidden by default)
		if(visibility === 'yes' || visibility === true || visibility === 'visible'){
			flipIcon();
		}

		// handling icons interaction
		function flipIcon(){

			if(sharerboxContainer.style.left === 'unset'){

				if(shareIcon.style.transform === 'none'){
					shareIcon.style.transform = 'rotateY(180deg)';
					sharerboxContainer.style.transform = 'translateX(45px)';
				}else{
					shareIcon.style.transform = 'none';
					sharerboxContainer.style.transform = 'none';
				}

			}else if(sharerboxContainer.style.left === '0px'){

				if(shareIcon.style.transform === 'rotateY(180deg)'){
					shareIcon.style.transform = 'none';
					sharerboxContainer.style.transform = 'translateX(-45px)';
				}else{
					shareIcon.style.transform = 'rotateY(180deg)';
					sharerboxContainer.style.transform = 'none';
				}

			}
		}

		shareIcon.addEventListener('click', flipIcon);

	}
