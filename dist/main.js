(()=>{"use strict";function a(){let a=document.querySelector("#content"),n=document.createElement("div");n.innerHTML='\n    <div id="home-body"></div>\n    <div class="navbar" id="home-navbar">\n      <a href="#" data-name="homePage">Home</a>\n      <a href="#" data-name="menuPage">Menu</a>\n      <a href="#" data-name="contactPage">Contact</a>\n      <a href="#" data-name="aboutPage">About us</a>\n    </div>\n    <h3 id="title">Arcadia</h3>\n    <p id="food-quote">a little slice of heaven</p>\n    <div id="button-container">\n      <button id="book-table">book a table</button>\n      <button id="take-out">take out</button>\n    </div>\n    <div id="image-content">\n      <img src="images/plate 2.png" id="plate2" alt="plate2" />\n      <img src="images/Mask Groupplatesss.png" id="plate" alt="plate" />\n      <img src="images/cake.png" id="cake" alt="cake" />\n    </div>\n    <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#81df54" fill-opacity="1" d="M0,192L60,165.3C120,139,240,85,360,101.3C480,117,600,203,720,229.3C840,256,960,224,1080,181.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>\n    </div>',a.appendChild(n)}let n=document.querySelector("#content");a(),n.addEventListener("click",(function(e){let t=e.target;if("a"!==t.localName)return;n.removeChild(n.firstChild);let i=t.dataset.name;return"homePage"===i?a():"menuPage"===i?function(){let a=document.querySelector("#content"),n=document.createElement("div");n.innerHTML='<div id="menu-body"></div>\n    <div class="navbar" id="menu-navbar">\n      <a href="#" data-name="homePage">Home</a>\n      <a href="#" data-name="menuPage">Menu</a>\n      <a href="#" data-name="contactPage">Contact</a>\n      <a href="#" data-name="aboutPage">About us</a>\n    </div>\n    <div id="card-container">\n      \x3c!-- pink card --\x3e\n      <div class="card" id="pink-card">\n        <img src="images/fancy-image.png" id="fancy" alt="fancy-image" />\n        <h3 id="fancy-heading">Best of Arcadia</h3>\n        <div id="fancy-flex">\n          <p>Chicken Makhani £7.65</p>\n          <p>Matar Paneer £8.10</p>\n          <p>Rogan Josh £8.50</p>\n          <p>Pepper Chicken £7.60</p>\n          <p>Tandoori Chicken £9.65</p>\n        </div>\n      </div>\n      \x3c!-- green card --\x3e\n      <div class="card" id="green-card">\n        <img src="images/cocktail-image.png" id="fancy" alt="cocktail-image" />\n        <h3 id="fancy-heading">Cocktails</h3>\n        <div id="fancy-flex">\n          <p>Classic Margarita £7.65</p>\n          <p>Mojito £8.10</p>\n          <p>Paloma £8.50</p>\n          <p>Tequila Sunrise £7.60</p>\n          <p>Daiquiri £9.65</p>\n        </div>\n      </div>\n      \x3c!-- yellow-card --\x3e\n      <div class="card" id="yellow-card">\n        <img src="images/salad-image.png" id="fancy" alt="fancy-image" />\n        <h3 id="fancy-heading">Mixed Greens</h3>\n        <div id="fancy-flex">\n          <p>Cobb salad £7.65</p>\n          <p>Larb £8.10</p>\n          <p>Waldorf salad £8.50</p>\n          <p>Gado-gado £7.60</p>\n          <p>Nicoise salad £9.65</p>\n        </div>\n      </div>\n    </div>',a.appendChild(n)}():"contactPage"===i?function(){let a=document.querySelector("#content"),n=document.createElement("div");n.innerHTML='\n    <div id="contact-body"></div>\n    <div class="navbar" id="contact-navbar">\n      <a href="#" data-name="homePage">Home</a>\n      <a href="#" data-name="menuPage">Menu</a>\n      <a href="#" data-name="contactPage">Contact</a>\n      <a href="#" data-name="aboutPage">About us</a>\n    </div>\n    <img src="images/contact-image.png" id="contact-image" alt="contact-image" />\n    <div id="story-container">\n      <div>\n        <p>Risotteria Melotti NYC West Village</p>\n        <p>FIND US</p>\n        <p>307 E 5th Street</p>\n        <p>btw 7st-10th Av - 10003</p>\n        <p>MANHATTAN - NEW YORK</p>\n      </div>\n      <div>\n        <p>CALL US</p>\n        <p>+1 235 7558939</p>\n      </div>\n      <div>\n        <p>WRITE US</p>\n        <p>nyc@johnmayer.com</p>\n      </div>\n    </div>',a.appendChild(n)}():"aboutPage"===i?function(){let a=document.querySelector("#content"),n=document.createElement("div");n.innerHTML='<div id="about-body"></div>\n    <div class="navbar" id="about-navbar">\n      <a href="#" data-name="homePage">Home</a>\n      <a href="#" data-name="menuPage">Menu</a>\n      <a href="#" data-name="contactPage">Contact</a>\n      <a href="#" data-name="aboutPage">About us</a>\n    </div>\n    <div id="about-container">\n      <p id="pink">OUR JOURNEY</p>\n\n      <p>\n        Arcadia started with a small store in Goa, lovingly conceived by a team who were passionate about bringing simple, fresh Keralite food to Goa that was both authentic and modern.We want everyone to feel the freshness and the pleasure that\n        Kerala’s food brings.\n      </p>\n\n      <p id="green">OUR FOOD</p>\n\n      <p>\n        From the beginning, Arcadia dedicated itself to serving simple, fresh food that is quick and tasty. The simple menu is built around chicken and salads.We also specialise in bringing the spiceness to full blast and our food can feel like a\n        slice of heaven to the real foodies.\n      </p>\n\n      <p id="yellow">ABOUT EXPERIENCE</p>\n\n      <p>\n        Our restaurants capture Kerala’s rich culinary culture and vibrant street food scene in funky and warm atmospheres. Grab a quick bite at lunch or relax over a margarita in the evening.It will definetely make you come back for seconds.It is a\n        nice place to visit as a family.\n      </p>\n    </div>',a.appendChild(n)}():void 0}))})();