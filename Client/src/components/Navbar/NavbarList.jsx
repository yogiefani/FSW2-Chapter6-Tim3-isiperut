import React from "react";
import { NavLink } from "react-router-dom";

const Lists = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Products", url: "/products" },
    { id: 3, text: "My Cart", url: "/cart" },
];

const NavbarList = () => {
    return (
        <>
            {Lists.map((list) => {
                const { id, text, url } = list;
                return (
                    <li key={id}>
                        <NavLink to={url} className="capitalize text-white">{text}</NavLink>
                    </li>
                );
            })}
        </>
    );
};

export default NavbarList;
