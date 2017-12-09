import '../assets/scss/life-on-tour.scss';

// function generateThumbnail(index) {
//   var contentObj = [
//     {
//       defaultThumbnail: '/media/images/default_thumbnails/jamesblake_thumb.jpg',
//       hoverThumbnail: '/media/images/hover_thumbnails/jamesblake_thumb.jpg'
//     },
//     {
//       defaultThumbnail: '/media/images/default_thumbnails/jamesblake_thumb.jpg',
//       hoverThumbnail: '/media/images/hover_thumbnails/jamesblake_thumb.jpg'
//     },
//     {
//       defaultThumbnail: '/media/images/default_thumbnails/jamesblake_thumb.jpg',
//       hoverThumbnail: '/media/images/hover_thumbnails/jamesblake_thumb.jpg'
//     },
//     {
//       defaultThumbnail: '/media/images/default_thumbnails/jamesblake_thumb.jpg',
//       hoverThumbnail: '/media/images/hover_thumbnails/jamesblake_thumb.jpg'
//     },
//     {
//       defaultThumbnail: '/media/images/default_thumbnails/jamesblake_thumb.jpg',
//       hoverThumbnail: '/media/images/hover_thumbnails/jamesblake_thumb.jpg'
//     },
//   ];
//
//   if (index >= 0) {
//     var $poster = $('<a>', {
//       href: '/',
//       class: 'slider-poster'
//     })
//     .append($('<figure>', {
//       class: 'poster-img'
//     })
//     .append($('<div>', {
//       class: 'default-poster',
//       css: {
//         'background-image': 'url('+ contentObj[index].defaultThumbnail +')'
//       }
//     }))
//     .append($('<div>', {
//       class: 'hover-poster',
//       css: {
//         'background-image': 'url('+ contentObj[index].hoverThumbnail +')'
//       }
//     }))
//     .append($('<figcaption>', {
//       class: 'story-info'
//     })
//     .append($('<h4>', {
//       class: 'story-intro'
//     }))
//     .append($('<p>', {
//       class: 'story-title'
//     }))));
//     return $poster;
//   }
// }

$(document).ready(function() {
  $('.story-slider').slick({
    infinite: false,
    arrows: false,
    dots: false,
    draggable: false,
    dotsClass: 'slick-dots thumbnail-slides',
    autoplay: true,
    asNavFor: '.thumbnail-slider'
  });

  $('.thumbnail-slider').slick({
    infinite: false,
    arrows: false,
    dots: false,
    draggable: false,
    dotsClass: 'slick-dots thumbnail-slides',
    autoplay: true,
    asNavFor: '.story-slider'
  })

});
