function aboutPage() {
  let content = document.querySelector("#content");
  let about = document.createElement("div");
  about.innerHTML = `<div id="about-body"></div>
    <div class="navbar" id="about-navbar">
      <a href="#" data-name="homePage">Home</a>
      <a href="#" data-name="menuPage">Menu</a>
      <a href="#" data-name="contactPage">Contact</a>
      <a href="#" data-name="aboutPage">About us</a>
    </div>
    <div id="about-container">
      <p id="pink">OUR JOURNEY</p>

      <p>
        Arcadia started with a small store in Goa, lovingly conceived by a team who were passionate about bringing simple, fresh Keralite food to Goa that was both authentic and modern.We want everyone to feel the freshness and the pleasure that
        Kerala’s food brings.
      </p>

      <p id="green">OUR FOOD</p>

      <p>
        From the beginning, Arcadia dedicated itself to serving simple, fresh food that is quick and tasty. The simple menu is built around chicken and salads.We also specialise in bringing the spiceness to full blast and our food can feel like a
        slice of heaven to the real foodies.
      </p>

      <p id="yellow">ABOUT EXPERIENCE</p>

      <p>
        Our restaurants capture Kerala’s rich culinary culture and vibrant street food scene in funky and warm atmospheres. Grab a quick bite at lunch or relax over a margarita in the evening.It will definetely make you come back for seconds.It is a
        nice place to visit as a family.
      </p>
    </div>`;

  content.appendChild(about);
}
export { aboutPage };
