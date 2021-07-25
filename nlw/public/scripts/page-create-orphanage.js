//Críando mapa
const map = L.map("mapid").setView([-27.2226333, -49.6455874], 13);

//Criando e adicionando "tileLayer"
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Criando ícones
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//Criando e adicionando marcador
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name = lat]").value = lat;
  document.querySelector("[name = lng]").value = lng;

  //remover todos os marcadores anteriores
  marker && map.removeLayer(marker)

  //adicionar icone ao mapa
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Criando e editando a função sobre o "Campo de fotos"
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-images
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
  //Conferindo se o campo está vazio, se sim, não adicionar ao contaier de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return
  }
  //Limpando o conteúdo do clone antes de adicionar ao container de imagens
  input.value = ""
  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //Limpar campo
    span.parentNode.children[0].value = "";
    return
  }

  //Deletar campo
  span.parentNode.remove();
}


// Configurando o botão de "Sim ou Não" na Div .button-select"
function toggleSelect(event) {
    // Retirar a classe ".active" dos botóes
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    //Colocar a classe ".active" no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    
    // Pegar o botão clicado
    
    // Atualizar o input escondido com o valoe selecionado
    const input = querySelector('[name="open-on-weekends"]')

    // Verificar se é Sim ou Não
    input.value = button.dataset.value
   
}
