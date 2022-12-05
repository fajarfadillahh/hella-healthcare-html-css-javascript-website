// ===== SHOW MENU =====
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle");

// ===== SCROLLUP SECTION =====
const scrollY = window.pageYOffset;

function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 250
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);
