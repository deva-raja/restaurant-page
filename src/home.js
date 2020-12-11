function homePage() {
  let content = document.querySelector("#content");
  let home = document.createElement("div");
  home.innerHTML = `
    <div id="home-body"></div>
    <div class="navbar" id="home-navbar">
      <a href="#" data-name="homePage">Home</a>
      <a href="#" data-name="menuPage">Menu</a>
      <a href="#" data-name="contactPage">Contact</a>
      <a href="#" data-name="aboutPage">About us</a>
    </div>
    <h3 id="title">Arcadia</h3>
    <p id="food-quote">a little slice of heaven</p>
    <div id="button-container">
      <button id="book-table">book a table</button>
      <button id="take-out">take out</button>
    </div>
    <div id="image-content">
      <img src="images/plate 2.png" id="plate2" alt="plate2" />
      <img src="images/Mask Groupplatesss.png" id="plate" alt="plate" />
      <img src="images/cake.png" id="cake" alt="cake" />
    </div>
    <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#81df54" fill-opacity="1" d="M0,192L60,165.3C120,139,240,85,360,101.3C480,117,600,203,720,229.3C840,256,960,224,1080,181.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>`;
  content.appendChild(home);
}
export { homePage };
