import { Link } from "react-router-dom";

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
            $
            {price.toLocaleString("us-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
          <div className="font-light text-left">Stock: {stock}</div>
          <p className="text-left">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
