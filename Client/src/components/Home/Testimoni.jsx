import React from "react";

const Testimoni = () => {
  return (
    <section className="relative isolate overflow-hidden font-karla bg-gradient-to-r from-gray-100 to-gray-300 px-6 py-18 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 mt-6 mb-20 text-center">
          What Customers Say?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Judith Black"
            />
            <blockquote className="text-gray-800 text-lg italic mb-4">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”
            </blockquote>
            <figcaption>
              <h3 className="text-base font-semibold text-gray-900">
                Judith Black
              </h3>
              <p className="text-sm text-gray-600">CEO of Workcation</p>
            </figcaption>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="John Doe"
            />
            <blockquote className="text-gray-800 text-lg italic mb-4">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”
            </blockquote>
            <figcaption>
              <h3 className="text-base font-semibold text-gray-900">Mariana</h3>
              <p className="text-sm text-gray-600">Freelancer</p>
            </figcaption>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Alice Lee"
            />
            <blockquote className="text-gray-800 text-lg italic mb-4">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”
            </blockquote>
            <figcaption>
              <h3 className="text-base font-semibold text-gray-900">
                John Doe
              </h3>
              <p className="text-sm text-gray-600">Designer</p>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
