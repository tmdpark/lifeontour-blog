import '../assets/scss/life-on-tour.scss';

// Start a redirect timer.

$(document).ready(function() {
  // Landing page redirect and timer.
  require('../assets/js/landingPageTimer.js');

  $('#introImg').delay(500).fadeIn(750);
});
