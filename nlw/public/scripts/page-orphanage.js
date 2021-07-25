//Deixand o Mapa fixo e imutável
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// pegando os valores
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//Críando mapa
const map = L.map("mapid", options).setView([lat, lng], 13);

//Criando e adicionando "tileLayer"
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Criando ícones
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});



//Criando e adicionando marcador
L.marker([lat, lng], { icon }).addTo(map)

function selectImage(event) {
  const button = event.currentTarget

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass() {
    button.classList.remove("active")


  }

  //selecionar imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem
   imageContainer.src = image.src 

  //adicionar a classe .active para este botão
  button.classList.add('active')
}
