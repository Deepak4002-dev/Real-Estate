import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
function Navbar() {
  const [MenuBar, setMenuBar] = useState(false);
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="container flex flex-nowrap justify-between items-center mx-auto px-4 sm:px-1 md:px-0 lg:px-24 py-4">
          <img src={assets.logo} alt="" className="logo" />
          <ul className="hidden md:flex gap-7 text-white desktop-menu">
            <li>
              <a
                href="/header"
                className="cursor-pointer hover:text-gray-400 underline-effect relative"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="cursor-pointer hover:text-gray-400 underline-effect relative"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/properties"
                className="cursor-pointer hover:text-gray-400 underline-effect relative"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="/testomonial"
                className="cursor-pointer hover:text-gray-400 underline-effect relative"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="right-section">
            <ul className="flex justify-center items-center gap-6 text-black">
              <li>
                <a
                  href="/signup"
                  className="hidden md:inline-block px-6 py-2 rounded-full bg-white"
                >
                  Sigup
                </a>
              </li>
              <li>
                <a href="/login" className="px-6 py-2 rounded-full bg-white">
                  Login
                </a>
              </li>
              <li
                onClick={() => setMenuBar((pre) => !pre)}
                className="inline-block md:hidden"
              >
                <i className="fa-solid fa-bars text-4xl cursor-pointer"></i>
              </li>
            </ul>

            {/* {"Mobile Menu"} */}
            <div
              className={` ${
                MenuBar ? "inline-block" : "hidden"
              }  fixed w-full max-h-screen top-0 left-0 bottom-0 bg-white mobile-menu`}
            >
              <div
                className="absolute w-full flex justify-end p-4"
                onClick={() => setMenuBar((pre) => !pre)}
              >
                {" "}
                <i className="fa-solid fa-xmark text-4xl"></i>
              </div>
              <ul className="flex flex-col justify-center items-center gap-6 mt-16 transition-all">
                <li className="">
                  <a
                    href="/home"
                    className="cursor-pointer hover:text-gray-400 underline-effect relative"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="cursor-pointer hover:text-gray-400 underline-effect relative"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/properties"
                    className="cursor-pointer hover:text-gray-400 underline-effect relative"
                  >
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="cursor-pointer hover:text-gray-400 underline-effect relative"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/signup"
                    className="cursor-pointer hover:text-gray-400 underline-effect relative"
                  >
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import { assets } from "../assets/assets.js";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
//       <div className="container flex flex-nowrap justify-between items-center mx-auto px-4 sm:px-1 md:px-2 lg:px-24 py-4">
//         {/* Logo */}
//         <img src={assets.logo} alt="Logo" className="w-24" />

//         {/* Navigation Menu */}
//         <ul
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } menu-bar flex-col md:flex md:flex-row gap-4 md:gap-7 text-white absolute md:static top-16 left-0 md:top-auto md:left-auto bg-black md:bg-transparent w-full md:w-auto px-4 py-4 md:py-0`}
//         >
//           <li>
//             <a href="#header" className="cursor-pointer hover:text-gray-400">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#about" className="cursor-pointer hover:text-gray-400">
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#properties"
//               className="cursor-pointer hover:text-gray-400"
//             >
//               Properties
//             </a>
//           </li>
//           <li>
//             <a
//               href="#testimonial"
//               className="cursor-pointer hover:text-gray-400"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>

//         {/* Right Section */}
//         <div className="flex gap-4">
//           <a
//             href="#signup"
//             className=" hidden md:inline-block px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200"
//           >
//             Signup
//           </a>
//           <a
//             href="#login"
//             className=" px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200"
//           >
//             Login
//           </a>

//           {/* Hamburger Menu Icon */}
//           <button
//             className="md:hidden text-white text-2xl"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
