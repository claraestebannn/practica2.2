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

const indexView (peliculas)

const editView (i, pelicula)
const showView(pelicula)
const newViev()



