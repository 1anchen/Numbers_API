const NumberFormView = require('./views/number_form_view');
const Info = require('./models/info');
const DisplayView = require('./views/display_view');

document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const info = new Info();
  info.bindEvents();

  const section = document.querySelector('section#number-fact');
  const displayView = new DisplayView(section);
  displayView.bindEvents();
});
