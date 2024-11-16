import { redirect, useLoaderData } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import CardUser from "../../components/Card/CardUser";
import NavbarForAdmin from "../../components/Navbar/NavbarForAdmin";
import { checkAccess } from "../../middlewares/Auth";
import CardProduct from "../../components/Card/CardProduct";

export const loader = async () => {
    //middleware buat check yang login role admin apa bukan
    const access = await checkAccess();

    if (!access) {
        return redirect("/not-found");
    }

    const response = await axiosInstance.get("/users");
    const users = response.data.data;

    const productsData = await axiosInstance.get("/products");
    const products = productsData.data.data;

    return { users, products };
};

function AdminProductDashboard() {
    const { users, products } = useLoaderData();
    return (
        <>
            <NavbarForAdmin />
            <div className="m-5 mt-8">
                <h1 className="text-4xl font-semibold text-left">Product On Sales</h1>
            </div>
            <div className="m-5 grid md:grid-cols-3 lg:grid-cols-4 gap-y-10">
                {products.map((product) => (
                    <CardProduct 
                    key={product.id} id={product.id} image={product.image} name={product.name} description={product.desc} price={product.price} stock={product.stock} category={product.category}/>
                ))}
            </div>
            <div className="m-5 mt-20">
                <h1 className="text-4xl font-semibold text-left">Our Active Users</h1>
            </div>
            <div className="m-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {users.slice(1).map((user) => (
                    <CardUser
                        key={user.id}
                        id={user.id}
                        image={user.photoProfile? user.photoProfile : "https://ik.imagekit.io/9h1gnwzay/default-image.jpg?updatedAt=1728904313272"}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        address={user.address}
                        role={user.role}
                    />
                ))}
            </div>
        </>
    );
}
export default AdminProductDashboard;
