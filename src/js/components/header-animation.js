export function componentHeaderAnimation() {
  const header = document.querySelector('.header'),
        btnTheme = header.querySelector('[data-theme="btn"]'),
        iconWrapper = header.querySelectorAll('.nav__icon-wrapper'),
        page = document.querySelector('.page'),
        theme = header.querySelectorAll('.promo__theme');

  setTimeout(() => {
    header.style = null;
  }, 500);

  setTimeout(() => {
    document.querySelector('.promo__image-wrapper').style = null;
  }, 1500);

  btnTheme.addEventListener('click', switchTheme);

  function switchTheme() {
    page.classList.toggle('light-theme');
    iconWrapper.forEach((item, i) => {
      item.classList.toggle('nav__icon-wrapper--active');
      theme[i].classList.toggle('promo__theme--active');
    });
  }
}
