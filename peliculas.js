// Modelo de datos
//La información de
// las películas se modela
// mediante un array en el que 
//cada película consiste en un objeto con las siguientes claves:

let mis_peliculas =[
    {titulo: "Superlopez", director: "Javier Ruiz Caldera", "miniatura":"files/superlopez.png"},
    {titulo:"Jurassic Park", director:"Steven Spielberg", "miniatura":"files/jurassicpark.png"},
    {titulo:"Interstellar",director:"Christopher Nolan", "miniatura":"files/interstellar.png"},

];
localStorage.mis_peliculas = localStorage.mis_peliculas || JSON.stringify(mis_peliculas);

// Vistas
//Las vistas generan
// el código HTML que se 
//inserta en el bloque `<div id=“main”></div>`, como respuesta a los eventos que la aplicación recibe. Son funciones JavaScript que generan dinámicamente el código HTML de cada pantalla de la aplicación en función de los parámetros recibidos. Las vistas con las que cuenta 
//la aplicación son las siguientes:

const indexView = (peliculas) => {
    let i=0;
    let view = "";

    while(i< peliculas.length){
        view +=`

            <div class ="movie">
                <div class="movie-img">
                    <img data-my-id="${i}" src="${peliculas[i].miniatura}" oneerror= "this.src='files/placeholder.png'"/>
                </div>
                <div class="title">
                    ${peliculas[i].titulo || "<em>Sin título</em>"}
                </div>
                <div class ="actions">
                    <!-- Botones "Show" y "Delete"-->
                    <button class= "edit" data-my-id = "${i}">editar</button>

                </div>
            </div>\n`;
        
        i = i+1;
    
    };

    view += `<div class="actions">
                <!-- Botones "añadir" y "reset"-->
                <button class = "new" id="new" data-my-id="${i}">add movie</button>
                <button class="reset" id="reset" data-my-id="${i}">reset all</button>
            </div>`;
    return view;

};

const editView = (i, pelicula) => {
    return `<h2> Editar pelicula </h2>
        <div class="field">
        Titulo <br>
        <input type= "text" id="titulo" placeholder="titulo"
            value="${pelicula.titulo}">
        </div>
        <div class="field">

        Director <br>
        <input type="text" id="director" placeholder="director"
            value="${pelicula.director}">
        </div>

        <div class="field">
        Miniatura <br>
        <input type= "text" id="miniatura" placeholder="URL de la imagen"
            value="${pelicula.miniatura}">
        </div>

        <div class="actions">
            <button class="update" data-my-id="${i}">
                actualizar
            </button>
            <button class= "index">
                volver

            </button>
        </div>
        `;
}

const showView = (pelicula) => {
    
    return `<h2> informacion de la pelicula </h2>
    <div class = "field">
    <h3> Titulo </h3>
    <h1>${pelicula.titulo}</h1>
    </div>

    <div class="field">
    <h3> Director </h3>
    <h1> ${pelicula.director}</h1>
    </div>

    <div class="field">
    <h3>Miniatura</h3>
    <h1>${pelicula.miniatura}</h1>
    </div>

    <div class="actions">
        <button class= "index" id="volver">
            Volver
        </button>
    </div>

    `;


}

const newView = () => {

    return `<h2>crear pelicula</h2>

    <div class= "field">
    Titulo <br>
    <input type="text" id="titulo" placeholder ="titulo">
    </div>

    <div class= "field">
    Director <br>
    <input type="text" id="director" placeholder ="director">
    </div>

    <div class= "field">
    Miniatura<br>
    <input type="text" id="miniatura" placeholder ="URL de la imagen">
    </div>

    <div class="actions">
        <button class="create" id="create" >Crear</button>
        <button class="index" id="volver"> Volver</button>
    
    `;

}





