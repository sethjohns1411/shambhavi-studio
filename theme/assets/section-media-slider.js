class mediaSlider {
  constructor(parent) {
    if(!parent) {
      return;
    }

    this.parent = parent;
    this.init();
  }

  slider = () => {
    // let swiper = new Swiper('.media-slider-js', {
    //   loop: true, // Enable looping
    //   centeredSlides: true, // Center the active slide
    //   slidesPerView: 'auto', // Adjust this based on the number of slides visible at once
    //   spaceBetween: 10, // Adjust the space between slides if needed
    //   loopAdditionalSlides: 1, // Helps prevent the blank space issue by ensuring enough slides are cloned
    //   on: {
    //     slideChange: function () {
    //       console.log('Slide changed');
    //     },
    //   },
    // });

    $('.media-slider-js').slick({
      centerMode: true,
      arrows: false,
      centerPadding: '25%',
      slidesToShow: 1,
      autoplay: true
    })
  }

  init = () => {
    this.slider();
  }
}
new mediaSlider(document.querySelector('.media-slider'));