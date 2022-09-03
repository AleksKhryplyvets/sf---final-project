(function () {
  const popupContainer = document.querySelector(".popup");
  const popup = document.querySelector(".popup__main ");
  const openPopupButton = document.querySelectorAll(".open-popup");
  const closePopup = document.querySelector(".close-popup");

  function element(e) {
    popupContainer.classList.add("active");
    e.preventDefault();
  }

  openPopupButton.forEach((button) => {
    button.addEventListener("click", element);
  });

  function closeButton(e) {
    popupContainer.classList.remove("active");
    e.preventDefault();
  }

  closePopup.addEventListener("click", closeButton);

  document.addEventListener("click", (e) => {
    if (e.target === popup) {
      popupContainer.classList.remove("active");
    }
  });
})();
