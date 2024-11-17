import React from "react";

const OrderNow = () => {
  return (
    <div className="bg-gray-100 flex items-center py-20 font-karla">
      <div className="bg-custom-orange container mx-auto grid grid-cols-12 gap-6 items-center px-6 lg:px-12 rounded-3xl relative">
        <div className="col-span-12 lg:col-span-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Get Your Xabite Fix Fast! Order Delivery Now!
          </h1>
            <p className="col-span-12 lg:col-start-2 lg:col-span-4 text-white text-base py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit placerat ex, vitae accumsan enim semper eget.
            </p>
          <div className="flex justify-center">
            <button className="btn bg-red-700 text-white border-none font-semibold rounded-full px-8 text-sm sm:text-base lg:text-lg hover:bg-orange-600 transition duration-300">
              Order Now
            </button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end relative">
          <img
            src="/images/Vector.png"
            alt="Vector"
            className="max-w-full sm:max-w-md lg:max-w-lg absolute z-0 top-7 left-15"
          />
          <img
            src="/images/person.png"
            alt="person"
            className="max-w-full sm:max-w-md lg:max-w-lg relative z-10 right-10"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
