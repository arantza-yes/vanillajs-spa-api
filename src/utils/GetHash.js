// const getHash = () => location.hash.slice(1).toLocaleLowerCase() || '/';
// // debugger;
// export default getHash;

const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
// debugger;
export default getHash;
