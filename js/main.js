let darkMode = () => {
  let element = document.getElementsByClassName("body")[0] // [0] cuz class are going through an array
  // let element = document.body 
  element.classList.toggle("dark");
}

/*Toggle mobile menu 
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    
    // adds the menu (hamburger) icon
    toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
  } else {
    menu.classList.add("active");

    // adds the close (x) icon
    toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
  }
}
*/
/* Event Listener 
toggle.addEventListener("click", toggleMenu, false);
*/


const burgerMenu = document.querySelector(".burgermenu");
const items = document.querySelectorAll(".nav-menu-item");

burgerMenu.addEventListener('click', function () {
  document.querySelector('.nav-menu').classList.toggle('active');
});

/* Activate Submenu*/
function toggleSubMenu() {
  this.querySelector('.nav-submenu').classList.toggle('active');
}

/* Event Listeners*/
for (let item of items) {
  if (item.querySelector(".nav-submenu")) {
    item.addEventListener("click", toggleSubMenu, false);
    item.addEventListener("keypress", toggleSubMenu, false);
  }
}

