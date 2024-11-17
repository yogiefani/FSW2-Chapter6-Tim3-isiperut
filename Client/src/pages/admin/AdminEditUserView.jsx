import React, { useEffect, useState } from "react";
import { Form, useLoaderData, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import FormInput from "../../components/Form/FormInput";
import FormSelect from "../../components/Form/FormSelect";
import NavbarForAdmin from "../../components/Navbar/NavbarForAdmin";
import { toast } from "react-toastify";

const AdminEditUserView = () => {
    const [user, setUser] = useState(null);
    const [photoProfile, setPhotoProfile] = useState('');
    const navigate = useNavigate();

    const handlePhoto = (e)=> {
        const link = e.target.value;
        setPhotoProfile(link);
    }

    const roles = ["admin", "user"];

    const { id } = useParams();
    const getUserById = async () => {
        try {
            const response = await axiosInstance.get(`/users/${id}`);
            setUser(response.data.data);
            setPhotoProfile(response.data.data.photoProfile);
        } catch (err) {
            setError("Error fetching product data");
        }
    };

    useEffect(() => {
        getUserById();
    }, []);

    if (!user) {
        return (
            <>
                <div className="h-screen flex justify-center items-center">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            </>
        );
    }

    const handleUpdate = async (e) => {
      e.preventDefault();
      const form = e.target;
      const dataForm = new FormData(form);

      const  data = Object.fromEntries(dataForm)

      try {
        await axiosInstance.patch(`/users/${id}`, data);

        toast.success("User updated successfully");
        navigate("/admin-dashboard");
      } catch (error) {
        const errorMessage = error?.response?.data?.message || "An error occurred";
        toast.error(errorMessage);
      }
    }

    return (
        <>
            <NavbarForAdmin />
            <div className="h-screen grid place-items-center my-20">
                <Form method="POST" className="card w-[600px] p-8 bg-base-300 shadow-lg flex flex-cols gap-y-4" onSubmit={handleUpdate}>
                    <div className="avatar flex justify-center">
                        <div className="w-40 rounded-full">
                            <img
                                src={
                                    photoProfile
                                }
                                alt=""
                            />
                        </div>
                    </div>
                    <label className="text-left -mb-2">Photo Profile Link</label>
                    <input type="text" name="photoProfile" className="input input-bordered" value={photoProfile} onChange={handlePhoto} />
                    <FormInput
                        label={"Name"}
                        name={"name"}
                        defaultValue={user.name}
                    />
                    <FormInput
                        label={"Email"}
                        name={"email"}
                        defaultValue={user.email}
                    />
                    <FormInput
                        label={"Phone"}
                        name={"phone"}
                        defaultValue={user.phone}
                    />
                    <FormInput
                        label={"Address"}
                        name={"address"}
                        defaultValue={user.address}
                    />
                    <FormSelect
                        label={"Role"}
                        name={"role"}
                        list={roles}
                        defaultValue={user.role}
                    />
                    <div className="mt-8">
                    <button type="submit" className="btn btn-primary btn-block">
                        Perbarui
                    </button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default AdminEditUserView;
