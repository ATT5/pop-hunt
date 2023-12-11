import Modal from "./Modal";
import close from "../assets/x.svg";
import loading from "../assets/loading.gif";
import { useContext } from "react";
import { moviesContext } from "../context/moviesContext";
import notAvailable from "../assets/not.webp";

//Componente MovieInfo: Muestra información detallada de una película.

const MovieInfo = () => {
  const { infoMovie, closeModalHandler } = useContext(moviesContext);

  return (
    <Modal>
      <section className="bg-background w-4/5 md:w-2/3  relative z-50 flex max-lg:flex-col max-lg:items-center justify-evenly p-7 rounded-2xl">
        <div
          className="absolute top-5 w-6 h-6 left-2  cursor-pointer object-cover"
          onClick={closeModalHandler}
        >
          <img src={close} alt="close" className="  w-6 h-6" />
        </div>
        {/* Verifica si se ha obtenido la información de la película */}
        {Object.keys(infoMovie).length === 0 && (
          <img src={loading} alt="loading" width={30} height={30} />
        )}
        {/* Muestra la información de la película */}
        {Object.keys(infoMovie).length !== 0 && (
          <>
            <img
              src={infoMovie.Poster === "N/A" ? notAvailable : infoMovie.Poster}
              alt={infoMovie.Title}
              className="rounded-2xl w-4/6 md:w-1/3 pl-2 "
            />
            <div className="text-slate-200 px-5">
              <h2 className="text-xl text-white font-bold pb-5">
                {infoMovie.Title}
              </h2>
              <p>
                <strong>Director:</strong> {infoMovie.Director}
              </p>
              <p>
                <strong>Genres:</strong> {infoMovie.Genre}
              </p>
              <p>
                <strong>Year:</strong> {infoMovie.Year}
              </p>
              <p>
                <strong>Imdb:</strong> {infoMovie.imdbRating}
              </p>
              <div>
                <strong>Actors:</strong>{" "}
                {infoMovie.Actors.split(", ").map((act) => (
                  <p className="bg-gray-500 inline-block p-2 rounded-2xl m-1">
                    {act}
                  </p>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </Modal>
  );
};

export default MovieInfo;
