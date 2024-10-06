import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-[3.5rem] rounded-bl-sm rounded-br-sm shadow-md w-full nav flex justify-center items-center border-2">
        <div className="h-full w-[95%] md:w-[98%] flex justify-between items-start border-2">
          <div className="h-full w-auto md:w-auto flex justify-center items-center border-2">
            <h1 className="text-xl font-semibold font-serif">
              Crafty Creations
            </h1>
          </div>
          <div className="h-full w-auto md:w-auto md:gap-5 border-2 flex justify-center items-center gap-2">
            <div className="h-full w-auto border-2 flex items-center">
              Products
            </div>
            <div className="h-full w-auto border-2 flex items-center">
              Login/Signup
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
