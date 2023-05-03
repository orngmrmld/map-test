// function initMap() {
//     var center = {lat: 51.507351, lng: -0.127758};
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 10,
//       center: center
//     });
    
//     var input = document.getElementById('searchTextField');

//     let autocomplete = new google.maps.places.Autocomplete(input);

//     autocomplete.bindTo('bounds',map);

//     var marker = new google.maps.Marker({
//       position: center,
//       map: map
//     });
//   }

// var geocoder;
// var map;
// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(-34.397, 150.644);
//   var mapOptions = {
// 	zoom: 8,
// 	center: latlng
//   }
//   map = new google.maps.Map(document.getElementById('map'), mapOptions);
// }

// function codeAddress() {
//   var address = document.getElementById('address').value;
//   geocoder.geocode( { 'address': address}, function(results, status) {
// 	if (status == 'OK') {
// 	  map.setCenter(results[0].geometry.location);
// 	  var marker = new google.maps.Marker({
// 		  map: map,
// 		  position: results[0].geometry.location
// 	  });
// 	} else {
// 	  alert('Geocode was not successful for the following reason: ' + status);
// 	}
//   });
// }
