import SmoothScroll from 'smooth-scroll';

export function componentAnchors() {
  const scroll = new SmoothScroll('a[href*="#section-"]', {
    speed: 1000
  });
}
