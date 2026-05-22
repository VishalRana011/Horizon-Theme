// jQuery(document).ready(function(){
//   jQuery('.image-block').zoom({url: 'cdn/shop/files/gaming-console-image.png',duration: 120
//   });
// });


window.addEventListener('load', () => {

  const cards = document.querySelectorAll(
    '.section-multicolumn-contact .group-block'
  );

  if (!cards.length) {
    console.log('Cards not found');
    return;
  }

  cards.forEach((card) => {

    card.addEventListener('mouseenter', () => {

      cards.forEach((item) => {
        item.classList.remove(
          'tall-panel__card--expanded'
        );

        item.classList.add(
          'tall-panel__card--contracted'
        );
      });

      card.classList.remove(
        'tall-panel__card--contracted'
      );

      card.classList.add(
        'tall-panel__card--expanded'
      );

    });

  });

  const container = document.querySelector(
    '.section-multicolumn-contact .custom-section-content'
  );

  container.addEventListener('mouseleave', () => {

    cards.forEach((item) => {

      item.classList.remove(
        'tall-panel__card--expanded',
        'tall-panel__card--contracted'
      );

    });

  });

});