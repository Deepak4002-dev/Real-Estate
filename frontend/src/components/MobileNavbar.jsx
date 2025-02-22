import React from "react";
import { NavLink } from "react-router-dom";
const MobileNavbar = ({ setMenuBar }) => {
  const mobileMenuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/all-properties" },
    { name: "Contact", path: "/contact" },
    { name: "Signup", path: "/signup" },
  ];
  return (
    <ul className="flex flex-col justify-center items-center gap-6 mt-16 transition-all">
      {mobileMenuItems.map(({ path, name }) => (
        <li key={name}>
          <NavLink
            to={path}
            className="cursor-pointer hover:text-gray-400 underline-effect relative"
            onClick={() => setMenuBar(false)}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavbar;
