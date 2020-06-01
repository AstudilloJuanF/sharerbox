
							      /* Sharebox */

					/* Version: 0.0.1; Author: Juan Astudillo */

       /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	* 	   	   +----------------------------------------------------+		*
	* 		   |					                |		*
	*		   |	        Copyright 2020 Juan Astudillo	 	|		*
	*        	   |						        |		*
	* 		   |	     <astudillojuanfrancisco@gmail.com> 	|		*
	*		   +----------------------------------------------------+		*
	* 										        *
	* 	 This program is free software; you can redistribute it and/or modify 		*
	* 	it under the terms of the GNU General Public License as published by		*
	* 	the Free Software Foundation; either version 2 of the License, or		*
	* 	(at your option) any later version.						*
	*											*
	* 	 This program is distributed in the hope that it will be useful,		*
	* 	but WITHOUT ANY WARRANTY; without even the implied warranty of			*
	* 	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the			*
	* 	GNU General Public License for more details.					*
	*											*
	* 	 You should have received a copy of the GNU General Public License		*
	* 	along with this program; if not, write to the Free Software			*
	* 	Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,			*
	* 	MA 02110-1301, USA.								*
	* 											*
	* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */




							/* Script */


// Inserting HTML markup and CSS Styles into the document

	(function insertHTMLContent(){

		var content = `<style type="text/css">
	#sharebox-section{
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

	#sharebox-social-icons-box{
		display: flex;
		flex-direction: column;
		flew-wrap: nowrap;
		align-items: flex-start;
		width: 45px;
		height: fit-content;
		transition: 0.25s linear;
	}

	#sharebox-social-icons-box:hover{
		width: 90px;
	}

	.sharebox-socialmedia-link{
		display: block;
		margin: 0;
		padding: 0;
		height: 45px
	}

	.sharebox-icon-fig{
		display: block;
		padding: 0;
		margin: 0;
	}

	.sharebox-icon{
		object-fit: contain;
		object-position: right;
		cursor: pointer;
		padding: 0;
		margin: 0;
		width: 45px;
		height: 45px;
		transition: 0.25s linear;
	}

	.sharebox-icon:hover{
		width: 90px;
	}

	#fb-icon{
		background: #4267b2;
	}

	#tw-icon{
		background: #1da1f2;
	}

	#sharebox-share-icon{
		opacity: 0.5;
		width: 40px;
		height: 40px;
		transform: none;
		transition: 0.25s linear;
	}

	#sharebox-share-icon:hover{
		opacity: 1;
	}

	#sharebox-share-icon-fig{
		display: block;
		margin-left: 4px;
	}

	#sharebox-share-icon-wrap{
		transition: 0.25s linear;
	}
</style>
<section id="sharebox-section">
	<div id="sharebox-social-icons-box">
		<!-- Facebook Icon -->
		<object class="sharebox-icon-fig" id="fb-fig">
			<a class="sharebox-socialmedia-link" id="fb-link" href="" target="_blank">
				<svg class="sharebox-icon" id="fb-icon" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
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
		</object>
		<!-- Twitter Icon -->
		<object class="sharebox-icon-fig" id="tw-fig">
			<a class="sharebox-socialmedia-link" id="tweet-link" href="" target="_blank">
				<svg class="sharebox-icon" id="tw-icon" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
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
		</object>
	</div>
	<div id="sharebox-share-icon-wrap">
		<!-- Share Icon -->
		<object class="sharebox-icon-fig" id="sharebox-share-icon-fig">
			<svg class="sharebox-icon" id="sharebox-share-icon" enable-background="new 0 0 57.884 57.884" viewBox="0 0 57.884 57.884" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
				<path d="m13.613 21.662c2.7441 0 5.2047-1.1826 6.921-3.06l14.909 7.1712c-.3564.9927-.5598 2.0538-.5598 3.1689 0 1.1133.2043 2.1762.5598 3.1689l-14.909 7.1694c-1.7163-1.8765-4.1796-3.0618-6.921-3.0618-5.1831 0-9.3861 4.2021-9.3861 9.3852 0 5.184 4.203 9.3861 9.3861 9.3861 5.184 0 9.3861-4.2021 9.3861-9.3861 0-.4968-.0504-.981-.1251-1.4571l15.872-7.6311c1.5516 1.134 3.4578 1.8108 5.5269 1.8108 5.1831 0 9.3852-4.2012 9.3852-9.3825 0-5.1858-4.2021-9.387-9.3852-9.387-2.0691 0-3.9753.6768-5.526 1.8126l-15.871-7.6329c.0738-.4761.1251-.9603.1251-1.4571 0-5.184-4.203-9.3852-9.387-9.3852-5.1831 0-9.3852 4.2012-9.3852 9.3852 0 5.1831 4.2012 9.3825 9.3843 9.3825z" stroke-width=".9"/>
			</svg>
		</object>
	</div>
</section>`;

		document.body.insertAdjacentHTML('beforeend', content);

	})();

// icon variables;

	var shareboxContainer =  document.getElementById('sharebox-section');
	var socialIconsWrap = document.getElementById('sharebox-social-icons-box');
	var shareIconWrap = document.getElementById('sharebox-share-icon-wrap');
	var shareIcon = document.getElementById('sharebox-share-icon');

	// Link elements variables

	var fbLink = document.getElementById('fb-link');
	var twLink = document.getElementById('tweet-link');
	var currentUrl = encodeURIComponent(document.URL);


// function for Sharebox's preferences customization;

	function sharebox(position = 'right', color = 'black', visibility = 'hidden', message = ''){



		// Custom default message or description for social-media publications
		var customMessage = encodeURIComponent(message);


		/* Unfortunately Facebook's sharer API still does not support URLs with hyphens or underscores,
		 * this function handles the issue by sharing the user's main website instead */
		var fbShareURL = function(){
			if(RegExp(/[\-_]+/gi).test(currentUrl) === true){
				return `https://${document.domain}`;
			}else{
				return currentUrl;
			}
		};

		// Setting URLs for social-media sharing links

			// Facebook sharer link
			fbLink.href = `https://www.facebook.com/sharer/sharer.php?u=${fbShareURL()}`;

			// Twitter sharer link
			twLink.href = `https://twitter.com/intent/tweet?text=${customMessage}&url=${currentUrl}`;



		// Sets the share icon color
		if(color){
			shareIcon.style.fill = color;
		}

		// Sets sharebox icons position to the right
		if(position === 'right'){

			shareIconWrap.remove();
			shareboxContainer.insertAdjacentElement('afterbegin', shareIconWrap);

			shareboxContainer.style.cssText = 'left: unset; right: 0px; transform: translateX(45px)';
			socialIconsWrap.style.alignItems = 'flex-end';
			shareIcon.style.transform = 'rotateY(180deg)';

		}

		// Sets sharebox icons position to the left
		if(position === 'left'){

			shareIconWrap.remove();
			shareboxContainer.appendChild(shareIconWrap);

			shareboxContainer.style.cssText = 'left: 0px; right: unset; transform: translateX(-45px)';
			socialIconsWrap.style.alignItems = 'flex-start';

		}

		// Setting default visibility (hidden by default)
		if(visibility === 'yes' || visibility === true || visibility === 'visible'){
			flipIcon();
		}

	}


// handling icons interaction
	function flipIcon(){

		if(shareboxContainer.style.left === 'unset'){

			if(shareIcon.style.transform === 'none'){
				shareIcon.style.transform = 'rotateY(180deg)';
				shareboxContainer.style.transform = 'translateX(45px)';
			}else{
				shareIcon.style.transform = 'none';
				shareboxContainer.style.transform = 'none';
			}

		}else if(shareboxContainer.style.left === '0px'){

			if(shareIcon.style.transform === 'rotateY(180deg)'){
				shareIcon.style.transform = 'none';
				shareboxContainer.style.transform = 'translateX(-45px)';
			}else{
				shareIcon.style.transform = 'rotateY(180deg)';
				shareboxContainer.style.transform = 'none';
			}

		}
	}

	shareIcon.addEventListener('click', flipIcon);
