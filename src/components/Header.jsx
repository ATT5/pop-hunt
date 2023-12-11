import logo from "../assets/vite.svg";

const Header = () => {
  //Desplaza la vista al inicio de la pagina
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className="w-full flex bg-black py-5">
      <img src={logo} alt="logo" className="w-12 h-12 -rotate-12 mx-3" />
      <h1
        className="font-bungee text-4xl md:text-6xl cursor-pointer"
        onClick={handleRefresh}
      >
        Pop-Hunt
      </h1>
    </header>
  );
};

export default Header;
