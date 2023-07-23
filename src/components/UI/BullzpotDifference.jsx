import cardIcon1 from "../../assets/cards_icons.png";
import cardIcon2 from "../../assets/cards_icons_1.webp";
import cardIcon3 from "../../assets/cards_icons_3.webp";
import cardIcon4 from "../../assets/cards_icons_8.png";
import cardIcon5 from "../../assets/cards_icons_9.webp";
import cardIcon6 from "../../assets/cards_icons_5.png";
const BullzpotDifference = () => {
  return (
    <div className="max-w-screen-xl py-8 w-10/12 mx-auto">
      <h2 className="text-[40px] font-bold color-primary mb-10 text-center">
        The Bullzpot difference
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <div className=" md:w-[60%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left ">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon1} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5 mb-4">
            No Project Minimums
          </h1>
          <p className="text-[22px] font-medium color-primary">
            Whether you need a couple tweaks to your website or you’d like a
            brand new website. We would happily review your project
            requirements.
          </p>
        </div>
        <div className=" md:w-[40%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon2} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5  mb-4">
            Unlimited Revisions
          </h1>
          <p className="text-[22px] font-medium color-primary">
            We understand sometimes after getting into the nitty gritty that
            what you thought you wanted and what you actually wanted are
            different. We are always happy to make minor modifications free of
            charge.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse mt-5 gap-5">
        <div className=" md:w-[60%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon3} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5 mb-4">
            100% Satisfaction Guarantee
          </h1>
          <p className="text-[22px] font-medium color-primary">
            If you are not 100% satisfied with the work we do, let us know. We
            will work until you are satisfied or credit your account for the
            project.
          </p>
        </div>
        <div className=" md:w-[40%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon4} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5  mb-4">
            Direct-to-Developer
          </h1>
          <p className="text-[22px] font-medium color-primary">
            You will be working directly with a web developer. No need to
            contact the account manager for one thing, project manager for
            another, and web developer for another.
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
            We are experts on the Shopify and Shopify Plus platforms. We love
            them so much and think they do such a great job for small
            businesses, they are the only platforms we support. It allows us to
            learn every little detail about them to deliver the best solution
            for you.
          </p>
        </div>
        <div className=" md:w-[40%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left">
          <div className="flex justify-center md:justify-start ">
            <img src={cardIcon6} alt="" />
          </div>
          <h1 className="text-3xl font-bold color-primary mt-5  mb-4">
            No Selling Policy
          </h1>
          <p className="text-[22px] font-medium color-primary">
            We will never try to sell you or push you towards a given solution.
            We want you to make the right choice for your business, not our bank
            account. Even if that means you working with someone else.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BullzpotDifference;
