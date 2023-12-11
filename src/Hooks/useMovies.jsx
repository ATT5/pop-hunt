import { useContext, useState } from "react";
import { moviesContext } from "../context/moviesContext";

/**
 * Hook useMovies
 *
 * Este hook proporciona funciones para buscar películas y manejar errores.
 */

const useMovies = () => {
  const { setMovies } = useContext(moviesContext);
  const [error, setError] = useState(null);

  const fetchMovies = async (el) => {
    try {
      const apiKey = "1f83c040";
      const url = `https://www.omdbapi.com/?s=${el}&page=1&apikey=${apiKey}`;

      const fetchData = await fetch(url);

      if (!fetchData.ok) {
        throw new Error("Movie not found!");
      }

      const movies = await fetchData.json();

      setMovies(movies);

      setError(null);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error);
    }
  };

  return { fetchMovies, error };
};

export default useMovies;
