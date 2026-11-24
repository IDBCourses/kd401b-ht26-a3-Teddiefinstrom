const toggleThemeBtn = document.getElementById("toggle-theme");
const modeToggle = document.getElementById("theme");
const toggleReadingBtn = document.getElementById("toggle-reading");
const fontToggle = document.getElementById("fonts");

toggleThemeBtn.addEventListener("click", () => {
  if (modeToggle.getAttribute("href") === "light.css") {
    modeToggle.href = "dark.css";
  } else {
    modeToggle.href = "light.css";
  }
});

toggleReadingBtn.addEventListener("click", () => {
  if (fontToggle.getAttribute("href") === "font.css") {
    fontToggle.href = "readable.css";
  } else {
    fontToggle.href = "font.css";
  }
});

console.log("test");