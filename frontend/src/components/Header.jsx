import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center w-full"
      style={{ backgroundImage: 'url("/header_img.png")' }}
      id="Header"
    >
      <Navbar />
      <div className="Explore-section text-center py-4 px-8 md:px-20 lg:px-32 md:mt-20 mt-24">
        <h2 className="text-5xl sm:text-6xl inline-block max-w-2xl font-semibold text-white opacity-90">
          Explore Properties that fit your dreams
        </h2>
        <form
          action=""
          className="flex flex-row-reverse items-center rounded-full bg-white opacity-60 mt-16 flex-nowrap"
        >
          <input
            type="text"
            placeholder="Search..."
            className="outline-none border-none w-full py-2 rounded-r-full "
          />
          <i className="fa-solid fa-magnifying-glass text-2xl px-2 cursor-pointer "></i>
        </form>
      </div>
    </div>
  );
};

export default Header;
