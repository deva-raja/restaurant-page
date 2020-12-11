function menuPage() {
  let content = document.querySelector("#content");
  let menu = document.createElement("div");
  menu.innerHTML = `<div id="menu-body"></div>
    <div class="navbar" id="menu-navbar">
      <a href="#" data-name="homePage">Home</a>
      <a href="#" data-name="menuPage">Menu</a>
      <a href="#" data-name="contactPage">Contact</a>
      <a href="#" data-name="aboutPage">About us</a>
    </div>
    <div id="card-container">
      <!-- pink card -->
      <div class="card" id="pink-card">
        <img src="images/fancy-image.png" id="fancy" alt="fancy-image" />
        <h3 id="fancy-heading">Best of Arcadia</h3>
        <div id="fancy-flex">
          <p>Chicken Makhani £7.65</p>
          <p>Matar Paneer £8.10</p>
          <p>Rogan Josh £8.50</p>
          <p>Pepper Chicken £7.60</p>
          <p>Tandoori Chicken £9.65</p>
        </div>
      </div>
      <!-- green card -->
      <div class="card" id="green-card">
        <img src="images/cocktail-image.png" id="fancy" alt="cocktail-image" />
        <h3 id="fancy-heading">Cocktails</h3>
        <div id="fancy-flex">
          <p>Classic Margarita £7.65</p>
          <p>Mojito £8.10</p>
          <p>Paloma £8.50</p>
          <p>Tequila Sunrise £7.60</p>
          <p>Daiquiri £9.65</p>
        </div>
      </div>
      <!-- yellow-card -->
      <div class="card" id="yellow-card">
        <img src="images/salad-image.png" id="fancy" alt="fancy-image" />
        <h3 id="fancy-heading">Mixed Greens</h3>
        <div id="fancy-flex">
          <p>Cobb salad £7.65</p>
          <p>Larb £8.10</p>
          <p>Waldorf salad £8.50</p>
          <p>Gado-gado £7.60</p>
          <p>Nicoise salad £9.65</p>
        </div>
      </div>
    </div>`;
  content.appendChild(menu);
}
export { menuPage };
