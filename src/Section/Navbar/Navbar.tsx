import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-center mt-5">
      <ul className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `border p-2 rounded ${
              isActive
                ? "bg-blue-500 transition-all p-3 text-white"
                : "bg-white"
            }`
          }
        >
          AddCart
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border p-2 rounded ${
              isActive
                ? "bg-blue-500 transition-all p-3 text-white"
                : "bg-white"
            }`
          }
          to={"/transfare"}
        >
          TransfareMoney
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border p-2 rounded ${
              isActive
                ? "bg-blue-500 transition-all p-3 text-white"
                : "bg-white"
            }`
          }
          to={"/history"}
        >
          History
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
