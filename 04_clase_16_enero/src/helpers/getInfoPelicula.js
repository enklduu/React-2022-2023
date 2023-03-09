
const getinfoPelicula = async (idPeli) => {
    const apikey = "4ed8682099c1464af23d96c906f5ef45";
    const url = `https://api.themoviedb.org/3/movie/${idPeli}?&language=es-es&api_key=${apikey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return {data};
    } catch (e) {
      console.error(e);
    }
  };
  export default getinfoPelicula;
  