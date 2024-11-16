class ourTeam {
  constructor(parent) {
    if(!parent) {
      return;
    }

    this.parent = parent;
    this.init();
  }

  clickEvent = () => {
    let flipButtons = document.querySelectorAll('.team-card-js');
    
    flipButtons.forEach(ele => {
      ele.addEventListener('click', (e) => {
        let flipCard = ele.closest('.our-team-card-js');
        if (flipCard) {
          flipCard.classList.toggle('flip-card');
        }
      })
    });
  }

  init =() => {
    this.clickEvent();
  }
}
new ourTeam(document.querySelector('.our-team'));