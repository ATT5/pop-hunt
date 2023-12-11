import Search from "./components/Search";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import MovieInfo from "./components/MovieInfo";
import Error from "./components/Error";
import { useContext } from "react";
import { moviesContext } from "./context/moviesContext";

function App() {
  const { moviesInfoModal, errorStatus } = useContext(moviesContext);

  return (
    <section className="bg-[#151515]  w-full h-screen font-roboto">
      <Header />
      <Search />
      <MoviesList />
      {moviesInfoModal && <MovieInfo />}
      {/* Mostrar componente Error en caso de error y estado de error activado */}
      {errorStatus && <Error />}
    </section>
  );
}

export default App;
