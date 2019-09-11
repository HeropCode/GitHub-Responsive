(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
  const $toggleBtn = document.getElementById('toggle-btn'); // Return Element
  
  $toggleBtn.addEventListener('click', function () {
    onToggleElement();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1020) {
      offToggleElement();
    }
  });

  function onToggleElement() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  function offToggleElement() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }
})(window, document);