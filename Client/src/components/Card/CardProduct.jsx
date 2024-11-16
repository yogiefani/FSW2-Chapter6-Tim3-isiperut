import React from "react";

const CardProduct = (props) => {
    const { image, name, description, price, stock, category } = props;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <div className="text-primary">${price}</div>
                <p className="font-light">{stock}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
