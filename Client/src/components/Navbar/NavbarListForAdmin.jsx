import { NavLink } from "react-router-dom";

const Lists = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Products", url: "/admin-dashboard-product" },
  { id: 3, text: "Users", url: "/admin-dashboard" },
];

const NavbarListForAdmin = () => {
  return (
    <>
      {Lists.map((list) => {
        const { id, text, url } = list;
        return (
          <li key={id}>
            <NavLink to={url} className="capitalize text-white">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavbarListForAdmin;
