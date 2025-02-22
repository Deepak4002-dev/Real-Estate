import React from "react";
import { NavLink } from "react-router-dom";
const DesktopNavbar = (props) => {
  const desktopMenuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/all-properties" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <ul className={`hidden md:flex gap-7 ${props.className} desktop-menu`}>
      {desktopMenuItems.map(({ name, path }) => (
        <li key={name}>
          <NavLink
            to={path}
            className="cursor-pointer hover:text-gray-400 underline-effect relative"
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavbar;
