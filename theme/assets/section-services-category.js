class servicesCategory {
  constructor(parent) {
    if(!parent) {
      return;
    }

    this.parent = parent;
    this.init();
  }

  slider = () => {
    let swiper = new Swiper('.services-category-media-js', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    })
  }

  init = () => {
    this.slider();
  }
}
new servicesCategory(document.querySelector('.services-category'));