
   
(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
      item: document.querySelectorAll("[data-item]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-open");
    }
  
    refs.item.forEach((element) => {
    element.addEventListener("click", function() {
      refs.menu.classList.remove("is-open");
    });
  })
  
})();

  // $('.close').on('click', e => {
  //   mobileMenu.classList.remove('is-open');
  //   openMenuBtn.setAttribute('aria-expanded', false);
  //   bodyScrollLock.enableBodyScroll(document.body);
  // });