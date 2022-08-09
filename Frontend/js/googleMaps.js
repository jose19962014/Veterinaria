
  var vMarker;
  var map;
  map = new google.maps.Map(document.getElementById("map_canvas"), {
    zoom: 14,
    center: new google.maps.LatLng(9.9280694, -84.0907246),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  vMarker = new google.maps.Marker({
    position: new google.maps.LatLng(9.9280694,-84.0907246),
    draggable: true,
  });



  google.maps.event.addListener(vMarker, "dragend", function (evt) {
    document.querySelector("#txtLat").value = (evt.latLng.lat().toFixed(6));
    document.querySelector("#txtLng").value = (evt.latLng.lat().toFixed(6));


    map.panTo(evt.latLng);
  });


  map.setCenter(vMarker.position);
  vMarker.setMap(map);


function movemap(lat ,long){
   var latlng = new google.maps.LatLng(lat, long);
    vMarker.setTitle("Latitude:"+lat+" | Longitude:"+long);
    vMarker.setPosition(latlng);
    map.panTo(
      new google.maps.LatLng(latlng
        
      )
    );
}


function movePin() {
  var geocoder = new google.maps.Geocoder();
  var inputAddress = document.querySelector("#txtDireccion").value;
  geocoder.geocode(
    {
      address: inputAddress,
    },
    function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        vMarker.setPosition(
          new google.maps.LatLng(
            results[0].geometry.location.lat(),
            results[0].geometry.location.lng()
          )
        );
        map.panTo(
          new google.maps.LatLng(
            results[0].geometry.location.lat(),
            results[0].geometry.location.lng()
          )
        );
        document.querySelector("#txtLat").value = (results[0].geometry.location.lat());
        document.querySelector("#txtLng").value = (results[0].geometry.location.lng());

      }
    }
  );
}


