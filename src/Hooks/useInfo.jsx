import { useContext } from "react";
import { moviesContext } from "../context/moviesContext";

/**
 * Hook useInfo
 *
 * Este hook proporciona funciones para obtener información de películas
 * y gestionar el estado del modal y errores.
 */

const useInfo = () => {
  const {
    setInfoMovies,
    openModalHandler,
    closeModalHandler,
    errorStatusHandler,
  } = useContext(moviesContext);

  const fetchMovieInfo = async (el) => {
    try {
      const apiKey = "1f83c040";
      const url = `http://www.omdbapi.com/?s=&i=${el}&apikey=${apiKey}`;

      const fetchData = await fetch(url);

      if (!fetchData.ok) {
        throw new Error("Movie not found!");
      }

      const movieInfo = await fetchData.json();

      setInfoMovies(movieInfo);
    } catch (error) {
      console.error("Error:😏 ", error.message);
      // Cerrar el modal y activar el estado de error
      closeModalHandler();
      errorStatusHandler();
    }
  };

  const searchInfoHandler = async (movie) => {
    // Limpiar la información de la película
    setInfoMovies({});
    // Mostrar el modal
    openModalHandler();
    // Realizar la búsqueda de información
    await fetchMovieInfo(movie);
  };

  return { searchInfoHandler };
};

export default useInfo;
