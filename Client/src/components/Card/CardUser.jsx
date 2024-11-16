import { ImBin } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import { useRevalidator } from "react-router-dom";
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
                        {name}{" "}
                        <div className="badge badge-secondary">{role}</div>
                    </h2>
                    <div className="text-left">
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{address}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">
                            <BsPencilSquare />
                        </button>
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
