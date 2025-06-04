document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#navbar button");
  const sections = document.querySelectorAll(".section");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");

      sections.forEach((section) => {
        if (section.id === target) {
          section.classList.add("active");
          section.classList.remove("hidden");
        } else {
          section.classList.remove("active");
          section.classList.add("hidden");
        }
      });
    });
  });
});
