import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const CardProduct = ({
  image,
  name,
  description,
  price,
  stock,
  category,
  id,
  deletedAt,
}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userRole = user?.role;

  const handleDelete = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await axiosInstance.delete(`/products/${id}`);
      toast.info("Product deleted successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <Link to={`/product/${id}`}>
      <div
        className={`card bg-base-200 w-96 shadow-xl ${
          deletedAt ? "opacity-70" : ""
        }`}
      >
        <figure>
          <img
            className="max-h-[200px] min-w-[300px] scale-125"
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
            {deletedAt && <div className="badge badge-error">Deleted</div>}
          </h2>
          <div className="text-primary text-left">
            ${" "}
            {price.toLocaleString("us-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
          <div className="font-light text-left">Stock: {stock}</div>
          <p className="text-left">{description}</p>

          {userRole === "admin" && (
            <div className="card-actions justify-end items-end gap-4">
              {!deletedAt && (
                <>
                  <Link
                    className="btn btn-accent"
                    to={`/admin-dashboard/product/${id}/edit`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BsPencilSquare />
                  </Link>
                  <button className="btn btn-primary" onClick={handleDelete}>
                    <ImBin />
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
