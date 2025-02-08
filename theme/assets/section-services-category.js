class servicesCategory {
  constructor(parent) {
    if(!parent) {
      return;
    }

    this.parent = parent;
    this.init();
  }

  slider = () => {
    const slides = document.querySelectorAll('.services-category-media-js');
    slides.forEach((item)=>{
      new Swiper(item, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopAdditionalSlides: 2,  
        pagination: {
          el: item.querySelector(".swiper-pagination"),
          clickable: true
        },
        on: {
          slideChange: function () {
            this.pagination.update();
          }
        }
      })
    })
  }

  init = () => {
    this.slider();
  }
}
new servicesCategory(document.querySelector('.services-category'));