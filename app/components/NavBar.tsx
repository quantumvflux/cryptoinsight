import React from "react";
const NavBar = () => {
  return (
    <>
      <nav className="flex flex-col sm:flex-row justify-center items-center shadow-md text-white bg-gray-900 fixed top-0 w-screen h-20 sm:h-24 z-30">
        <h1 className="text-2xl sm:text-3xl text-center sm:p-4">
          <span className="font-normal">Crypto</span>
          <span className="font-bold">Insight</span>
        </h1>
        <ul className="flex justify-center items-center  sm:mb-0 text-xl sm:text-xl gap-4 sm:gap-4 pl-6">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#market">Market</a>
          </li>
          <li>
            <a href="#choose">Choose us</a>
          </li>
          <li>
            <a href="#join">Join</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
