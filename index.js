//RESUELVE TUS EJERCICIOS AQUI
const API_DOGS_ALL = new URL("https://dog.ceo/api/breeds/list/all");
const API_DOGS_RANDOM = new URL("https://dog.ceo/api/breeds/image/random");

// Ejercicios asincronía
// Ejercicio 1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro
// La función devuelve todas las razas de perro
const razas1 = [];

async function getAllBreeds() {
    try {
        const res = await fetch(API_DOGS_ALL);
        const data = await res.json();
        const razas = Object.keys(data.message);
        return razas;
    } catch (error) {
        console.error("Error al obtener las razas:", error);
        return []; // En caso de error, devolvemos un array vacío
    }
}

// Ejemplo de uso:
getAllBreeds().then(razas => {
    console.log("------------------- Ejer 1 -------------------");
    console.log("Razas de perros:", razas);
});


// Ejercicio 2.- Obten una imagen random de una raza
// La función devuelve una imagen de un perro
async function getRandomDog() {
    const response = await fetch(API_DOGS_RANDOM);
    const data = await response.json();
    return data.message; // URL de la imagen
}


getRandomDog("beagle").then(messages  => {
    console.log("------------------- Ejer 2 -------------------");
    console.log("Razas de perros:", messages);
}); 

// Ejercicio 3.- Obten todas las imágenes de la raza komondor
// La función devuelve todas las fotos de la raza komondor
function getAllImagesByBreed() 
{
    return axios
      .get(`https://dog.ceo/api/breed/komondor/images`)
      .then((response) => response.data.message);
}
  
getAllImagesByBreed().then(images => {
    console.log("---------------- Ejer 3 -----------------");
    console.log(images); // Muestra todas las imágenes de komondor
});

// Ejercicio 4.- Obten las imagenes de una raza pasada como argumento a la función
// La función devuelve todas las fotos de una raza pasada como argumento
// API gitHub
async function getAllImagesByBreed2(breed) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    return data.message; // Array de URLs de imágenes
}

getAllImagesByBreed2('beagle').then(images => {
    console.log("---------------- Ejer 4 -----------------");
    console.log(images); // muestra todas las imágenes de beagle
});


// Ejercicio 5.- La función busca usuarios correctamente en la API de gitHub
async function getGitHubUserProfile(username){
   const response = await fetch(`https://api.github.com/users/${username}`);
   const data = await response.json();
   return data; 
}

getGitHubUserProfile('octocat').then(profile => {
    console.log("---------------- Ejer 5 -----------------");
    console.log(profile); 
});

// 6.- Declara una función **printGithubUserProfile(username)** que reciba como argumento el nombre 
// de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.
async function printGithubUserProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Usuario no encontrado');

        const data = await response.json();
        const userInfo = {
            img: data.avatar_url,
            name: data.name
        };

        // Pintar en el DOM
        const img = document.createElement('img');
        img.src = userInfo.img;
        img.alt = `Avatar de ${userInfo.name}`;
        img.width = 150;

        const name = document.createElement('h2');
        name.textContent = userInfo.name;

        document.body.appendChild(img);
        document.body.appendChild(name);

        return userInfo; // ← importante para que el test lo pueda validar
    } catch (error) {
        console.error(error);
        return undefined; // Jasmine espera undefined si falla
    }
}

printGithubUserProfile('octocat').then(user => {
    console.log("---------------- Ejer 6 -----------------");
    console.log(user)
});

// Ejercicio 7.- La función devuelve una tarjeta con la info del usuario
// Promesas, promesas y más promesas
function getAndPrintGitHubUserProfile(username) {
    return getGitHubUserProfile(username).then((data) => {
      return `
            <section>
              <img src="${data.avatar_url}" alt="${data.name}">
              <h1>${data.name}</h1>
              <p>Public repos: ${data.public_repos}</p>
            </section>
          `;
    });
  }


// Ejercicio 8.- La función devuelve un array con la url y el nombre de cada usuario
 function fetchGithubUsers(usernames) {
  const promises = usernames.map((username) => {
    return axios.get(`https://api.github.com/users/${username}`).then((response) => ({
      name: response.data.name,
      html_url: `https://github.com/${username}`,
    }));
  });

  return Promise.all(promises);
}