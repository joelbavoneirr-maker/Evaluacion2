const PersonajesSeccion = document.querySelector("#lista-personajes"); 
const apiURL = "https://rickandmortyapi.com/api/character"; 
let personajes = [];
const buscador = document.querySelector("#buscador");


async function obtenerPersonajes() {
    const respuesta = await fetch(apiURL);
    const datos = await respuesta.json();

    console.log(datos);

    return datos.results
}



function renderPersonajes(listaPersonajes) {
console.log(personajes);
let template = ""; 
 
listaPersonajes.forEach((personaje) => {
        template += ` 
            <div class="tarjeta-personaje"> 
                <h3>${personaje.name}</h3>
                <img src="${personaje.image}" alt="${personaje.name}">
                <p><strong>Estado:</strong> ${personaje.status}</p>
                <p><strong>Especie:</strong> ${personaje.species}</p>
                <p><strong>Género:</strong> ${personaje.gender}</p>
                <p><strong>Origen:</strong> ${personaje.origin.name}</p>
                <p><strong>Última ubicación:</strong> ${personaje.location.name}</p>
                <p><strong>Episodios:</strong> ${personaje.episode.length}</p>
            </div>
        `; 
    }); 
PersonajesSeccion.innerHTML = template; 
} 
 


async function iniciar() {
    personajes = await obtenerPersonajes();
    renderPersonajes(personajes);
}


iniciar();



function filtrarPersonajes() {
    const texto = buscador.value.toLowerCase();
    const personajesFiltrados = personajes.filter((personaje) => {
    return personaje.name.toLowerCase().includes(texto);

});


renderPersonajes(personajesFiltrados);


}
buscador.addEventListener("input", filtrarPersonajes);