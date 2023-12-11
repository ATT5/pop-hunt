import notAvailable from "../assets/not.webp";
import useInfo from "../Hooks/useInfo";

const SearchList = ({ movies }) => {
  const { searchInfoHandler } = useInfo();

  /*
Este componente muestra una lista de películas para la búsqueda.
 * Cada elemento de la lista es clickeable y llama a la función `searchInfoHandler`
para mostrar la infomacion de la pelicula 
*/

  return (
    <ul className="max-h-[500px] overflow-scroll overflow-x-hidden w-80 rounded-md absolute top-60 z-20 border-[1px] border-gray-400 ">
      {movies.Search.map((movie) => (
        <li
          key={movie.imdbID}
          className="flex items-center bg-black text-gray-400 gap-4 px-4 py-2 hover:bg-slate-300 hover:cursor-pointer"
          onClick={() => searchInfoHandler(movie.imdbID)}
        >
          <img
            src={movie.Poster === "N/A" ? notAvailable : movie.Poster}
            alt={movie.Title}
            width={40}
            height={50}
            className="object-cover"
          />
          <p>{movie.Title}</p>
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
