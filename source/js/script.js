
// меню в шапке сайта
var menu = document.querySelector(".menu");
var menuToggle = document.querySelector(".menu__toggle");



menu.classList.remove("menu--no-js");
menu.classList.remove("menu--opened");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    if (menu.classList.contains("menu--opened")) {
      menu.classList.remove("menu--opened");
    } else {
      menu.classList.add("menu--opened");
    }
  });
}

// модальное окно
var overlay = document.querySelector(".overlay");//поле вне формы
var addToCartModal = document.querySelector(".add-to-cart-modal");
var buyButton = document.querySelector(".week-product__buy-button"); //на странице index.html
var buyButtonHare = document.querySelector(".catalog-item__button--hare"); //на странице catalog.html
var buyButtonBowl = document.querySelector(".catalog-item__button--bowl");
var buyButtonToys = document.querySelector(".catalog-item__button--toys");

if (buyButton) {
buyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    addToCartModal.classList.add("add-to-cart-modal--show");
    overlay.classList.add("overlay--show");
  });
}

if (buyButtonHare || buyButtonBowl || buyButtonToys) {
  buyButtonHare.addEventListener("click", function (evt) {
    evt.preventDefault();
    addToCartModal.classList.add("add-to-cart-modal--show");
    overlay.classList.add("overlay--show");
  });

  buyButtonBowl.addEventListener("click", function (evt) {
    evt.preventDefault();
    addToCartModal.classList.add("add-to-cart-modal--show");
    overlay.classList.add("overlay--show");
  });

  buyButtonToys.addEventListener("click", function (evt) {
    evt.preventDefault();
    addToCartModal.classList.add("add-to-cart-modal--show");
    overlay.classList.add("overlay--show");
  });
}

//закрываем окно при клике вне формы
if(overlay) {
  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    addToCartModal.classList.remove("add-to-cart-modal--show");
    overlay.classList.remove("overlay--show");
  });
}

//выход из формы при нажатии клавиши escape
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (addToCartModal.classList.contains("add-to-cart-modal--show")) {
      evt.preventDefault();
      addToCartModal.classList.remove("add-to-cart-modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
