'use strict';

function initMap() {

    var myLatLng = {
        lat: 37.782293,
        lng: -122.391240
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'GitHub'
    });

}

$(function () {

    var $toggle = $('.toggle');
    var $toggleBtn = $('#toggle-btn');
    var $signInput = $('.sign-form input');

    $toggleBtn.on('click', function () {
            $toggle.toggleClass('on');
    });

    $(window).on('resize', function () {
        if ($(this).width() > 1020) $toggle.removeClass('on');
    });

    $signInput.on('keydown', function (event) {
        if (event.which === 13) $(event.target).parent().next().find('input').focus();
    });

});