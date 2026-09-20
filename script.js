const btn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");
if (saved === "light") document.body.classList.add("light");
function sync() { btn.textContent = document.body.classList.contains("light") ? "☾" : "☼"; }
sync();
btn.addEventListener("click", () => { document.body.classList.toggle("light"); localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark"); sync(); });
const cursor = document.querySelector(".cursor");
if (window.matchMedia("(pointer:fine)").matches) {
  document.addEventListener("mousemove", e => { cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)` });
} else { cursor.remove(); }
