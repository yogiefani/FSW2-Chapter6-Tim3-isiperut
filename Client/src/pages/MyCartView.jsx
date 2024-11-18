import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Swal from "sweetalert2";

const MyCartView = () => {
  const handleCheckout = () => {
    Swal.fire({
      title: "Checkout Successful!",
      text: "Thank you for your purchase. Your order is being processed.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const cartItems = [
    {
      id: 1,
      amount: "2",
      total: "11.98",
      product: {
        name: "Beef Cheese Burger",
        category: "food",
        price: "5.99",
        image:
          "https://ik.imagekit.io/raaapiiip/image-burger.jpg_-6g-B5dTK.jpg?updatedAt=1731860297214",
      },
    },
    {
      id: 2,
      amount: "3",
      total: "29.97",
      product: {
        name: "Margarita Pizza",
        category: "food",
        price: "9.99",
        image:
          "https://ik.imagekit.io/ft0mydzbzq/Margarita%20Pizza-16-11-2024.jpg?updatedAt=1731762623110",
      },
    },
  ];

  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + parseFloat(item.total),
      0
    );
    const deliveryCharge = cartItems.length * 0.49;
    return {
      subtotal,
      deliveryCharge,
      total: subtotal + deliveryCharge,
    };
  };

  const { subtotal, deliveryCharge, total } = calculateTotals();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold text-center mb-8">My Cart</h2>

          <div className="hidden lg:grid grid-cols-2 py-6 text-xl text-base-content/60">
            <div>Product</div>
            <div className="flex items-center justify-between">
              <span className="w-[200px] text-center">Delivery Cost</span>
              <span className="w-[260px] text-center">Amount</span>
              <span className="w-[200px] text-center">Total</span>
            </div>
          </div>

          <div className="divide-y divide-base-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="avatar">
                    <div className="w-36 rounded-xl">
                      <img src={item.product.image} alt={item.product.name} />
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold">
                      {item.product.name}
                    </h3>
                    <p className="text-base-content/60 my-2">
                      {item.product.category}
                    </p>
                    <p className="text-primary text-lg">
                      $ {parseFloat(item.product.price).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">
                      $ 0.49
                      <span className="text-sm opacity-50 ml-2 lg:hidden">
                        (Delivery Cost)
                      </span>
                    </p>
                  </div>

                  <div className="join">
                    <button className="btn join-item">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M16.5 11H5.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      value={item.amount}
                      readOnly
                      className="input input-bordered join-item w-20 text-center"
                    />
                    <button className="btn join-item">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">
                      $ {parseFloat(item.total).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-base-200 max-w-xl mx-auto mt-8">
            <div className="card-body">
              <div className="flex justify-between mb-4">
                <span className="text-xl text-base-content/60">Sub Total</span>
                <span className="text-xl font-semibold">
                  $ {subtotal.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between pb-4 border-b">
                <span className="text-xl text-base-content/60">
                  Delivery Cost
                </span>
                <span className="text-xl font-semibold">
                  $ {deliveryCharge.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="text-2xl font-medium">Total</span>
                <span className="text-2xl font-medium text-primary">
                  $ {total.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="btn btn-primary w-full sm:w-[280px]" onClick={handleCheckout}>
              <span>Checkout</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default MyCartView;
