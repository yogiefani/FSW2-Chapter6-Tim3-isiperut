import React from "react";

const BlogSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-4 gap-6 items-start">
          {/* Title */}
          <div className="col-span-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 mt-6 mb-20 text-left">
            Fresh Flavors, Fresh Stories <br/>
            Explore Our Blog!
          </h2>
          </div>
          {/* Blog Post 2 */}
          <div className="col-span-1 bg-orange-200 p-6 rounded-lg shadow-md">
            <article>
              <span className="text-sm font-medium text-red-600">June 01, 2024</span>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Healthy Week: Try Xabite's New Salad Creations!
              </h3>
            </article>
          </div>
          {/* Blog Post 3 */}
          <div className="col-span-1 bg-yellow-200 p-6 rounded-lg shadow-md">
            <article>
              <span className="text-sm font-medium text-red-600">June 01, 2024</span>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Xabite's New Menu Delights: Fresh Flavors Await!
              </h3>
            </article>
          </div>
          {/* Main Blog Post */}
          <div className="col-span-2 bg-red-200 p-6 rounded-lg shadow-md">
            <article>
              <span className="text-sm font-medium text-red-600">June 01, 2024</span>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Behind the Scenes: Crafting the Perfect Burger at Xabite!
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit placerat ex, vitae accumsan enim semper eget.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read more
              </a>
            </article>
          </div>
          {/* Blog Post 4 */}
          <div className="col-span-1 bg-orange-200 p-6 rounded-lg shadow-md">
            <article>
              <span className="text-sm font-medium text-red-600">June 01, 2024</span>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Seasonal Surprises: Taste the Latest Specials at Xabite!
              </h3>
            </article>
          </div>
          {/* Blog Post 5 */}
          <div className="col-span-1 bg-yellow-200 p-6 rounded-lg shadow-md">
            <article>
              <span className="text-sm font-medium text-red-600">June 01, 2024</span>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Customer Spotlight: Why Xabite Fans Can't Get Enough!
              </h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


{/* <div class="grid grid-rows-3 grid-flow-col gap-4">
  Judul 
  <div class="bg-red-200 row-start-2 row-span-5 col-span-4...">1</div>
  <div class="bg-orange-200 row-span-3 col-span-2  ...">2</div>
  <div class="bg-yellow-200 row-span-3 col-span-2 ...">3</div>
  <div class="bg-orange-200 row-span-3 col-span-2  ...">4</div>
  <div class="bg-yellow-200 row-span-3 col-span-2 ...">5</div>
</div> */}