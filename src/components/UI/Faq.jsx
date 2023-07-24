// import { useState } from "react";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import { faqData } from "../../helpers/data";

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleToggle = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };
//   return (
//     <div className="max-w-screen-xl py-8 w-10/12 mx-auto">
//       <div className="flex flex-col md:flex-row">
//         <div className="md:w-1/2">
//           <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//             Perspiciatis, autem.
//           </p>
//         </div>
//         <div className="faq-accordion md:w-1/2">
//           {faqData.map((item, index) => (
//             <div
//               className="faq-item mb-3 py-2 border-b-2 border-solid border-gray-300 "
//               key={index}
//             >
//               <div
//                 className="faq-question flex justify-between cursor-pointer"
//                 onClick={() => handleToggle(index)}
//               >
//                 <h3>{item.question}</h3>
//                 <span>
//                   {activeIndex === index ? (
//                     <AiOutlineMinus />
//                   ) : (
//                     <AiOutlinePlus />
//                   )}
//                 </span>
//               </div>
//               <p>
//                 {" "}
//                 {activeIndex === index && (
//                   <div className="faq-answer ">{item.answer}</div>
//                 )}
//               </p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;

import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { faqData } from "../../helpers/data";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-screen-xl py-8 md:py-16 w-10/12 mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-[40%]">
          <h1 className="text-[40px] font-bold color-primary">
            Any questions or doubts?
          </h1>
          <p className="text-xl font-medium color-primary my-6">
            We want you to be fully informed when you choose TaskHusky as your
            Shopify & Shopify Plus development team. We’ve compiled a list of
            frequently asked questions to help make your decision easier.
          </p>
          <p className="text-xl font-medium color-primary">
            Still have questions?{"  "}
            <span className="color-secondary"> Write to us</span>
          </p>
        </div>
        <div className="faq-accordion md:w-[60%]">
          {faqData.map((item, index) => (
            <div
              className="faq-item mb-3 py-2 border-b-[1px] border-solid border-[#c8c8d4ca] "
              key={index}
              // style={{ maxHeight: activeIndex === index ? "500px" : "0px" }}
            >
              <div
                className="faq-question flex justify-between cursor-pointer "
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-lg font-semibold color-primary">
                  {item.question}
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
                  <div className="faq-answer">{item.answer}</div>
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
