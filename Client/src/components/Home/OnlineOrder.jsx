import React from "react";

const OnlineOrder = () => {
  return (
    <div className="bg-red-700">
      <div className="py-28">
        <div className="w-full">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-5 mb-20">
              How to Online Order?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
              {/* Card 1 */}
              <div className="flex items-center  space-x-4">
                <img
                  src="/images/menu.png"
                  alt="menu"
                  className="w-16 h-16 flex-shrink-0"
                />
                <h3 className="text-lg font-light text-white text-left">
                  Browse Our Menu
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="size-8">
                  <path fillRule="evenodd" d="M4 8a.75.75 0 0 1 .75-.75h6.19L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l2.72-2.72H4.75A.75.75 0 0 1 4 8Z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Card 2 */}
              <div className="flex items-center  space-x-4">
                <img
                  src="/images/cartplus.png"
                  alt="cart"
                  className="w-16 h-16 flex-shrink-0"
                />
                <h3 className="text-lg font-light text-white text-left">
                  Customize Your Order
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="size-8">
                  <path fillRule="evenodd" d="M4 8a.75.75 0 0 1 .75-.75h6.19L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l2.72-2.72H4.75A.75.75 0 0 1 4 8Z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Card 3 */}
              <div className="flex items-center  space-x-4">
                <img
                  src="/images/cart.png"
                  alt="cart"
                  className="w-16 h-16 flex-shrink-0"
                />
                <h3 className="text-lg font-light text-white text-left">
                  Place Your Order
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="size-8">
                  <path fillRule="evenodd" d="M4 8a.75.75 0 0 1 .75-.75h6.19L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l2.72-2.72H4.75A.75.75 0 0 1 4 8Z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Card 4 */}
              <div className="flex items-center space-x-4">
                <img
                  src="/images/meal.png"
                  alt="meal"
                  className="w-16 h-16 flex-shrink-0 mr-4"
                />
                <h3 className="text-lg font-light text-white text-left">
                  Enjoy Your Meal
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                  <path
                    fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd" stroke="white" strokeWidth="2" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineOrder;
