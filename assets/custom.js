$(document).ready(function() {
  if ($.fn.zoom) {
    $('.image-block').zoom({
      url: 'xbox-image.png'
    });
  } else {
    console.log("Zoom plugin not loaded");
  }
});