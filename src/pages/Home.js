'use strict';
import getData, { API } from '../utils/getData';

// const next = document.getElementById('next');
// next.addEventListener('click', (e) => {});

window.addEventListener('scroll', () => {
  console.log(window.scrollY); //scrolled from top
  console.log(window.innerHeight); //visible part of screen
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    Home();
  }
});

const Home = async () => {
  // debugger;
  const characters = await getData();
  // console.log(characters);
  // const boton = null || document.getElementById('bt');
  const text = null || document.getElementById('text');

  text.addEventListener('input', (e) => {
    // debugger;
    let press = e.target.value.toLocaleLowerCase();
    // console.log(e.target.value);
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
        <img  src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </a>
    </article>
    `
      )
      .join('')}
    </div>`;

    function filtra(id) {
      // debugger;
      // e.value.toLocaleLowerCase().slice(0, 4);
      let nom = id.name.toLocaleLowerCase(); // r , i
      // let arr = nom.split('');
      let ob = false;
      let element = ''; //element-> ''       ------- nom -> rick
      // let contador = 0;
      for (let index = 0; index < nom.length; index++) {
        // debugger;
        element += nom[index]; //1-element-> 'r' ; 2->ri ;3->X  ------- nom -> rick
        if (element === press) {
          //press -> ri
          // r, i, c, k   = r -> true , i = i true
          // contador++;
          ob = true;
          document.getElementById('content-dos').style.display = `none`;
          break; // el break mata el loop cuando se cumpla la condicion del if
        } else {
          document.getElementById(
            'content-dos'
          ).innerHTML = `<div>no hay</div>`;
        }
        // debugger;
      }
      return ob;
    }
  });

  // const next = document.getElementById('next');
  // next.addEventListener('click', (e) => {
  //   console.log(e + 'me hiciste click');
  //   // debugger;
  //   // characters.info.next;
  // });

  // const requestTarget = document.getElementById('content');
  // // const itemContainer = document.querySelector('#content');

  // const intersectionOptions = {
  //   threshold: 1,
  // };

  // let loading = false;

  // const onIntersect = ([entry]) => {
  //   // debugger;
  //   if (API && !loading && entry.isIntersecting) makeRequest();
  // };

  // const makeRequest = () => {
  //   loading = true;
  //   cleanUp(characters.info.next);
  //   // renderItems(data.results);
  // };

  // const cleanUp = (nextPage) => {
  //   API = nextPage;
  //   loading = false;
  // };

  // let observer = new IntersectionObserver(onIntersect, intersectionOptions);

  // observer.observe(requestTarget);

  // function loadMore(param) {
  //   const view = `
  //   <div class="">
  //     <div class="h-full mt-5 container mx-auto grid grid-cols-3 gap-4">
  //     ${characters.results
  //       .map(
  //         (character) => `
  //     <article class="mx-auto">
  //       <a href="#/${character.id}/">
  //         <img class="caja" data-lazy="${character.image}" alt="${character.name}">
  //         <h2>${character.name}</h2>
  //       </a>
  //     </article>
  //     `
  //       )
  //       .join('')}
  //     </div>
  //   </div>
  //   ${characters.info.next}

  // `;
  //   return view;
  // }

  // loadMore(characters.info.next);

  // window.addEventListener('scroll', () => {
  //   console.log(window.scrollY); //scrolled from top
  //   console.log(window.innerHeight); //visible part of screen
  //   if (
  //     window.scrollY + window.innerHeight >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     loadMore();
  //   }
  // });

  // function loadMore() {
  //   // API = nextPage;
  //   document.getElementById(
  //     'content'
  //   ).innerHTML += `<div class="h-full mt-5 container mx-auto grid grid-cols-3 gap-4">
  //   ${characters.results
  //     .map(
  //       (character) => `
  //   <article class="mx-auto">
  //     <a href="#/${character.id}/">
  //       <img  src="${character.image}" alt="${character.name}">
  //       <h2>${character.name}</h2>
  //     </a>
  //   </article>
  //   `
  //     )
  //     .join('')}
  //   </div>`;
  // }

  // loadMore();

  const view = `
    <div class="">
      <div class="h-full mt-5 container mx-auto grid grid-cols-3 gap-4">
      ${characters.results
        .map(
          (character) => `
      <article class="mx-auto">
        <a href="#/${character.id}/">
          <img class="caja" data-lazy="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
        </a>
      </article>
      `
        )
        .join('')}
      </div>
    </div>
    
    `;
    return view;
    // ${characters.info.next}
};

export default Home;
