class ourProjectSlider {
  constructor(parent) {
    if(!parent) {
      return;
    }

    this.parent = parent;
    this.init();
  }

  slider = () => {
    let swiper = new Swiper('.out-project-slider-js', {
      slidesPerView: 1.2,
      spaceBetween: 12,
      loop: true,
      breakpoints: {
        990: {
            slidesPerView: 4,
            centeredSlides: true,
        },
        750: {
            slidesPerView: 3,
            centeredSlides: true,
        },
        480: {
            slidesPerView: 1.2
        }
      }
    })
  }

  init = () => {
    this.slider();
  }
}
new ourProjectSlider(document.querySelector('.our-project-slider'));