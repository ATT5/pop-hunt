import { moviesContext } from "../context/moviesContext";
import MockMovies from "../mocks/movies.json";
import Poster from "./Poster";
import { useContext } from "react";

//Este componente muestra una lista de películas

const MoviesList = () => {
  const { searchedMovies } = useContext(moviesContext);

  // Selecciona la lista de películas buscadas o la lista simulada si no hay resultados de búsqueda.
  let moviesList = searchedMovies.Search ? searchedMovies.Search : MockMovies;

  return (
    <main className="bg-[#081519] flex flex-col items-center justify-center text-gray-400">
      <section className=" flex justify-around w-full pt-20">
        <ul className="flex flex-wrap justify-around w-full px-5 h-full mb-5">
          {moviesList.map((movie) => (
            <Poster movie={movie} key={movie.imdbID} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default MoviesList;
