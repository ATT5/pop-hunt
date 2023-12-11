import { moviesContext } from "../context/moviesContext";
import MockMovies from "../mocks/movies.json";
import Poster from "./Poster";
import { useContext, useState } from "react";

//Este componente muestra una lista de películas

const MoviesList = () => {
  const { searchedMovies } = useContext(moviesContext);
  const [selectedType, setSelectedType] = useState("all");
  // Selecciona la lista de películas buscadas o la lista simulada si no hay resultados de búsqueda.
  let moviesList = searchedMovies.Search ? searchedMovies.Search : MockMovies;

  //filtra por tipo de contenido
  if (selectedType !== "all") {
    moviesList = moviesList.filter((movie) => movie.Type === selectedType);
  }

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <main className="bg-[#081519] flex flex-col items-center justify-center text-gray-400 relative">
      <select
        name="Type"
        id="content-type"
        className="absolute top-4 left-5 bg-background py-3 pl-5 rounded-lg"
        onChange={handleTypeChange}
      >
        <option value="all">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="game">Games</option>
      </select>

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
