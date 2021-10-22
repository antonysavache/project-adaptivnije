(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    mobileBtnLinks: document.querySelectorAll("[data-item]")
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }

refs.mobileBtnLinks.forEach((element) => {
  element.addEventListener('click', function() {
    refs.menu.classList.remove('is-open');
    // menuBtnRef.classList.remove('is-open');
  });
})
})();
