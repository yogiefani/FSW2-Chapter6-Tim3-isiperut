import React from "react";

const Testimoni = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: "/path-to-image/john.jpg",
      text: "This is an amazing service! I highly recommend it.",
    },
    {
      name: "Jane Smith",
      image: "/path-to-image/jane.jpg",
      text: "A truly wonderful experience. I will definitely come back!",
    },
    {
      name: "Alice Johnson",
      image: "/path-to-image/alice.jpg",
      text: "Fantastic support and quality. Five stars!",
    },
    {
      name: "Bob Brown",
      image: "/path-to-image/bob.jpg",
      text: "They exceeded my expectations. Great job!",
    },
    {
      name: "Emily Davis",
      image: "/path-to-image/emily.jpg",
      text: "Professional and reliable. Couldn't ask for more.",
    },
  ];

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item={index === 0 ? "active" : ""}
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <img
                src={testimonial.image}
                alt={`${testimonial.name} photo`}
                className="w-16 h-16 mb-4 rounded-full"
              />
              <p className="text-lg font-semibold text-gray-800">{testimonial.text}</p>
              <span className="mt-2 text-sm text-gray-600">- {testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Testimoni;
