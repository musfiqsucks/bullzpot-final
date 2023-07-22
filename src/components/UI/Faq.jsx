import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className="flex items-center focus:outline-none"
        onClick={toggleFAQ}
      >
        <svg
          className="flex-shrink-0 w-6 h-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12H4"
          ></path>
        </svg>
        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
          How can I pay for my appointment ?
        </h1>
      </button>

      {isOpen && (
        <div className="flex mt-8 md:mx-10">
          <span className="border border-blue-500"></span>
          <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum
            quae. Harum officiis reprehenderit ex quia ducimus minima id
            provident molestias optio nam vel, quidem iure voluptatem, repellat
            et ipsa.
          </p>
        </div>
      )}

      <hr className="my-8 border-gray-200 dark:border-gray-700" />
    </div>
  );
};

export default Faq;
