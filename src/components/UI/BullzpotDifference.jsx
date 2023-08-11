import cardIcon1 from "../../assets/icons8-cursor-64.png";
import cardIcon2 from "../../assets/icons8-infinity-64.png";
import cardIcon3 from "../../assets/icons8-cool-64.png";
import cardIcon4 from "../../assets/icons8-one-to-one-64.png";
import cardIcon5 from "../../assets/cards_icons_9.webp";
import cardIcon6 from "../../assets/icons8-best-64.png";
const BullzpotDifference = () => {
  return (
    <div className="max-w-screen-xl py-8 w-10/12 mx-auto">
      <h2 className="text-[40px] font-bold color-primary mb-10 text-center">
        Mighty Web Services
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <div className=" md:w-[60%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left ">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon1} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5 mb-4">
            The Sky is the Limit
          </h1>
          <p className="text-[22px] font-medium color-primary">
            From minor website adjustments to crafting an entirely new site,
            we&#39;re here to address your needs. We eagerly welcome the
            opportunity to discuss your project specifications.
          </p>
        </div>
        <div className=" md:w-[40%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon2} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5  mb-4">
            Endless Fine-Tuning
          </h1>
          <p className="text-[22px] font-medium color-primary">
            We recognize that once we delve into the details, your initial
            vision might evolve. Rest assured, we&#39;re committed to perfecting
            your project, offering complimentary minor adjustments whenever
            needed.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse mt-5 gap-5">
        <div className=" md:w-[60%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon3} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5 mb-4">
            Full Satisfaction Promise
          </h1>
          <p className="text-[22px] font-medium color-primary">
            Your contentment is our priority. If our work doesn&#39;t entirely
            meet your expectations, communicate your concerns. We&#39;re
            committed to refining until you&#39;re fully pleased.
          </p>
        </div>
        <div className=" md:w-[40%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon4} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5  mb-4">
            One-on-One with Your Developer
          </h1>
          <p className="text-[22px] font-medium color-primary">
            Engage directly with the dedicated web developer for all your needs.
            Bypass the layers—no juggling between account managers, project
            coordinators, or multiple contacts. Your direct line to the
            expertise ensures streamlined communication and efficient project
            execution.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-5 gap-5">
        <div className=" md:w-[60%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon5} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5 mb-4">
            Shopify Experts
          </h1>
          <p className="text-[22px] font-medium color-primary">
            We have a cool group of developers whose passion lie deeply with
            Shopify and Shopify Plus. We firmly believe these platforms are
            unparalleled in supporting small businesses, so much so that they
            are the exclusive platforms we endorse. This focus enables us to
            master every nuance, ensuring we provide you with the optimal
            solution.
          </p>
        </div>
        <div className=" md:w-[40%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon6} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5  mb-4">
            We do it for excellence
          </h1>
          <p className="text-[22px] font-medium color-primary">
            We refrain from any upselling tactics or steering you towards
            specific solutions for our gain. Your 100% approval and satisfaction
            are our utmost priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BullzpotDifference;
