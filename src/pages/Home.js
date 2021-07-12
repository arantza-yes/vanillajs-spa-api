'use strict';
import getData from '../utils/getData';

// let press = window.getElementById('#text');
// let dato;
// function filtra(id) {
//   return (id[1] = dato);
// }
// let filtrar;
const Home = async () => {
  const characters = await getData();
  const boton = null || document.getElementById('bt');

  boton.addEventListener('click', () => {
    // debugger;

    // dato = e.target.value;
    // FILTRAR TIENE TODO
    let filtrar = characters.results.filter(filtra);
    console.log(filtrar);
    document.getElementById(
      'content'
    ).innerHTML = `<div class="h-full mt-5 container mx-auto grid grid-cols-3 gap-4">
    ${filtrar
      .map(
        (character) => `
    <article class="mx-auto">
      <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </a>
    </article>
    `
      )
      .join('')}
    </div>`;

    function filtra(id) {
      let press =
        null ||
        document.getElementById('text').value.toLocaleLowerCase().slice(0, 4);
      let nom = id.name.toLocaleLowerCase().slice(0, 4);
      let ob = false;

      if (nom == press) {
        ob = true;
      }
      return ob;
    }
  });

  return `
    <div class="">
      <div class="h-full mt-5 container mx-auto grid grid-cols-3 gap-4">
      ${characters.results
        .map(
          (character) => `
      <article class="mx-auto">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
        </a>
      </article>
      `
        )
        .join('')}
      </div>
    </div>
  `;
};

export default Home;
