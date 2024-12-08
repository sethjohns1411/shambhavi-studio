class PhotoGallery {
  constructor() {
    this.init();
  }

  menuTabSwitch() {
    // Select collection and menu switch elements
    const collectionDivs = document.querySelectorAll(
      ".photo-gallery .photo-gallery-wrapper .photo-gallery-container .gallery-wrappers"
    );
    const menuSwitchDivs = document.querySelectorAll(
      ".photo-gallery .galleryname .name"
    );

    if (menuSwitchDivs.length > 0) {
      menuSwitchDivs.forEach((ele) => {
        ele.addEventListener("click", () => {
          const viewBTn = document.querySelector(".photo-gallery-button .view-more");
          viewBTn.dataset.page = "1";

          const collIDMenu = ele.getAttribute("data-handle");

          menuSwitchDivs.forEach((item) => item.classList.remove("active"));
          ele.classList.add("active");

          let galleryContainers =  document.querySelectorAll('.gallery-photo')
          let max = parseInt(viewBTn.dataset.max);
          let page = parseInt(viewBTn.dataset.page);
          if(collIDMenu == ""){
            galleryContainers.forEach((item,i)=>{
                if(i+1 <= (max * page)){
                  item.classList.remove('hidden')
                }else{
                  item.classList.add('hidden')
                }
                if((max * page) > galleryContainers.length){
                  viewBTn.classList.add('hidden')
                }
                viewBTn.dataset.page = page
            })
            return;
          }
          galleryContainers.forEach((item) => item.classList.add('hidden'))
          const filteredContainers = Array.from(galleryContainers).filter(item => item.dataset.name == collIDMenu);
debugger;
          filteredContainers.forEach((item, i) => {
            if (i + 1 <= max) {
              item.classList.remove('hidden');
            } else {
              item.classList.add('hidden');
            }
          });
          
          // Check if the view button should be hidden
          if (filteredContainers.length > max) {
            viewBTn.classList.remove('hidden');
          }else{
            viewBTn.classList.add('hidden');
          }

        });
      });
    } else {
      console.warn("No menu switch elements found.");
    }
  }

  multiSlider() {
    const sliderContainers = document.querySelectorAll(
      ".photo-gallery-wrapper .photo-gallery-container .gallery-wrappers"
    );
    if (sliderContainers.length > 0) {
      sliderContainers.forEach((ele) => {
        const sliderWrapper = ele.querySelector(".myGallerySwiper");
        new Swiper(sliderWrapper, {
          slidesPerView: 1.2,
          spaceBetween: 13,
          centeredSlides: true,
          initialSlide: 1,
          loop: true,
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
          },
        });
      });
    }
  }
  randomHeight() {
    const galleryPhotos = document.querySelectorAll(".gallery-photo");

    // Loop through each image and set alternating heights
    galleryPhotos.forEach((photo, index) => {
      const image = photo.querySelector("img");
      if (index % 2 === 0) {
        photo.style.height = "300px"; // Set taller height for even index (0, 2, 4, ...)
        image.style.height = "300px";
      } else {
        photo.style.height = "200px"; // Set shorter height for odd index (1, 3, 5, ...)
        image.style.height = "200px";
      }
    });
  }
  viewMore() {
    const viewBTn = document.querySelector(".photo-gallery-button .view-more");
    const lessBtn = document.querySelector(".photo-gallery-button .view-less");
    let  active = document.querySelector('.galleryname .name.active')
    let galleryContainers = document.querySelectorAll(
      ".photo-gallery .my-Gallery .gallery-photo"
    );
    if(active.dataset.handle != ""){
      galleryContainers = document.querySelectorAll(
        `.photo-gallery .my-Gallery .gallery-photo[data-name="${active.dataset.handle}"]`
      );
    }
    if (viewBTn) {
      viewBTn.addEventListener("click", () => {
        let max = parseInt(viewBTn.dataset.max);
        let page = parseInt(viewBTn.dataset.page) + 1;
        galleryContainers.forEach((ele,i) => {
          if(i+1 <= (max * page)){
            ele.classList.remove("hidden");  
          }
          if((max * page) > galleryContainers.length){
            viewBTn.classList.add('hidden')
          }
          viewBTn.dataset.page = page
        });
        
      });
    }
    if (lessBtn) {
      lessBtn.addEventListener("click", () => {
        galleryContainers.forEach((ele, index) => {
          if (index >= 7) {
            ele.classList.add("hide");
          }
        });
        lessBtn.classList.add("d-none");
        viewBTn.classList.remove("d-none");
      });
    }
  }
  init() {
    this.menuTabSwitch();
    this.viewMore();
    //this.randomHeight();
    //this.multiSlider();
  }
}

new PhotoGallery();
