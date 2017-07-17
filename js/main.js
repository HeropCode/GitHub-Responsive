$(function () {
  'use strict';

  var $toggle = $('.toggle');
  var $toggleBtn = $('#toggle-btn');
  var $signInput = $('.sign-form input');

  // '햄버거 버튼'을 클릭했을 경우
  $toggleBtn.on('click', function () {
    $toggle.toggleClass('on');
  });

  // 브라우저의 사이즈가 변경될 때
  // 사이즈가 1200px 이상 일 경우 '메뉴' 보임
  $(window).on('resize', function () {
    if ($(this).width() > 1200) $toggle.removeClass('on');
  });

  // `<input>` 에서 `tab`가 아닌 `enter`를 눌렀을 때
  // 다음 `<input>`으로 넘어가도록 설정
  $signInput.on('keydown', function (event) {
    if (event.which === 13) {
      event.preventDefault();
      $(event.target).parent().next().find('input, button').focus();
    }
  });

});