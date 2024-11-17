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

    return { users };
};

function AdminDashboard() {
    const { users } = useLoaderData();
    return (
        <>
            <NavbarForAdmin />
            <div className="m-5 mt-8 flex flex-col">
                <h1 className="text-4xl font-semibold text-left">Our Active Users</h1>
                <Link className="btn btn-primary w-32 mt-8" to='/products'>Create</Link>
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
            <Footer />
        </>
    );
}
export default AdminDashboard;
