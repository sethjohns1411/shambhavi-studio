class Services {
  constructor(parent) {
    if (!parent) {
      return;
    }

    this.parent = parent;
    this.init();
  }

  clickEvent = () => {
    let flipButtons = document.querySelectorAll('.services-js');
    let cards = document.querySelectorAll('.services-card-js');

    flipButtons.forEach(ele => {
      ele.addEventListener('click', (e) => {
        // Close all other cards first
        cards.forEach(card => {
          if (card !== ele.closest('.services-card-js')) {
            card.classList.remove('flip-card');
          }
        });

        // Toggle the clicked card
        let flipCard = ele.closest('.services-card-js');
        if (flipCard) {
          flipCard.classList.toggle('flip-card');
          if (window.innerWidth < 750) {
            document.body.classList.toggle('service-card-flip', flipCard.classList.contains('flip-card'));
          }
        }
      });
    });
  }

  init = () => {
    this.clickEvent();
  }
}

new Services(document.querySelector('.services'));