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
          menuSwitchDivs.forEach((item) => item.classList.remove("active"));
          const collIDMenu = ele.getAttribute("data-handle");
          ele.classList.add("active");
          console.log("Selected year:", collIDMenu);
          collectionDivs.forEach((item) => {
            item.classList.remove("active");
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
    const galleryContainers = document.querySelectorAll(
      ".photo-gallery .my-Gallery .gallery-photo"
    );
    if (viewBTn) {
      viewBTn.addEventListener("click", () => {
        galleryContainers.forEach((ele) => {
          ele.classList.remove("hide");
        });
        
          lessBtn.classList.remove("d-none");
          viewBTn.classList.add("d-none");
        
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
