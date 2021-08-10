export const API = 'https://rickandmortyapi.com/api/character/';
//id es un paramatro y esta siendo usado en character con el gethash
const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API; // apiURl tiene id que es el hash que trae que id tiene, entonces si tiene id muestra la api + el id si no solo muestra toda la api que trae por defecto 20 personajes por pagina
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('fetch Error', error);
  }
};

// const requestTarget = document.querySelector('#content');
// // const itemContainer = document.querySelector('#content');

// const intersectionOptions = {
//   threshold: 1,
// };

// let loading = false;

// const onIntersect = ([entry]) => {
//   if (API && !loading && entry.isIntersecting) getData();
// };

// const cleanUp = (nextPage) => {
//   API = nextPage;
//   loading = false;
// };
// cleanUp(info.next);

// let observer = new IntersectionObserver(onIntersect, intersectionOptions);

// observer.observe(requestTarget);
//PAGINACION

// const requestTarget = document.querySelector('#content');
// const itemContainer = document.querySelector('#next');
// const intersectionOptions = {
//   threshold: 1,
// };

/*************************************************************************/

// let apiUrl = 'https://rickandmortyapi.com/api/character';
// let loading = false;

// const onIntersect = ([entry]) => {
//   if (apiUrl && !loading && entry.isIntersecting) makeRequest();
// };

// const makeRequest = () => {
//   loading = true;
//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       cleanUp(data.info.next);
//       renderItems(data.results);
//     });
// };

// const cleanUp = (nextPage) => {
//   apiUrl = nextPage;
//   loading = false;
// };

// const renderItems = (results) => {
//   results.forEach((item) => {
//     itemContainer.appendChild(createItem(item));
//   });
// };

// const createItem = (item) => {
//   const newItem = document.createElement('div');
//   newItem.classList.add('item');
//   newItem.innerHTML = `
//             <div class="char-id">${item.id}</div>
//             <div class="char-name">${item.name}</div>
//             <img class="char-img" src=${item.image} />
//             <div class="char-species">${item.species}</div>
//         `;
//   return newItem;
// };

// let observer = new IntersectionObserver(onIntersect, intersectionOptions);

// observer.observe(requestTarget);

export default getData;
