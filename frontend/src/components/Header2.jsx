import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import DesktopNavbar from "./DesktopNavbar.jsx";
import MobileNavbar from "./MobileNavbar.jsx";

function Header2() {
  const [MenuBar, setMenuBar] = useState(false);
  return (
    <>
      {/* bg-[#f1f1f2] */}
      <div className="w-screen h-24 ">
        <div className="container w-full flex flex-nowrap justify-between items-center mx-auto px-4 sm:px-1 md:px-0 lg:px-24 py-4">
          <img src={assets.darker_logo} alt="" className="darker_logo" />
          <DesktopNavbar className={"text-black"} />
          <div className="right-section">
            <ul className="flex justify-center items-center gap-6 text-white">
              <li>
                <NavLink
                  to="/signup"
                  className="hidden md:inline-block px-[20px] py-2 rounded-full bg-black"
                >
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="px-6 py-2 rounded-full bg-black"
                >
                  Login
                </NavLink>
              </li>
              <li
                onClick={() => setMenuBar((pre) => !pre)}
                className="inline-block md:hidden"
              >
                <i className="fa-solid fa-bars text-4xl cursor-pointer text-black"></i>
              </li>
            </ul>

            {/* {"Mobile Menu"} */}
            <div
              className={` ${
                MenuBar ? "translate-x-0" : "translate-x-full"
              }  fixed w-full h-screen top-0 left-0 bottom-0  bg-white mobile-menu transform transition duration-300 ease-in-out`}
            >
              <div
                className="absolute w-full flex justify-end p-4"
                onClick={() => setMenuBar((pre) => !pre)}
              >
                {" "}
                <i className="fa-solid fa-xmark text-4xl"></i>
              </div>
              <MobileNavbar setMenuBar={setMenuBar} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header2;
