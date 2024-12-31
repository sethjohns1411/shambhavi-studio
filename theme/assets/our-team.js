class ourTeam {
  constructor(parent) {
    if (!parent) {
      return;
    }

    this.parent = parent;
    this.init();
  }

  clickEvent = () => {
    let flipButtons = document.querySelectorAll('.team-card-js');
    let cards = document.querySelectorAll('.our-team-card-js');

    flipButtons.forEach(ele => {
      ele.addEventListener('click', (e) => {
        // Close all cards first
        cards.forEach(card => {
          if (card !== ele.closest('.our-team-card-js')) {
            card.classList.remove('flip-card');
          }
        });

        // Toggle the clicked card
        let flipCard = ele.closest('.our-team-card-js');
        if (flipCard) {
          flipCard.classList.toggle('flip-card');
        }
      });
    });
  }

  init = () => {
    this.clickEvent();
  }
}

new ourTeam(document.querySelector('.our-team'));