// Modelo de datos
//La información de
// las películas se modela
// mediante un array en el que 
//cada película consiste en un objeto con las siguientes claves:

let tres_primeras =[
    {titulo: "Superlopez", director: "Javier Ruiz Caldera", "miniatura":"files/superlopez.png"},
    {titulo:"Jurassic Park", director:"Steven Spielberg", "miniatura":"files/jurassicpark.png"},
    {titulo:"Interstellar",director:"Christopher Nolan", "miniatura":"files/interstellar.png"},

];
localStorage.mis_peliculas = localStorage.mis_peliculas || JSON.stringify(tres_primeras);

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
                <button class = "new">añadir</button>
                <button class="reset">reset </button>
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
    <input type="text" id="titulo" placeholder ="Titulo">
    </div>

    <div class= "field">
    Director <br>
    <input type="text" id="director" placeholder ="Director">
    </div>

    <div class= "field">
    Miniatura <br>
    <input type="text" id="miniatura" placeholder ="URL de la imagen">
    </div>

    <div class="actions">
        <button class="crear" >Crear</button>
        <button class="index"> Volver</button>
    
    `;

}

//controladores
// Implementan la lógica de la aplicacion que permite actuar en función de las acciones del usuario.
const indexContr = () => {
    //acceder al array de películas y pasárselo a la vista indexView
    let mis_peliculas = JSON.parse (localStorage.mis_peliculas);
    document.getElementById('main').innerHTML = indexView(mis_peliculas);

};

const editContr = (i) => {
    let pelicula= JSON.parse(localStorage.mis_peliculas)[i];
    document.getElementById('main').innerHTML= editView(i,pelicula);

};
const updateContr =(i) => {
    let mis_peliculas= JSON.parse(localStorage.mis_peliculas);
    mis_peliculas[i].titulo = document.getElementById('titulo').value;
    mis_peliculas[i].director = document.getElementById('director').value;
    mis_peliculas[i].miniatura = document.getElementById('miniatura').value;
    localStorage.mis_peliculas = JSON.stringify(mis_peliculas);
    indexContr();
    
};
const showContr = () => {
    let mis_peliculas =JSON.parse(localStorage.mis_peliculas);
    document.getElementById('main').innerHTML = indexView(mis_peliculas);

};

const newContr = () => {
    document.getElementById('main').innerHTML = newView();
};

const createContr = () => {
    let mis_peliculas = JSON.parse(localStorage.mis_peliculas);
    var new_movie = {
        titulo: document.getElementById("titulo").value,
        director: document.getElementById("director").value,
        miniatura: document.getElementById("miniatura").value};
    mis_peliculas.push(new_movie);
    localStorage.mis_peliculas= JSON.stringify(mis_peliculas);
    indexContr();




};

const deleteContr = (i) => {
    let mis_peliculas = JSON.parse(localStorage.mis_peliculas);
    var r = confirm ("Confirma eliminación?");
    if (r == true) {
        mis_peliculas.splice(i,1);
        localStorage.mis_peliculas= JSON.stringify(mis_peliculas);
        indexContr();
    } else {
        indexContr();

    }
};

const resetContr = () => {

    localStorage.mis_peliculas=JSON.stringify(mis_peliculas);
    indexContr();

};


//Router
//asociar los eventos de clic del usuario con los controladores adecuados

const matchEvent = (ev,sel) => ev.target.matches(sel);
const myId = (ev) => Number(ev.target.dataset.myId);

document.addEventListener('clic', ev=>{
    if (matchEvent(ev,'.index')) indexContr();
    else if (matchEvent(ev,'.edit')) editContr (myId(ev));
    else if (matchEvent(ev,'.update')) updateContr(myId(ev));
    else if (matchEvent(ev,'.show')) showContr(myId(ev));
    else if (matchEvent(ev,'.new')) newContr(myId(ev));
    else if (matchEvent(ev,'.create')) createContr(myId(ev));
    else if (matchEvent(ev,'.delete')) deleteContr(myId(ev));
    else if (matchEvent(ev,'.reset')) resetContr(myId(ev));


})


document.addEventListener('DOMContentLoaded', indexContr);




