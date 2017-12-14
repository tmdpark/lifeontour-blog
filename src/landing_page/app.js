import '../assets/scss/app.scss';

$(document).ready(function() {
  var animatedElements = ['.animated-label', '.animated-episode', '.animated-title'];

  function handleSliderTextAnimations(elements) {
    elements[0].addClass('animated fadeInLeft')
    elements[1].addClass('animated fadeInLeft');
    elements[2].addClass('animated fadeInUp')
  }

  function resetAnimationClasses(elements) {
    elements[0].removeClass('animated fadeInLeft')
    elements[1].removeClass('animated fadeInLeft');
    elements[2].removeClass('animated fadeInUp')
  }

  function onInit() {
    var $currentSlide = $('.slick-current').eq(0);
    var $currentElements = animatedElements.map(function(element) {
      return $currentSlide.find(element);
    });
    console.log($currentElements);
    handleSliderTextAnimations($currentElements);
  }

  function onBefore() {
    var $currentSlide = $('.slick-current').eq(0);
    var $currentElements = animatedElements.map(function(element) {
      return $currentSlide.find(element);
    });
    resetAnimationClasses($currentElements);
  }

  function onAfter() {
    var $currentSlide = $('.slick-current').eq(0);
    var $currentElements = animatedElements.map(function(element) {
      return $currentSlide.find(element);
    });
    handleSliderTextAnimations($currentElements);
  }

  var $slickSlider = $('.landingpage-slider').slick({
    infinite: false,
    arrows: false,
    dots: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    asNavFor: '.thumbnail-slider'
  });

  var $thumbnailSlider = $('.thumbnail-slider').slick({
    infinite: false,
    slidesToShow: 5,
    arrows: false,
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    asNavFor: '.story-slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          draggable: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          draggable: true
        }
      }
    ]
  });

  onInit();

  $slickSlider.on('afterChange', function(event, slick, direction) {
    onAfter();
  });

  $slickSlider.on('beforeChange', function(event, slick, direction) {
    onBefore();
  });
});
