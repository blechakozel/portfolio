function initialize() {
var map;
      function initalize() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.99365940933694, lng: 13.59859695434567},
          zoom: 13
        });
      }
styles:[
  {
    "featureType": "administrative.locality",
    "stylers": [
      {
        "color": "#000080"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "stylers": [
      {
        "color": "#ff0000"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text",
    "stylers": [
      {
        "saturation": 5
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "stylers": [
      {
        "color": "#b4e47e"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#ff0000"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  }
]



