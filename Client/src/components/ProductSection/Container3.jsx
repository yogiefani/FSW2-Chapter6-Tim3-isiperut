import React from "react";

const Container3 = () => {
  return (
    <section id="container3" className="py-12 bg-bg-img">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end">
            <img
              src="/images/example2.png"
              alt="Burger"
              className="max-w-full sm:max-w-md lg:max-w-xl"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black font-normal leading-tight">
            Xabite's Commitment to 100% Natural Ingredients!
            </h1>
            <p className="text-base text-gray-500 py-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit placerat ex, vitae accumsan enim semper eget. Vestibulum ut commodo est, id semper augue.
            </p>
            <ul className="space-y-4">
            <li className="flex items-start">
              <img
                src="/images/tick.svg"
                alt="Tick"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="text-gray-500">
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </span>
            </li>
            <li className="flex items-start">
              <img
                src="/images/tick.svg"
                alt="Tick"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="text-gray-700">
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </span>
            </li>
            <li className="flex items-start">
              <img
                src="/images/tick.svg"
                alt="Tick"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="text-gray-700">
                Sewa Mobil Jangka Panjang Bulanan
              </span>
            </li>
            <li className="flex items-start">
              <img
                src="/images/tick.svg"
                alt="Tick"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="text-gray-700">
                Gratis Antar - Jemput Mobil di Bandara
              </span>
            </li>
            <li className="flex items-start">
              <img
                src="/images/tick.svg"
                alt="Tick"
                className="w-6 h-6 flex-shrink-0 mr-4"
              />
              <span className="text-gray-700">
                Layanan Airport Transfer / Drop In Out
              </span>
            </li>
          </ul>
          <div className="flex justify-center lg:justify-start mt-10">
            <button className="btn bg-custom-orange text-white border-none font-semibold rounded-full px-8 text-sm sm:text-base lg:text-lg hover:bg-orange-600 transition duration-300">
              Order Now
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container3;
