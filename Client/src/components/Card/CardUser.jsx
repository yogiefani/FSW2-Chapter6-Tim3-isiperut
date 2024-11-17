import { ImBin } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import { Link, useRevalidator } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const CardUser = (props) => {
    const { image, name, email, phone, address, role, id } = props;
    const {revalidate} = useRevalidator();
    return (
        <>
            <div className="card card-side bg-base-300 shadow-xl">
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                        <div className="badge badge-secondary">{role}</div>
                    <div className="text-left">
                        <p className="my-4 font-semibold">{email}</p>
                        <p className="mb-4 font-semibold">{phone}</p>
                        <p className="mb-4 font-semibold">{address}</p>
                    </div>
                    <div className="card-actions gap-4 justify-end">
                        <Link className="btn btn-accent" to={`/admin-dashboard/user/${id}/edit`}>
                            <BsPencilSquare />
                        </Link>
                        <button className="btn btn-primary" onClick={async()=>{
                                await axiosInstance.delete(`/users/${id}`);
                                toast.info("User deleted successfully");
                                revalidate(); // Refresh data after successful deletion
                        }}>
                            <ImBin />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardUser;
