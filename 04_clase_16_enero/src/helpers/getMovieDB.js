const getMovieDB = async () => {
    const apikey = "4ed8682099c1464af23d96c906f5ef45";
    const url =
      "https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=" +
      apikey;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const peliculas = data.results;

      return {peliculas}; // Es lo mismo que { peliculas: peliculas}
    } catch (e) {
      console.error(e);
    }
  };
  export default getMovieDB;
  