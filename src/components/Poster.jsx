import notAvailable from "../assets/not.webp";
import useInfo from "../Hooks/useInfo";

/*
Este componente representa un póster de película y maneja la lógica de clic para
obtener información detallada de la película. 
*/

const Poster = ({ movie }) => {
  const { searchInfoHandler } = useInfo();

  const handleClick = (imdbID) => {
    searchInfoHandler(imdbID);
    // Desplazarse  hacia la parte superior de la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <li
        className="flex flex-col items-center gap-2  w-[40%] md:w-[200px] py-2 cursor-pointer transition-transform transform hover:scale-110 ease-in-out shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        key={movie.imdbID}
        onClick={() => handleClick(movie.imdbID)}
      >
        <img
          src={movie.Poster === "N/A" ? notAvailable : movie.Poster}
          alt={movie.Title}
          className="w-full h-full rounded-md"
        />
        {movie.Poster === "N/A" && <p>{movie.Title}</p>}
      </li>
    </>
  );
};

export default Poster;
