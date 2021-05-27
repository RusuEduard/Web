$(document).ready(function () {

  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  var $slider = $("#slider");
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');
  var $nextBtn = $(".Next");
  var $prevBtn = $(".Prev");

  var interval;

  function startSlider() {
    interval = setInterval(function () {
      $slideContainer.animate({
        "margin-left": "-=" + width
      }, animationSpeed, function () {
        currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css({
            "margin-left": "0"
          });
        }
      });
    }, pause);
  }

  startSlider();

  function stopSlider() {
    clearInterval(interval);
  }

  $nextBtn.click(function () {
    stopSlider();
    $slideContainer.animate({
      "margin-left": "-=" + width
    }, animationSpeed, function () {
      currentSlide++;
      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css({
          "margin-left": "0"
        });
      }
    });
    startSlider();
  });

  $prevBtn.click(function () {
    stopSlider();
    if (currentSlide == 1) {
      currentSlide = $slides.length;
      $slideContainer.css({
        "margin-left": -width * (currentSlide - 1)
      });
    }
    $slideContainer.animate({
      "margin-left": "+=" + width
    }, animationSpeed)
    currentSlide--;
    startSlider();
  });

});