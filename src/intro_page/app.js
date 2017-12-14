import '../assets/scss/app.scss';

// Start a redirect timer.

$(document).ready(function() {
  // Landing page redirect and timer.
  require('../assets/js/landingPageTimer.js');

  $('.intro-content').children('.image').delay(500).fadeIn(750);
});
