class Services {
  constructor(parent) {
    if(!parent) {
      return;
    }

    this.parent = parent;
    this.init();
  }

  clickEvent = () => {
    let flipButtons = document.querySelectorAll('.services-js');
    
    flipButtons.forEach(ele => {
      ele.addEventListener('click', (e) => {
        let flipCard = ele.closest('.services-card-js');
        if (flipCard) {
          flipCard.classList.toggle('flip-card');
          if(window.innerWidth < 750 ) {
            document.body.classList.toggle('service-card-flip');
          }
        }
      })
    });
  }

  init =() => {
    this.clickEvent();
  }
}
new Services(document.querySelector('.services'));