import React from "react";

const OnlineOrder = () => {
  return (
    <div className="bg-red-700">
      <div className="py-16">
        <div className="w-full">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-12">
              How to Online Order?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 justify-between">
              {/* Card 1 */}
              <div className="flex items-center  space-x-4">
                <img
                  src="/images/menu.png"
                  alt="menu"
                  className="w-20 h-20 flex-shrink-0"
                />
                <h3 className="text-lg font-light text-white text-left">
                  Browse Our Menu
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                </svg>

              </div>

              {/* Card 2 */}
              <div className="flex items-center  space-x-4">
                <img
                  src="/images/cartplus.png"
                  alt="cart"
                  className="w-20 h-20 flex-shrink-0"
                />
                <h3 className="text-lg font-light text-white text-left">
                  Customize Your Order
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Card 3 */}
              <div className="flex items-center  space-x-4">
                <img
                  src="/images/cart.png"
                  alt="cart"
                  className="w-20 h-20 flex-shrink-0"
                />
                <h3 className="text-lg font-light text-white text-left">
                  Place Your Order
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Card 4 */}
              <div className="flex items-center">
                <img
                  src="/images/meal.png"
                  alt="meal"
                  className="w-20 h-20 flex-shrink-0 mr-4"
                />
                <h3 className="text-lg font-light text-white text-left">
                  Enjoy Your Meal
                </h3>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineOrder;
