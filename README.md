# GitHub Main Page

GitHub 사이트의 메인 페이지를 반응형으로 작업합니다.

## Example

[GitHub Responsive 예제](https://heropcode.github.io/GitHub-Responsive/)

## Text

```
Personal
Open source
Business
Explore

Pricing
Blog
Support

How people build software
Millions of developers use GitHub to build personal projects, support their businesses, and work together on open source technologies.

Use at least one letter, one numeral, and seven characters.
By clicking "Sign up for GitHub", you agree to our terms of service and privacy policy. We'll occasionally send you account related emails.

Welcome home, developers
GitHub fosters a fast, flexible, and collaborative development process that lets you work on your own or with others.

For everything you build
Host and manage your code on GitHub. You can keep your work private or share it with the world.

A better way to work
From hobbyists to professionals, GitHub helps developers simplify the way they build software.

Millions of projects
GitHub is home to millions of open source projects. Try one out or get inspired to create your own.

One platform, from start to finish
With hundreds of integrations, GitHub is flexible enough to be at the center of your development process.

Where is GitHub?
GitHub is where people build software. More than 18 million people use GitHub to discover, fork, and contribute to over 48 million projects.

Public projects are always free. Work together across unlimited private repositories for $7 / month.

© 2016 GitHub, Inc.
Terms
Privacy
Security
Status
Help

Contact GitHub
API
Training
Shop
Blog
About
```

### Video link

```
https://www.youtube.com/watch?v=afvT1c1ii0c
```

## Code

### `index.html`

'Google Map API' 를 호출하세요.  
`YOUR_API_KEY` 에 아래의 'API KEY' 를 입력하세요.('KEY' 정보는 변경될 수 있습니다!)

```
AIzaSyCTQIlxBn5AfKGvsfJiormAE1esN3fcCkg
```

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
```

'SVG' 이미지를 코드로 입력하세요.

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 16 16" fill="#ccc">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
</svg>
```

### `main.js`

#### Insert Google Map.

`initMap` 함수에 'Google Map' 에서 사용할 'Option' 을 입력하세요.

```js
function initMap() {

    // 위도(Latitude), 경도(Longitude)
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
```

#### Write JavaScript code.

```js
$(function () {

    $('#toggle-btn').on('click', function () {
        $('.toggle').toggleClass('on');
    });

    $(window).on('resize', function () {
        if ($(this).width() > 1020) {
            $('.toggle').removeClass('on');
        }
    });

    $('.sign-form input').on('keydown', function (event) {
        if (event.which === 13) {
            event.preventDefault();
            $(event.target).parent().next().find('input, button').focus();
        }
    });
});
```

## Media(Grid) options

> 디바이스 종류에 따른 단위는 '기획 / 디자인' 단계에서 결정하는 것이 효과적입니다.

| 종류 | 디바이스 | 단위(px) |
|:---:|:---:|:---:|
| Large Devices | Desktops | 1201px 이상 |
| Medium Devices | Desktops + Tablets | 1200px 이하 |
| Small Devices | Tablets | 992px 이하 |
| Extra Small Devices | Phones | 768px 이하 |
