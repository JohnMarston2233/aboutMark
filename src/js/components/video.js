export function componentVideo() {
  const videoBlock = document.querySelector('.video-block'),
      video = videoBlock.querySelector('[data-video="video"]'),
      videoBtn = videoBlock.querySelector('[data-video="btn"]');


  addEvent(videoBtn, 'click', playVideo);
  addEvent(video, 'play', playVideo);
  addEvent(video, 'pause', pauseVideo);

  function toggleVideo(action) {
    videoBtn.classList[action]('video-block__btn-play--active');
    videoBlock.classList[action]('video-block--active');
  }

  function playVideo() {
    toggleVideo('add');
    video.play();
    video.controls = true;
  }

  function pauseVideo() {
    toggleVideo('remove');
    video.pause();
    video.controls = false;
  }

  function addEvent(el, ev, func) {
    el.addEventListener(ev, func);
  }
}
