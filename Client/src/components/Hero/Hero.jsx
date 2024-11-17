import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#C03822] flex items-center py-20 font-karla">
      <div className="container mx-auto grid grid-cols-12 gap-6 items-center px-6 lg:px-12">
        <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end">
          <img
            src="/images/Burger.png"
            alt="Burger"
            className="max-w-full sm:max-w-md lg:max-w-xl"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight">
            Fresh, Flavorful and Fun at Xabite!
          </h1>
          <p className="text-white text-base py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit placerat ex, vitae accumsan enim semper eget. Vestibulum ut commodo est, id semper augue.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="btn bg-custom-orange text-white border-none font-semibold rounded-full px-8 text-sm sm:text-base lg:text-lg shadow-lg hover:bg-orange-600 transition duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;