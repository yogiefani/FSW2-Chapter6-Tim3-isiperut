import { useAuth } from "../context/AuthContext";
import { useLoaderData } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import CardProduct from "../components/Card/CardProduct";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import NavbarForAdmin from "../components/Navbar/NavbarForAdmin";
import ProductSection from "../components/Home/Highligth";
import FeaturesSection from "../components/Home/FeaturesSection";
import OnlineOrder from "../components/Home/OnlineOrder";
import ProductAdvantages from "../components/Home/ProductAdvantages";
import Menu from "../components/Home/Menu";
import OrderNow from "../components/Home/OrderNow";
import Testimoni from "../components/Home/Testimoni";
import NewMenu from "../components/Home/NewMenu";
import BlogSection from "../components/Home/BlogSection";
import { checkAccess } from "../middlewares/auth";

export const loader = async () => {
  const response = await axiosInstance.get("/users");
  const users = response.data.data;

  const productsData = await axiosInstance.get("/products/all");
  const products = productsData.data.data;

  return { users, products };
};

function HomeView() {
  const { products } = useLoaderData();
  const { isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isAdmin ? <NavbarForAdmin /> : <Navbar />}
      <Hero />
      <ProductSection />
      <ProductAdvantages />
      <FeaturesSection />
      <OnlineOrder />
      <Menu />
      <OrderNow />
      <NewMenu />
      <Testimoni />
      <BlogSection />
      {/* <div className="m-5 mt-8">
        <h1 className="text-4xl font-semibold text-left">Product On Sales</h1>
      </div> */}
      {/* <div className="m-5 grid md:grid-cols-3 lg:grid-cols-4 gap-y-10">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.desc}
            price={product.price}
            stock={product.stock}
            category={product.category}
            deletedAt={product.deletedAt}
          />
        ))}
      </div> */}
      <Footer />
    </>
  );
}

export default HomeView;
