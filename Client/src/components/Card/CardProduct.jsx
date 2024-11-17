import { ImBin } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import { Link, useRevalidator } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const CardProduct = (props) => {
  const { image, name, description, price, stock, category, id, deletedAt } =
    props;
  const { revalidate } = useRevalidator();

  return (
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
          {price
            ? price.toLocaleString("us-US", {
                style: "currency",
                currency: "USD",
              })
            : "Loading..."}
        </div>
        <div className="font-light text-left">Stock: {stock}</div>
        <p className="text-left">{description}</p>
        <div className="card-actions justify-end items-end gap-4">
          {!deletedAt && (
            <>
              <Link
                className="btn btn-accent"
                to={`/admin-dashboard/product/${id}/edit`}
              >
                <BsPencilSquare />
              </Link>
              <button
                className="btn btn-primary"
                onClick={async () => {
                  try {
                    await axiosInstance.delete(`/products/${id}`);
                    toast.info("Product deleted successfully");
                    revalidate(); // Refresh data after successful deletion
                  } catch (error) {
                    toast.error("Failed to delete product");
                  }
                }}
              >
                <ImBin />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
