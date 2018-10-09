// npm install --save jquery bootstrap popper.js moment

import $ from 'jquery';
import moment from 'moment';
import bootstrap from 'bootstrap';

setInterval(() => {
  const strDate = moment().format('DD/MM/YYYY, HH:mm:ss');
  $('#current-time').html(strDate);
}, 1000);
