import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavbarList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <li>
        <NavLink to="/" className="capitalize text-white">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className="capitalize text-white">
          Products
        </NavLink>
      </li>
      <li className="dropdown">
        <label
          tabIndex={0}
          className="capitalize text-white cursor-pointer"
          onClick={toggleDropdown}
        >
          Pages
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          style={{
            position: "absolute",
            display: isDropdownOpen ? "block" : "none",
          }}
        >
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/chef">Our Chef</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/reservation">Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/contact" className="capitalize text-white">
          Contact
        </NavLink>
      </li>
    </>
  );
};

export default NavbarList;
