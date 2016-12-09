'use strict';

function initMap() {
    var myLatLng = {
        lat: 37.782293,
        lng: -122.391240
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 17
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'gitHub.com'
    });
}