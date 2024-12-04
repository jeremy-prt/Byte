// Récupérer tous les boutons pour afficher les popups
const showPopupButtons = document.querySelectorAll(".showPopupButton");
const closePopupButtons = document.querySelectorAll(".closePopupButton");
const popups = document.querySelectorAll(".popup");

// Afficher le popup avec animation de fondu
showPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.popupTarget);
    popup.style.display = "flex"; // Affiche le popup
    setTimeout(() => {
      popup.style.opacity = 1; // Applique le fondu
    }, 10); // Attendre que l'élément soit visible avant de lancer le fondu
  });
});

// Fermer le popup
closePopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    popup.style.opacity = 0; // Enlever l'animation de fondu
    setTimeout(() => {
      popup.style.display = "none"; // Cacher le popup après l'animation
    }, 500); // Attendre la fin de l'animation
  });
});

// Fermer le popup en cliquant en dehors du contenu
popups.forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.opacity = 0; // Enlever l'animation de fondu
      setTimeout(() => {
        popup.style.display = "none"; // Cacher le popup après l'animation
      }, 500); // Attendre la fin de l'animation
    }
  });
});
