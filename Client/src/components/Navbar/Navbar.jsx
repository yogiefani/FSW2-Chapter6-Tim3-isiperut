const Navbar = () => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };
  return (
    <>
      <ul className="bg-red-700">
        <li>Ini Navbar</li>
        <li>Home</li>
        <li>Product</li>
      </ul>
      <button className="btn btn-secondary ml-5" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};
export default Navbar;
