import React from "react";

const Highlight = () => {
  return (
    <>
    <div className="bg-gray-200">
      <div className="relative pt-32 pb-12">
        <div className="absolute w-full -top-24">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src="/images/spicy-inferno.png"
                alt="The Spicy Inferno"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                The Spicy Inferno
              </h3>
              <div className="flex items-center gap-1 my-2">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
              <p className="text-lg font-bold text-gray-800">$10.15</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src="/images/xabite-bacon.png"
                alt="Xabite Bacon"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Xabite Bacon
              </h3>
              <div className="flex items-center gap-1 my-2">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
              <p className="text-lg font-bold text-gray-800">$9.15</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src="/images/classic-burger.png"
                alt="The Classic Burger"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                The Classic Burger
              </h3>
              <div className="flex items-center gap-1 my-2">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
              <p className="text-lg font-bold text-gray-800">$6.15</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src="/images/xabite-sandwich.png"
                alt="Xabite Sandwich"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Xabite Sandwich
              </h3>
              <div className="flex items-center gap-1 my-2">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
              <p className="text-lg font-bold text-gray-800">$7.35</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 pb-24">
        <div className="w-full">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-12">
            {/* Card 1 */}
            <div className="bg-slate-900 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-3xl font-base text-white text-left mb-4">
                The Spicy Inferno
              </h3>
              <p className="text-base text-white text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, magnam incidunt? Ipsam corrupti dolorem ut?</p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-3xl font-base text-white text-left mb-4">
                The Spicy Inferno
              </h3>
              <p className="text-base text-white text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, magnam incidunt? Ipsam corrupti dolorem ut?</p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-3xl font-base text-white text-left mb-4">
                The Spicy Inferno
              </h3>
              <p className="text-base text-white text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, magnam incidunt? Ipsam corrupti dolorem ut?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Highlight;
