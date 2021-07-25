//Críando mapa
const map = L.map("mapid").setView([-27.2226333, -49.6455874], 13);

//Criando e adicionando "tileLayer"
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);



//Criando ícones
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});



function addMarker({id, name, lat, lng}) {
    
  //Criando Pop-up
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeigth: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"></a>`
  );
  console.log('oi')
  //Criando e adicionando marcador
  L.marker([lat,lng], { icon }).addTo(map).bindPopup(popup)

}


const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }

  addMarker(orphanage)
})