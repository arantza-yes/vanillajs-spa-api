'use strict';
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import About from '../pages/About';
import getHash from '../utils/GetHash';
import resolveRoutes from '../utils/resolveRoutes';

// ROUTES TO BE RENDER
const routes = {
  '/': Home,
  '/:id': Character,
  '/about': About,
  '/contact': 'Contact',
};

//ROUTER
const router = async () => {
  // debugger;
  // stablishing templates to dom
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  // header.innerHTML += await Home();

  // CREAR LAS RUTAS DE LOS ID
  let hash = getHash();
  // debugger;
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();

  const images = document.querySelectorAll('.caja');

  const lazyImage = (entries, observer) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry) => {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        observer.disconnect();
        // console.log('load');
      });
  };

  images.forEach((img) => {
    const observer = new IntersectionObserver(lazyImage);
    observer.observe(img);
  });

  // INTERSERTIoNG OBSERVER
  const caja = document.querySelectorAll('.caja');
  const verify = (entries) => {
    entries.forEach((entry) => {
      const img = entry.target;
      const src = img.getAttribute('data-lazy');
      img.setAttribute('src', src);
      if (entry.isIntersecting) {
        console.log(entry.target, 'intersecteing');
        observer.unobserve(entry.target);
      }
    });
    // if (entries.isIntersecting) {
    //   console.log(entry.target.id, 'intersentadno');
    // }
  };

  const observer = new IntersectionObserver(verify);
  caja.forEach((element) => observer.observe(element));
};

export default router;
