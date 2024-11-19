import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavbarListForAdmin from "./NavbarListForAdmin";
import { useAuth } from "../../context/AuthContext";

const NavbarForAdmin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {logout} = useAuth();

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const user = getusersData();
  return (
    <>
      <div className="navbar bg-[#C03822] px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavbarListForAdmin />
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl hidden lg:flex">
            <img
              src="../../../public/images/isi perut.png"
              alt="isi perut.png"
              width="40px"
            />{" "}
            <p className="font-bold text-orange-400">ISI PERUT</p>{" "}
            <p className="badge bg-[#F07822] border-white text-white">admin</p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarListForAdmin />
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
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarForAdmin;
