import { useParams } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import Navbar from "../../components/Navbar/Navbar";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch product details when the component loads
  useState(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Failed to fetch product details", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      // Get the user object from localStorage
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || !user.id) {
        toast.error("User not authenticated");
        return;
      }

      const payload = {
        amount: quantity,
        total: quantity * product.price,
        productId: product.id,
        userId: user.id, // Use the user.id from the localStorage user object
      };

      const response = await axiosInstance.post(`/carts`, payload);

      toast.success(
        `Added ${payload.amount} ${product.name}(s) to cart. Total: $${payload.total}`
      );
    } catch (error) {
      toast.error("Failed to add item to cart");
      console.error(error);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="grid-cols-3 grid p-4 gap-4 justify-evenly">
        <div className="max-h-[300px] overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-5">{product.name}</h1>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-4">
              <p className="text-lg">{product.desc}</p>
              <p className="text-xl text-primary">
                $
                {product.price.toLocaleString("us-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="font-light">Stock: {product.stock}</p>
            </div>
          </div>
        </div>
        <div className="card card-bordered border-4 flex flex-col justify-center items-center h-full">
          {/* Quantity Input and Available Stock */}
          <div className="flex gap-2 items-center justify-center">
            <label htmlFor="quantity" className="font-bold">
              Jumlah Produk:
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min={1}
              max={product.stock}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="input input-bordered w-20"
            />
            <span className="text-sm font-light">
              Produk Tersedia: {product.stock}
            </span>
          </div>

          {/* Total Price */}
          <div className="text-lg font-bold text-primary mt-4">
            Total:
            {quantity * product.price
              ? (quantity * product.price)
                  .toLocaleString("us-US", {
                    style: "currency",
                    currency: "USD",
                  })
                  .replace(/^\$/, "") // Remove the extra $ symbol added by toLocaleString
              : "0.00"}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="btn btn-primary mt-4"
            disabled={quantity < 1 || quantity > product.stock}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
