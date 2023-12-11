import bgSearch from "../assets/bg-search.webp";
import { useState, useContext } from "react";
import { moviesContext } from "../context/moviesContext";
import SearchList from "./SearchList";
import useMovies from "../Hooks/useMovies";

/*
 Este componente maneja la búsqueda de películas, muestra una lista de opciones búsqueda
*/

const Search = () => {
  const { movies, searchHandler } = useContext(moviesContext);
  const { fetchMovies, error } = useMovies();

  const [inputValue, setInputValue] = useState("");

  const searchMovie = (e) => {
    const value = e.target.value;
    setInputValue(value);
    //solo hace la busqueda si hay valor en el input
    if (value.length > 0) fetchMovies(value.trim());
  };

  const handleSearch = () => {
    searchHandler();
    //limpia el input
    setInputValue("");
  };

  return (
    <section
      className="flex flex-col items-center justify-evenly w-full md:w-3/4 h-1/4 mx-auto rounded-b-xl bg-cover"
      style={{ backgroundImage: `url(${bgSearch})` }}
    >
      <div className="bg-black px-4 py-10 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <h1 className=" text-3xl font-medium text-[#e4e3dd] text-center">
          Search Movie:
        </h1>

        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="search movie"
          value={inputValue}
          className=" px-4 py-2 border border-gray-300 rounded bg-[#7c7c7c] "
          onChange={searchMovie}
        />
        <button
          className="bg-[#7c7c7c] ml-2 p-2 rounded-lg active:bg-gray-800"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {/* Muestra la lista de pelicuals */}
      {movies.Response === "True" && inputValue.length > 0 && (
        <SearchList movies={movies} />
      )}
      {/* Muestra falta de resultados en la busqueda */}
      {movies.Response === "False" && inputValue.length > 0 && (
        <div className=" bg-black text-gray-400 w-80 absolute top-60  p-3 rounded-md border-2 border-gray-400">
          <p className="text-center">Movie not found</p>
        </div>
      )}
      {/* Muestra mensaje de error al obtener las películas */}
      {error && (
        <div className="bg-red-500 text-white w-80 absolute top-60 p-3 rounded-md border-2 border-red-700">
          <p className="text-center">Problem getting movies</p>
        </div>
      )}
    </section>
  );
};

export default Search;
