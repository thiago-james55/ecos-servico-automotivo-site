// Initialize and add the map
function initMap() {
    // The location of Uluru
    const ecos = { lat: -23.5393972, lng: -46.4507823 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: ecos,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: ecos,
      map: map,
    });
  }