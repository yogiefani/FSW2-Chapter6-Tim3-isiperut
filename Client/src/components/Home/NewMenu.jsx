import React from "react";

const NewMenu = () => {
  return (
    <div className="bg-gray-100 pt-8 pb-20">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 mt-12 mb-20">
          What's New?
        </h2>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-24">
          {/* Card 1 */}
          <div className="relative bg-gray-200 opacity-80 rounded-3xl shadow-lg p-4 flex flex-col text-center w-[280px]">
            <div className="absolute top-2 right-2 bg-gray-50 text-gray-800 rounded-full px-3 py-1 text-sm font-bold shadow">
              4.15$
            </div>
            <img
              src="/images/Image (4).png"
              alt="Menu1"
              className="absolute w-36 mb-4 -top-16"
            />
            <h3 className="text-lg text-custom-black mt-9 mb-2 text-left font-medium pl-2">
              Classic Club Sandwich
            </h3>
            <p className="text-sm text-gray-600 text-left pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gray-200 opacity-80 rounded-3xl shadow-lg p-4 flex flex-col text-center w-[280px]">
            <div className="absolute top-2 right-2 bg-gray-50 text-gray-800 rounded-full px-3 py-1 text-sm font-bold shadow">
              4.15$
            </div>
            <img
              src="/images/Image (4).png"
              alt="Menu1"
              className="absolute w-36 mb-4 -top-16"
            />
            <h3 className="text-lg text-custom-black mt-9 mb-2 text-left font-medium pl-2">
              Classic Club Sandwich
            </h3>
            <p className="text-sm text-gray-600 text-left pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gray-200 opacity-80 rounded-3xl shadow-lg p-4 flex flex-col text-center w-[280px]">
            <div className="absolute top-2 right-2 bg-gray-50 text-gray-800 rounded-full px-3 py-1 text-sm font-bold shadow">
              4.15$
            </div>
            <img
              src="/images/Image (4).png"
              alt="Menu1"
              className="absolute w-36 mb-4 -top-16"
            />
            <h3 className="text-lg text-custom-black mt-9 mb-2 text-left font-medium pl-2">
              Classic Club Sandwich
            </h3>
            <p className="text-sm text-gray-600 text-left pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewMenu;
