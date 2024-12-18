class multiSlider {
  constructor() {
    this.slider = null;
    this.init();
  }

   menuTabSwitch() {
    // Select collection and menu switch elements
    const collectionDivs = document.querySelectorAll(".multi-slider-wrapper .slider-wrapper .slider-wrapper-container .multi-wrappers");
    const menuSwitchDivs = document.querySelectorAll(".multi-slider-wrapper .year-wrapper .year-name .year");
  
    // Only proceed if menu switch elements exist
    if (menuSwitchDivs.length > 0) {
      menuSwitchDivs.forEach((ele) => {
        ele.addEventListener("click", () => {
          // Remove active class from all menu items
          menuSwitchDivs.forEach((item) => item.classList.remove("active"));
  
          // Get the target ID from data-year attribute
          const collIDMenu = ele.getAttribute("data-year");
  
          // Set active class on clicked menu item
          ele.classList.add("active");
  
          // Log to confirm correct data-year attribute
          console.log("Selected year:", collIDMenu);
          let value = parseInt(ele.dataset.year) - 1;
          this.slider.slideToLoop(value)
          // if(value > (menuSwitchDivs.length - 1)){
          //   this.slider.slideTo(value - menuSwitchDivs.length)	
          // }else{
          //   this.slider.slideTo(value)	
          // }

        });
      });
    } else {
      console.warn("No menu switch elements found.");
    }
  }
  
  multiSlider(){
    const menuSwitchDivs = document.querySelectorAll(".multi-slider-wrapper .year-wrapper .year-name .year");
    const sliderContainers =  document.querySelectorAll(".multi-slider-wrapper .slider-wrapper .slider-wrapper-container .multi-wrappers");
    if(sliderContainers.length > 0){
      sliderContainers.forEach((ele) => {
        const sliderWrapper = ele.querySelector(".myMultiSwiper");
        this.slider = new Swiper(sliderWrapper, {
            slidesPerView: 1.2,
            spaceBetween: 13,
            centeredSlides: true,
            initialSlide: 0,
            loop: true, 
            autoplay:true,
            breakpoints: {
              // For screens smaller than 768px (mobile)
              768: {
                slidesPerView: 2
              },
              // Add more breakpoints if needed
            }
          });
      })
      this.slider.on('slideChange', function (e) {
        menuSwitchDivs.forEach((item) => item.classList.remove("active"));
        if(menuSwitchDivs[e.realIndex]){
          menuSwitchDivs[e.realIndex].classList.add('active')
        }
      });
    }  
}
 
  

  init() {
    this.menuTabSwitch();
    this.multiSlider()
  }
}

new multiSlider();
