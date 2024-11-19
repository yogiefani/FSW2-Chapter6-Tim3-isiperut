import { Link, redirect, useLoaderData } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import CardUser from "../../components/Card/CardUser";
import NavbarForAdmin from "../../components/Navbar/NavbarForAdmin";
import { checkAccess } from "../../middlewares/Auth";
import CardProduct from "../../components/Card/CardProduct";
import Footer from "../../components/Footer/Footer";

export const loader = async () => {
  //middleware buat check yang login role admin apa bukan
  const access = await checkAccess();

  if (!access) {
    return redirect("/not-found");
  }

  const response = await axiosInstance.get("/users");
  const users = response.data.data;

  const productsData = await axiosInstance.get("/products/all");
  const products = productsData.data.data;

  return { users, products };
};

function AdminProductDashboard() {
  const { products } = useLoaderData();
  return (
    <>
      <NavbarForAdmin />
      <div className="m-5 mt-8">
        <h1 className="text-4xl font-semibold text-left">Product On Sales</h1>
        <Link className="btn btn-primary w-32 mt-8" to="/admin-create-product">
          Create
        </Link>
      </div>
      <div className="m-5 grid md:grid-cols-3 lg:grid-cols-4 gap-y-10">
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
      </div>
      <Footer />
    </>
  );
}
export default AdminProductDashboard;
