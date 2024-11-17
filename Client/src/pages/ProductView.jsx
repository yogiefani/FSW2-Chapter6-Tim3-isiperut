import { useLoaderData } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Navbar from "../components/Navbar/Navbar";
import CardProduct from "../components/Card/CardProduct";
import Footer from "../components/Footer/Footer";

export const loader = async () => {
  const response = await axiosInstance.get("/users");
  const users = response.data.data;

  const productsData = await axiosInstance.get("/products/all");
  const products = productsData.data.data;

  return { users, products };
};

function ProductView() {
  const { products } = useLoaderData();
  return (
    <>
      <Navbar />
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
export default ProductView;
