(function (window, document) {
  'use strict';

  const $toggle = document.querySelectorAll('.toggle');
  const $toggleBtn = document.querySelector('#toggle-btn');
  const $signForm = document.querySelector('.sign-form');
  const $signInput = $signForm.querySelector('input[type=text]');
  const $signSubmit = $signForm.querySelector('input[type=submit]');
  
  $toggleBtn.addEventListener('click', function () {
    $toggle.forEach(function (toggle) {
      toggle.classList.toggle('on');
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1200) {
      $toggle.forEach(toggle => {
        toggle.classList.remove('on');
      });
    }
  });

  $signInput.addEventListener('keydown', function (event) {
    if (event.which === 13) { // ENTER key
      event.preventDefault();
      $signSubmit.focus();
    }
  })
})(window, document)