import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getusersData = () => {
    const usersData = localStorage.getItem("user");
    if (!usersData || usersData === "user") {
      return null;
    }
    try {
      return JSON.parse(usersData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const user = getusersData();

  return (
    <div className="navbar bg-[#C03822] px-20 flex items-center justify-between">
      <div className="navbar-start flex items-center gap-4">
        <NavLink to="/" className="flex items-center">
          <img
            src="../../../public/images/isi perut.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <p className="font-bold text-orange-400 ml-2">ISI PERUT</p>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white flex items-center gap-6">
          <NavbarList />
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            onClick={toggleDropdown}
          >
            <div className="w-10 rounded-full">
              <img alt="user profile" src={user?.photoProfile} />
            </div>
          </div>
          {isDropdownOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="p-2">
                <div className="flex flex-col">
                  <span className="font-bold">{user?.name}</span>
                  <span className="text-sm text-gray-500">{user?.email}</span>
                </div>
              </li>
              <div className="divider my-0"></div>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
