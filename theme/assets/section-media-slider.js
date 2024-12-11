class mediaSlider {
  constructor(parent) {
    if(!parent) {
      return;
    }

    this.parent = parent;
    this.init();
  }

  slider = () => {
    let swiper = new Swiper('.media-slider-js', {
      slidesPerView: 1.85,
      spaceBetween: 8,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 1.85,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 1.85,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 1.75,
          spaceBetween: 13,
        },
      }
    });
  }

  init = () => {
    this.slider();
  }
}
new mediaSlider(document.querySelector('.media-slider'));