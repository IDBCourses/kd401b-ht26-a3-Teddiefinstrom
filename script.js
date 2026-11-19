const toggleBtn = document.getElementById("toggle-theme");
const modeToggle = document.getElementById("theme");

toggleBtn.addEventListener("click", () => {
  if (modeToggle.getAttribute("href") === "light.css") {
    modeToggle.href = "dark.css";
  } else {
    modeToggle.href = "light.css";
  }
});