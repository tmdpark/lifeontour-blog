/**
 * landingPageTimer.js
 * Source file for timer and redirect functionality
 * from the landing page.
 * @author Daniel Park <dpark@travismathew.com>
 */

var redirectCount = 5;
var redirectTimer = setInterval(startRedirectTimer, 1000);
function startRedirectTimer() {
  redirectCount = redirectCount - 1;
  if (redirectCount <= 0) {
    clearInterval(redirectTimer);
    $a.animsition('out', $(this), 'landing_page.html');
  }
  $('#timerText').html("Redirecting in " + redirectCount);
}
