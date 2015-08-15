import '../css/normalize.css';
import '../css/style.css';

import $ from 'jquery';

$(function() {
  $('.border').click(() => {
    $('.left').toggleClass('left-hide');
    $('.right').toggleClass('right-half');
    $('.right').toggleClass('right-full');
    $('.toggle').toggleClass('toggle-right');
    $('.toggle').toggleClass('toggle-left');
  });
});
