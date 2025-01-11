class ourProjectSlider {
  constructor(parent) {
    if(!parent) {
      return;
    }

    this.parent = parent;
    this.init();
  }

  slider = () => {

    $('.out-project-slider-js').slick({
      slidesToShow: 3,
      centerMode: true,
      arrows: false,
      centerPadding: '15%',
      responsive: [
          {
              breakpoint: 990,
              settings: {
                  slidesToShow: 3,
                  centerMode: false,
                  centerPadding: 0
              }
          },
         
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  centerMode: false,
                  centerPadding: '0%'
              }
          }
      ]
  });
  
  }

  init = () => {
    this.slider();
  }
}
new ourProjectSlider(document.querySelector('.our-project-slider'));