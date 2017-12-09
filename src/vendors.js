/**
 * vendors.js
 * Load common libraries that all pages will use in this file.
 * @author Daniel Park <dpark@travismathew.com>
 */

window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
require('./assets/js/animsition.js');
window.$a = $('.animsition');
require('slick-carousel/slick/slick.js');
$a.animsition({
  inClass: 'fade-in-left-sm',
  outClass: 'fade-out-right-sm',
  inDuration: 1000,
  outDuration: 800,
  linkElement: '.animsition-link',
  // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
  loading: true,
  loadingParentElement: 'body', //animsition wrapper element
  loadingClass: 'animsition-loading',
  loadingInner: '', // e.g '<img src="loading.svg" />'
  timeout: false,
  timeoutCountdown: 5000,
  onLoadEvent: true,
  browser: [
    'animation-duration', '-webkit-animation-duration'
  ],
  // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
  // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
  overlay: false,
  overlayClass: 'animsition-overlay-slide',
  overlayParentElement: 'body',
  transition: function(url) {
    window.location.href = url;
  }
});
