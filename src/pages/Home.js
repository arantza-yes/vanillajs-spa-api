import getData from '../utils/getData';

// let press = window.getElementById('#text');
const press = null || document.getElementById('text');

press.addEventListener('keypress', (e) => {
  console.log(e.target.value);
});

const Home = async () => {
  const characters = await getData();

  const view = `
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
  return view;
};

export default Home;
