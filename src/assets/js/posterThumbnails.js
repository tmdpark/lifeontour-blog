const contentObj = [
  {
    defaultThumbnail: '/media/images/default_thumbnails/jamesblake_thumb.jpg',
    hoverThumbnail: '/media/images/hover_thumbnails/jamesblake_thumb.jpg'
  },
  {
    defaultThumbnail: '/media/images/default_thumbnails/jamesblake_thumb.jpg',
    hoverThumbnail: '/media/images/hover_thumbnails/jamesblake_thumb.jpg'
  },
  {
    defaultThumbnail: '/media/images/default_thumbnails/jamesblake_thumb.jpg',
    hoverThumbnail: '/media/images/hover_thumbnails/jamesblake_thumb.jpg'
  },
  {
    defaultThumbnail: '/media/images/default_thumbnails/jamesblake_thumb.jpg',
    hoverThumbnail: '/media/images/hover_thumbnails/jamesblake_thumb.jpg'
  },
  {
    defaultThumbnail: '/media/images/default_thumbnails/jamesblake_thumb.jpg',
    hoverThumbnail: '/media/images/hover_thumbnails/jamesblake_thumb.jpg'
  },
];

function generateThumbnail(index) {
  if (index >= 0) {
    var $div = $('<div>');
    var $poster = $('<a>', {
      href: '/',
      class: 'slider-poster'
    })
    .append($('<figure>', {
      class: 'poster-img'
    })
    .append($('<div>', {
      class: 'default-poster',
      css: {
        'background-image': 'url('+ contentObj[index].defaultThumbnail +')'
      }
    }))
    .append($('<div>', {
      class: 'hover-poster',
      css: {
        'background-image': 'url('+ contentObj[index].hoverThumbnail +')'
      }
    }))
    .append($('<figcaption>', {
      class: 'story-info'
    })
    .append($('<h4>', {
      class: 'story-intro'
    }))
    .append($('<p>', {
      class: 'story-title'
    }))));
    return $($div).append($poster);
  }
}

// Select the thumbnail slider
$thumbnailSlider = $('.thumbnail-slider');
// Append the appropriate divs with content.
$.each(contentObj, function( index ) {
  $($thumbnailSlider).append(generateThumbnail(index));
}, contentObj);
