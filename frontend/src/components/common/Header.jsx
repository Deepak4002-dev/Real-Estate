import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets.js";
import DesktopNavbar from "../../components/common/DesktopNavbar.jsx";
import MobileNavbar from "../../components/common/MobileNavbar.jsx";

function Header() {
  const [MenuBar, setMenuBar] = useState(false);
  return (
    <>
      <div className="fixed top-0 rounded left-0 w-screen bg-[rgba(20,24,43,0.8)] z-[30]">
        <div className="container flex flex-nowrap justify-between items-center mx-auto px-6 sm:px-1 md:px-0 lg:px-24 py-4 sm:py-4 ">
          <img
            src={assets.logo}
            alt=""
            className="logo "
            // h-14 w-24 sm:h-auto sm:w-auto
          />
          <DesktopNavbar className={"text-white"} />
          <div className="right-section">
            <ul className="flex justify-center gap-6 text-black">
              <li>
                <NavLink
                  to="/signup"
                  className="btn hidden md:inline-block px-5 py-2 rounded-full bg-white text-base before:text-base "
                >
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="btn px-5 py-1.5 inline-block sm:px-6 sm:py-2 rounded-full bg-white"
                >
                  Login
                </NavLink>
              </li>
              <li
                onClick={() => setMenuBar((pre) => !pre)}
                className="inline-block md:hidden"
              >
                <i className="fa-solid fa-bars text-4xl cursor-pointer text-white"></i>
              </li>
            </ul>

            {/* {"Mobile Menu"} */}
            <div
              className={` ${
                MenuBar ? "translate-x-0" : "translate-x-full"
              }  fixed w-screen h-screen top-0 left-0 bottom-0 bg-white mobile-menu transform transition-transform duration-300 ease-in-out`}
            >
              {/* MenuBar ? "inline-block" : "hidden" */}

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

export default Header;
