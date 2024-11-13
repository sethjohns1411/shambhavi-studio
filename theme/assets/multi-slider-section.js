class multiSlider {
  constructor() {
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
  
          // Update collection divs based on the selected menu item
          collectionDivs.forEach((item) => {
            item.classList.remove("active"); // Remove active class from all items
  
            // Add active class if the div matches the selected data-year
            if (item.classList.contains(collIDMenu)) {
              item.classList.add("active");
            }
          });
        });
      });
    } else {
      console.warn("No menu switch elements found.");
    }
  }
  
  multiSlider(){
    const sliderContainers =  document.querySelectorAll(".multi-slider-wrapper .slider-wrapper .slider-wrapper-container .multi-wrappers");
    if(sliderContainers.length > 0){
      sliderContainers.forEach((ele) => {
        const sliderWrapper = ele.querySelector(".myMultiSwiper");
         new Swiper(sliderWrapper, {
            slidesPerView: 1.2,
            spaceBetween: 13,
            centeredSlides: true,
            initialSlide: 1,
            loop: true, 
            breakpoints: {
              // For screens smaller than 768px (mobile)
              768: {
                slidesPerView: 2
              },
              // Add more breakpoints if needed
            }
          });
      })
    }  
}
 
  

  init() {
    this.menuTabSwitch();
    this.multiSlider()
  }
}

new multiSlider();
