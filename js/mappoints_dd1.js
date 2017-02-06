function initialize() {
var kiev = new google.maps.LatLng(50.4019514,30.3926095)
var donbass = new google.maps.LatLng(50.1653915,30.309922)
var minsk = new google.maps.LatLng(53.8838069,27.4548934)
var lukansk = new google.maps.LatLng(48.5800428,39.2869283)
var crimea = new google.maps.LatLng(45.3023464,33.4424405)

var myOptions = {
zoom: 10,
center: kiev,
mapTypeId: google.maps.MapTypeId.HYBRID
 };
var map = new google.maps.Map(
 document.getElementById("map_canvas"),
 myOptions);

 var kievMarker = new google.maps.Marker({
 position: kiev,
 title:"Kiev"
 });
 kievMarker.setMap(map);

 var donbassMarker = new google.maps.Marker({
 position: donbass,
 title:"Donbass"
 });
 donbassMarker.setMap(map);
 }
