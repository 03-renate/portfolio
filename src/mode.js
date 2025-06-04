function setThemeIcon() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    themeIcon.classList.remove("fa-regular", "fa-sun");
    themeIcon.classList.add("fa-solid", "fa-moon");
  } else {
    themeIcon.classList.remove("fa-solid", "fa-moon");
    themeIcon.classList.add("fa-regular", "fa-sun");
  }
}

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    body.setAttribute("data-theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
  }
  setThemeIcon();
}

document.addEventListener("DOMContentLoaded", () => {
  setThemeIcon();
  const themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }
});
