import '../css/normalize.css';
import '../css/style.css';

import $ from 'jquery';

$(function() {
  $('.border').click(() => {
    $('.wrapper').toggleClass('panel-hidden');
    $('.wrapper').toggleClass('panel-shown');
  });
});
