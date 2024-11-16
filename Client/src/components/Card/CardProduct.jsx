import React from "react";
import { ImBin } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";


const CardProduct = (props) => {
    const { image, name, description, price, stock, category } = props;
    return (
        <div className="card bg-base-200 w-96 shadow-xl">
            <figure>
                <img  className="max-h-[200px] min-w-[300px] scale-125" src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                    <div className="text-primary text-left">$ {price
                            ? price.toLocaleString("us-US", {
                                style: "currency",
                                currency: "USD",
                            })
                            : "Loading..."}</div>
                    <div className="font-light text-left">Stock: {stock}</div>
                    <p className="text-left">{description}</p>
                <div className="card-actions justify-end items-end gap-4">
                    <button className="btn btn-accent mt-4"><BsPencilSquare /></button>
                    <button className="btn btn-primary mt-4"><ImBin /></button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
