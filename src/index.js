import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";
import { aboutPage } from "./about";

let content = document.querySelector("#content");

homePage();

function runlink(e) {
  let el = e.target;
  if (el.localName !== "a") return;
  content.removeChild(content.firstChild);
  let linkName = el.dataset.name;
  if (linkName === "homePage") return homePage();
  if (linkName === "menuPage") return menuPage();
  if (linkName === "contactPage") return contactPage();
  if (linkName === "aboutPage") return aboutPage();
}

content.addEventListener("click", runlink);
