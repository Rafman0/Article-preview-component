const toggle = document.getElementById("share-toggle");
const menu = document.getElementById("share-menu");

function isOpen() {
  return toggle.getAttribute("aria-expanded") === "true";
}

function setOpen(open) {
  toggle.setAttribute("aria-expanded", String(open));
}

toggle.addEventListener("click", () => {
  setOpen(!isOpen());
});

document.addEventListener("click", (event) => {
  if (isOpen() && !menu.contains(event.target) && !toggle.contains(event.target)) {
    setOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isOpen()) {
    setOpen(false);
    toggle.focus();
  }
});

const desktop = window.matchMedia("(min-width: 600px)");
desktop.addEventListener("change", () => setOpen(false));
