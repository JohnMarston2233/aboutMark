import AOS from 'aos';

export function componentAos() {
  AOS.init({
    disable: function() {
      var maxWidth = 768;
      return window.innerWidth < maxWidth;
    }
  });
}
