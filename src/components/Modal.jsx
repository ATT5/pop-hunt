const Modal = ({ children }) => {
  return (
    <div className="absolute top-0 z-40 w-full h-full  flex justify-center items-center overflow-hidden ">
      {children}
    </div>
  );
};

export default Modal;
