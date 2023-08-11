import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { faqData } from "../../helpers/data";
import { Link } from "react-router-dom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-screen-xl py-8 md:py-16 w-10/12 mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-[40%]">
          <h1 className="text-[40px] font-bold color-primary">FAQ</h1>
          <p className="text-xl font-medium color-primary my-6">
            We&#39;ve curated a set of FAQ questions to quench your curiosity.
            Armed with this knowledge, make a choice that resonates with
            confidence.
            <strong> Still questions? </strong>
          </p>
          <Link to="mailto:bullzpot@gmail.com">
            <button className="bg-orange hover:bg-orange-400 duration-300 ease-in-out  py-3 w-full font-semibold my-4 md:my-8 rounded-md color-white px-6 flex justify-center items-center">
              Write to Us
            </button>
          </Link>
        </div>
        <div className="faq-accordion md:w-[60%]">
          {faqData?.map((item, index) => (
            <div
              className="faq-item mb-3 py-2 border-b-[1px] border-solid border-[#c8c8d4ca] "
              key={index}
            >
              <div
                className="faq-question flex justify-between cursor-pointer "
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-lg font-semibold color-primary">
                  {item?.question}
                </h3>
                <span>
                  {activeIndex === index ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </span>
              </div>
              <p className="text base color-primary font-medium">
                {activeIndex === index && (
                  <div className="faq-answer">{item?.answer}</div>
                )}
              </p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
