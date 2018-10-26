ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.197813, 39.925111],
            zoom: 15,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #000; background-color: rgba(254,253,250,0.9); width: 130px; border-radius: 20%; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([59.197813, 39.925111], {
            hintContent: 'Советский проспект, д. 164',
            balloonContent: 'Советский проспект, д. 164',
            iconContent: 'Советский проспект, д. 164'
            }, {
            iconLayout: 'default#imageWithContent',
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50',
             iconImageHref: 'img/contact/1.png',
           
            iconImageSize: [38, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [28, 3],
            iconContentLayout: MyIconContentLayout
        });

    
    var myMapNext = new ymaps.Map('maps', {
            center: [59.136672, 38.009633],
            zoom: 15,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #000; background-color: rgba(254,253,250,0.9); width: 130px; border-radius: 20%; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.136672, 38.009633], {
            hintContent: 'Олимпийская, д. 2',
            balloonContent: 'Олимпийская, д. 2',
            iconContent: 'Олимпийская, д. 2'
            }, {
            iconLayout: 'default#imageWithContent',
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50',
             iconImageHref: 'img/contact/1.png',
            iconImageSize: [38, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [28, 10],
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects.add(myPlacemarkWithContent);

    myMapNext.geoObjects.add(myPlacemark);
});