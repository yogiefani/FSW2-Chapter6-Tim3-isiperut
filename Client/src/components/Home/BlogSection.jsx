import React from "react";

const BlogContainer = () => {
  return (
    <div className="bg-gray-100 pt-8 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 mt-6 mb-20 text-center">
            Fresh Flavors, Fresh Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Featured Blog */}
          <div className="lg:col-span-2 row-span-2 text-left">
            <div className="bg-black rounded-t-3xl p-8 shadow-md">
              <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full">
                June 01, 2024
              </span>
              <img
                src="/images/Burger.png"
                alt="Burger"
                className="w-full h-auto rounded-t-3xl mt-4"
              />
            </div>
            <div className="bg-white rounded-b-3xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Behind the Scenes: Crafting the Perfect Burger at Xabite!
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse blandit placerat ex, vitae accumsan enim semper eget.
              </p>
            </div>
          </div>

          {/* Additional Blogs */}
          <div className="grid grid-cols-2 lg:grid-cols-2 col-span-2 gap-6">
            {/* Blog 1 */}
            <div className="col-span-1">
              <div className="bg-black rounded-t-3xl p-8 shadow-md">
                <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full">
                  June 01, 2024
                </span>
                <img
                  src="/images/Burger.png"
                  alt="Burger"
                  className="w-full h-auto rounded-t-3xl mt-4"
                />
              </div>
              <div className="bg-white rounded-b-3xl p-6 shadow-md text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Healthy Week: <br/> Try Xabite's New Salad Creations!
                </h3>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="col-span-1">
              <div className="bg-black rounded-t-3xl p-8 shadow-md">
                <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full">
                  June 01, 2024
                </span>
                <img
                  src="/images/Burger.png"
                  alt="Burger"
                  className="w-full h-auto rounded-t-3xl mt-4"
                />
              </div>
              <div className="bg-white rounded-b-3xl p-6 shadow-md text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Xabite's New Menu Delights: Fresh Flavors Await!
                </h3>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="col-span-1">
              <div className="bg-black rounded-t-3xl p-8 shadow-md">
                <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full">
                  June 01, 2024
                </span>
                <img
                  src="/images/Burger.png"
                  alt="Burger"
                  className="w-full h-auto rounded-t-3xl mt-4"
                />
              </div>
              <div className="bg-white rounded-b-3xl p-6 shadow-md text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Seasonal Surprises: Taste the Latest Specials at Xabite!
                </h3>
              </div>
            </div>

            {/* Blog 4 */}
            <div className="col-span-1">
              <div className="bg-black rounded-t-3xl p-8 shadow-md">
                <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full">
                  June 01, 2024
                </span>
                <img
                  src="/images/Burger.png"
                  alt="Burger"
                  className="w-full h-auto rounded-t-3xl mt-4"
                />
              </div>
              <div className="bg-white rounded-b-3xl p-6 shadow-md text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                Customer Spotlight: Why Xabite Fans Can't Get Enough!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
