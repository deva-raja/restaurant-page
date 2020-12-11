function contactPage() {
  let content = document.querySelector("#content");
  let contact = document.createElement("div");
  contact.innerHTML = `
    <div id="contact-body"></div>
    <div class="navbar" id="contact-navbar">
      <a href="#" data-name="homePage">Home</a>
      <a href="#" data-name="menuPage">Menu</a>
      <a href="#" data-name="contactPage">Contact</a>
      <a href="#" data-name="aboutPage">About us</a>
    </div>
    <img src="images/contact-image.png" id="contact-image" alt="contact-image" />
    <div id="story-container">
      <div>
        <p>Risotteria Melotti NYC West Village</p>
        <p>FIND US</p>
        <p>307 E 5th Street</p>
        <p>btw 7st-10th Av - 10003</p>
        <p>MANHATTAN - NEW YORK</p>
      </div>
      <div>
        <p>CALL US</p>
        <p>+1 235 7558939</p>
      </div>
      <div>
        <p>WRITE US</p>
        <p>nyc@johnmayer.com</p>
      </div>
    </div>`;

  content.appendChild(contact);
}
export { contactPage };
