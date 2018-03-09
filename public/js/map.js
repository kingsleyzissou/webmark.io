function gmaps() {

  const victoria = {lat: -4.619, lng: 55.446};

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: victoria
  });

  const marker = new google.maps.Marker({
    position: victoria,
    map: map
  });

}