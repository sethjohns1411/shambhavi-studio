class PhotoGallery {
  constructor() {
    this.PAGE_SIZE = 12;
    this.currentPage = 1;
    this.totalRecords = 0;
    this.data = [];
    this.init();
  }

  init() {
    this.menuTabSwitch();
    this.fetchData();
    this.setupViewMoreButton();
  }

  menuTabSwitch() {
    const menuSwitchDivs = document.querySelectorAll(
      ".photo-gallery .galleryname .name"
    );
    
    if (menuSwitchDivs.length > 0) {
      menuSwitchDivs.forEach((ele) => {
        ele.addEventListener("click", () => {
          this.PAGE_SIZE = 12;
          this.currentPage = 1;
          this.totalRecords = 0;
          this.data = [];

           const galleryContainer = document.querySelector(".gallery-slider");
    galleryContainer.innerHTML = `
     <div class="skeleton-image"></div>
                  <div class="skeleton-image"></div>
                  <div class="skeleton-image"></div>
                  <div class="skeleton-image"></div>
                  <div class="skeleton-image"></div>
                  <div class="skeleton-image"></div>  
    `;
          
          this.fetchData(ele.dataset.name)
          menuSwitchDivs.forEach((item) => item.classList.remove("active"));
          ele.classList.add("active");
        });
      });
    } else {
      console.warn("No menu switch elements found.");
    }
  }

  multiSlider() {
    document.querySelectorAll(
      ".photo-gallery-wrapper .photo-gallery-container .gallery-wrappers"
    ).forEach((ele) => {
      new Swiper(ele.querySelector(".myGallerySwiper"), {
        slidesPerView: 1.2,
        spaceBetween: 13,
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        breakpoints: {
          768: { slidesPerView: 2 },
        },
      });
    });
  }

  randomHeight() {
    document.querySelectorAll(".gallery-photo").forEach((photo, index) => {
      const image = photo.querySelector("img");
      const height = index % 2 === 0 ? "300px" : "200px";
      photo.style.height = height;
      image.style.height = height;
    });
  }

  async fetchData(category = "", page = 1) {
    const url = `https://script.google.com/macros/s/AKfycbzYFAkKk4kez0rLzkXnNeUIh0vQhracBlqmlpdbmBzN2sorZQWQr2p7wwgSwz5Nh6Q8/exec?category=${category}&page=${page}&pageSize=${this.PAGE_SIZE}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      
      if (page === 1) this.data = result.data;
      else this.data.push(...result.data);
      
      this.totalRecords = result.total;
      this.displayPage();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  displayPage() {
    const galleryContainer = document.querySelector(".gallery-slider");
    galleryContainer.innerHTML = ``;
    
    this.data.forEach(({ Category, Image, Title }) => {
      const div = document.createElement("div");
      div.className = "gallery-photo";
      div.setAttribute("data-name", Category);
      div.innerHTML = `
        <div class="image-with-text__media-item">
          <div class="image-with-text__media">
            <img src="${Image}" alt="${Title}" width="1500" height="1939">
          </div>
          <div class="photo-gallery-content">
            <div class="photo-gallery-text">
              <p>${Title}</p>
            </div>
          </div>
        </div>`;
      galleryContainer.appendChild(div);
    });

    document.querySelector(".photo-gallery-button").classList.toggle(
      "hidden",
      this.data.length >= this.totalRecords
    );
  }

  setupViewMoreButton() {
    let btn = document.querySelector(".view-more");
    document.querySelector(".view-more").addEventListener("click", async () => {
      this.currentPage++;
      btn.innerHTML = "LOADING..."
      await this.fetchData(document.querySelector('.name.active').dataset.name, this.currentPage);
      btn.innerHTML = "VIEW MORE"
    });
  }
}

new PhotoGallery();
