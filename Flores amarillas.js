document.addEventListener("DOMContentLoaded", () => {
  const welcomeScene = document.getElementById("welcomeScene");
  const flowerScene = document.getElementById("flowerScene");
  const welcomeButton = document.getElementById("welcomeButton");

  if (!welcomeScene || !flowerScene || !welcomeButton) return;

  welcomeButton.addEventListener("click", () => {
    welcomeScene.classList.add("is-hidden");
    flowerScene.classList.add("is-active");
    flowerScene.setAttribute("aria-hidden", "false");
  });
});
