var response


const btnbuscar=document.querySelector('#btnbuscar')

// Sincronizados
let url='https://rickandmortyapi.com/api/'
let url2=url+'character'
const contenedor = document.querySelector('.contenedor')
let personajes
jQuery.ajax('https://rickandmortyapi.com/api/', {
  success: function (response) {
    // obteniendo personajes
    jQuery.ajax(response.characters, {
      success: function (response) {
        console.log('Lista de personajes ', response)
        response.results.forEach(function(personaje) {
          contenedor.innerHTML = contenedor.innerHTML + `<div class="personaje">
            <img src="${personaje.image}" alt="" />
            <h3><strong>Nombre:</strong>${personaje.name}</h3>
            <h4><strong>Epecie:</strong>${personaje.species}</h4>
            <h4><strong>Estado:</strong>${personaje.status}</h4>
            <h4><strong>Sexo:</strong>${personaje.gender}</h4>
            <h4><strong>Origen:</strong>${personaje.origin.name}</h4>
          </div>`
        })
       
      },
    
      error: function(error) {
        console.error('Error trayendo personajes ', error)
      }
    })
  },
  error: function(error) {
    console.error('Error en el request', error)
  }
})

document.querySelector('#btnbuscar').addEventListener('click',buscarpersonaje)

  
function buscarpersonaje(event){
  contenedor.innerHTML = ''
  var buscar=document.querySelector('#buscar').value.toLowerCase()
  jQuery.ajax(url, {
  success: function (response) {
    // obteniendo personajes
    jQuery.ajax('https://rickandmortyapi.com/api/character?name=' + buscar,{
      success: function (response) {
        console.log('Lista de personajes ', response)
        response.results.forEach(function(personaje) {
          
           
            contenedor.innerHTML = contenedor.innerHTML + `<div class="personaje">
            <img src="${personaje.image}" alt="" />
            <h3><strong>Nombre:</strong>${personaje.name}</h3>
            <h4><strong>Epecie:</strong>${personaje.species}</h4>
            <h4><strong>Estado:</strong>${personaje.status}</h4>
            <h4><strong>Sexo:</strong>${personaje.gender}</h4>
            <h4><strong>Origen:</strong>${personaje.origin.name}</h4>
          </div>`
        })
      },
      error: function(error) {
        console.error('Error trayendo personajes ', error)
      }
    })
  },
  error: function(error) {
    console.error('Error en el request', error)
  }
})
}