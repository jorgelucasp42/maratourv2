let map;

function initMap(latitude, longitude) {
    const location = { lat: latitude, lng: longitude };

    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 10
    });

    new google.maps.Marker({
        position: location,
        map: map,
        title: "Localização do Destino"
    });
}
