import { useLoaderData } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import CardProduct from "../components/Card/CardProduct";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NavbarForAdmin from "../components/Navbar/NavbarForAdmin";

export const loader = async () => {
  const response = await axiosInstance.get("/users");
  const users = response.data.data;

  const productsData = await axiosInstance.get("/products/all");
  const products = productsData.data.data;

  return { users, products };
};

function HomeView() {
  const { products } = useLoaderData();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkUserRole = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setIsAdmin(parsedUser.role === "admin");
        } catch (error) {
          console.error("Error parsing user data:", error);
          setIsAdmin(false);
        }
      }
    };

    checkUserRole();
  }, []);

  return (
    <>
      {isAdmin ? <NavbarForAdmin /> : <Navbar />}
      <div className="m-5 mt-8">
        <h1 className="text-4xl font-semibold text-left">Product On Sales</h1>
      </div>
      <div className="m-5 grid md:grid-cols-3 lg:grid-cols-4 gap-y-10">
        {products.map((product) => (
          <CardProduct key={product.id} id={product.id} image={product.image} name={product.name} description={product.desc} price={product.price} stock={product.stock} category={product.category} deletedAt={product.deletedAt} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default HomeView;
