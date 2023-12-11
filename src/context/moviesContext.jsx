import { createContext, useState } from "react";

export const moviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  // Lista de películas en el buscador
  const [movies, setMovies] = useState({});
  // Modal para mostrar información de las películas
  const [moviesInfoModal, setMoviesInfoModal] = useState(false);
  // Información de la película seleccionada
  const [infoMovie, setInfoMovies] = useState({});
  // Lista de películas mostradas en la página
  const [searchedMovies, setSearchedMovies] = useState({});
  // Controlar el modal en caso de error
  const [errorStatus, setErrorStatus] = useState(false);

  const openModalHandler = () => setMoviesInfoModal(true);

  const closeModalHandler = () => setMoviesInfoModal(false);

  const errorStatusHandler = () => setErrorStatus((prev) => !prev);

  // Guardar películas para mostrarlas en la página
  const searchHandler = () => {
    setSearchedMovies(movies);
  };

  return (
    <moviesContext.Provider
      value={{
        movies,
        setMovies,
        searchHandler,
        searchedMovies,
        setSearchedMovies,
        moviesInfoModal,
        openModalHandler,
        closeModalHandler,
        infoMovie,
        setInfoMovies,
        errorStatus,
        errorStatusHandler,
      }}
    >
      {children}
    </moviesContext.Provider>
  );
};
