import React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 pt-8 pb-20">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 mb-12">
          Taste the Xabite's Difference!
        </h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <div className="absolute inset-0 col-span-12 lg:col-span-6 flex justify-center">
            <img
              src="/images/Burger.png" 
              alt="Burger Placeholder"
              className="max-w-lg sm:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Fitur 1 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
            <div className="bg-custom-red p-3 rounded-full mb-4">
              <img
                src="/images/icon-quality.png" // Ikon kualitas
                alt="Quality Ingredients"
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Quality Ingredients
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Fitur 2 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
            <div className="bg-custom-red p-3 rounded-full mb-4">
              <img
                src="/images/icon-delivery.png" // Ikon pengiriman cepat
                alt="Fast and Friendly"
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Fast and Friendly
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Fitur 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-custom-red p-3 rounded-full mb-4">
              <img
                src="/images/icon-price.png" // Ikon harga terjangkau
                alt="Affordable Prices"
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Affordable Prices
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Fitur 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-custom-red p-3 rounded-full mb-4">
              <img
                src="/images/icon-menu.png" // Ikon menu beragam
                alt="Diverse Menu"
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Diverse Menu</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Fitur 5 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="bg-custom-red p-3 rounded-full mb-4">
              <img
                src="/images/icon-recipe.png" // Ikon resep terbaik
                alt="Best Recipes"
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Best Recipes</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Fitur 6 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="bg-custom-red p-3 rounded-full mb-4">
              <img
                src="/images/icon-cleanliness.png" // Ikon kebersihan
                alt="A Must Cleanliness"
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              A Must Cleanliness
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
