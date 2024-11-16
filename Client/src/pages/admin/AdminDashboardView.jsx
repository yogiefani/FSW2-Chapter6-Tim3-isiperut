import { redirect, useLoaderData } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import CardUser from "../../components/Card/CardUser";
import NavbarForAdmin from "../../components/Navbar/NavbarForAdmin";
import { checkAccess } from "../../middlewares/Auth";

export const loader = async () => {
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
export default AdminDashboard;
