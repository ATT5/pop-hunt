import Modal from "./Modal";
import close from "../assets/x.svg";
import { useContext } from "react";
import { moviesContext } from "../context/moviesContext";

const Error = () => {
  const { errorStatusHandler } = useContext(moviesContext);
  return (
    <Modal>
      <section className="bg-red-500 flex justify-center items-center w-1/2 h-40 rounded-xl relative">
        <div className="absolute top-5 w-6 h-6 left-2  cursor-pointer object-cover">
          <img
            src={close}
            alt="close"
            className="  w-6 h-6"
            //Cierra el modal de error
            onClick={errorStatusHandler}
          />
        </div>
        <p className="text-white">Error Getting The Data</p>
      </section>
    </Modal>
  );
};

export default Error;
