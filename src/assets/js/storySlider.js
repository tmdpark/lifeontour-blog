$('.story-slider').slick({
  infinite: false,
  arrows: false,
  dots: true,
  dotsClass: 'slick-thumb',
  autoplay: false,
  asNavFor: '.thumbnail-slider',
  mobileFirst: true,
  customPaging: function(index) {
    return generateThumbnail(index);
  }
});
