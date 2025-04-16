//RESUELVE TUS EJERCICIOS AQUI
// Ejercicios asincronía
// Ejercicio 1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro
// La función devuelve todas las razas de perro
const razas1 = [];

function getAllBreeds()
{
    fetch('https://dog.ceo/api/breeds/list/all')
        .then((res) => res.json())
        .then(data => {
            const razas = Object.keys(data.message);
            console.log("Razas de perros1:", razas);
            // return razas;
        })
        .catch((err) => console.error(err))

}


// Ejercicio 2.- Obten una imagen random de una raza
// La función devuelve una imagen de un perro
// Ejercicio 3.- Obten todas las imágenes de la raza komondor
// La función devuelve todas las fotos de la raza komondor
// Ejercicio 4.- Obten las imagenes de una raza pasada como argumento a la función
// La función devuelve todas las fotos de una raza pasada como argumento
// API gitHub
// Ejercicio 6.- La función pinta la info del usuario
// Ejercicio 5.- La función busca usuarios correctamente en la API de gitHub
// Ejercicio 7.- La función devuelve una tarjeta con la info del usuario
// Promesas, promesas y más promesas
// Ejercicio 8.- La función devuelve un array con la url y el nombre de cada usuario