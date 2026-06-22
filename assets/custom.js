// jQuery(document).ready(function(){
//   jQuery('.image-block').zoom({url: 'cdn/shop/files/gaming-console-image.png',duration: 120
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
 
  const wrapper = document.querySelector('.section-multicolumn-contact .section-content-wrapper');
  const cards = document.querySelectorAll('.section-multicolumn-contact .custom-section-content .group-block');
 
  if (!wrapper || cards.length === 0) {
    return;
  }
 
  cards.forEach(card => {
 
    card.addEventListener('mouseenter', function () {
 
      // Reset all cards
      cards.forEach(item => {
        item.classList.remove('tall-panel__card--expanded');
        item.classList.add('tall-panel__card--contracted');
      });
 
      // Expand hovered card
      this.classList.remove('tall-panel__card--contracted');
      this.classList.add('tall-panel__card--expanded');
 
    });
 
  });
 
  // Remove all changes when mouse leaves wrapper
  wrapper.addEventListener('mouseleave', function () {
 
    cards.forEach(item => {
      item.classList.remove(
        'tall-panel__card--expanded',
        'tall-panel__card--contracted'
      );
    });
 
  });
 
});



 const hoverArea = document.querySelector('.hover-area');
  const floatingBox = document.querySelector('.floating-box');

  hoverArea.addEventListener('mouseenter', () => {
    floatingBox.classList.add('show');
  });

  hoverArea.addEventListener('mouseleave', () => {
    floatingBox.classList.remove('show');
  });

  document.addEventListener('mousemove', (e) => {
    floatingBox.style.left = (e.clientX + 15) + 'px';
    floatingBox.style.top = (e.clientY + 15) + 'px';
  });