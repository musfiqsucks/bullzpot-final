import projectIcon1 from "../../assets/cards_icons_3_small.webp";
import projectIcon2 from "../../assets/cards_icons_small.png";
import projectIcon3 from "../../assets/cards_icons_7_small.webp";
import projectIcon4 from "../../assets/cards_icons_4_3ca5f381-bd9c-4473-9019-b9a85aefb304_small.png";
import projectIcon5 from "../../assets/cards_icons_6_small.webp";
import projectIcon6 from "../../assets/cards_icons_4_small.webp";
import projectIcon7 from "../../assets/cards_icons_10_small.png";
import { BiSolidChevronRight } from "react-icons/bi";
import MainButton from "../MainButton";

const CustomizationProject = () => {
  return (
    <div className="max-w-screen-xl py-8 w-10/12 mx-auto">
      <div className="text-center">
        <h1 className="text-[40px] color-primary font-bold md:w-1/2 m-auto leading-[50px]">
          We have here to help with your Shopify and Shopify Plus customization
          projects
        </h1>
        <p className="font-base color-primary mt-4">
          Even small projects can have a huge impact!
        </p>
      </div>
      <div className="columns-1 md:columns-2 gap-5 mt-10">
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon1} alt="" />
          </div>
          <h1 className="text-2xl font-bold color-primary mt-5 md:mt-[90px] mb-4">
            Make Product Page customizations
          </h1>
          <p className="text-xl font-medium color-primary">
            Customizing a product page can greatly enhance the user experience
            by presenting information in a clear and organized manner. This can
            be achieved by adding or removing sections, adjusting the layout,
            and incorporating product images or videos.
          </p>
          <button className=" color-primary mt-3 flex justify-center items-center">
            Get a Free Quote
            <BiSolidChevronRight
              className="ml-1 "
              size={18}
            ></BiSolidChevronRight>
          </button>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon2} alt="" />
          </div>
          <h1 className="text-xl font-bold color-primary mt-5">
            Configure a brand new theme to hit the ground running
          </h1>
          <button className=" color-primary mt-3 flex justify-center items-center">
            Get a Free Quote
            <BiSolidChevronRight
              className="ml-1 "
              size={18}
            ></BiSolidChevronRight>
          </button>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon3} alt="" />
          </div>
          <h1 className="text-xl font-bold color-primary mt-5">
            Add small features like a shipping cost calculator or age
            verification gate
          </h1>
          <button className=" color-primary mt-3 flex justify-center items-center">
            Get a Free Quote
            <BiSolidChevronRight
              className="ml-1 "
              size={18}
            ></BiSolidChevronRight>
          </button>
        </div>
      </div>
      <div className="columns-1 md:columns-2 gap-5">
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon4} alt="" />
          </div>
          <h1 className="text-xl font-bold color-primary mt-5">
            Update your existing theme and get access to its newest features
          </h1>
          <button className=" color-primary mt-3 flex justify-center items-center">
            Get a Free Quote
            <BiSolidChevronRight
              className="ml-1 "
              size={18}
            ></BiSolidChevronRight>
          </button>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon5} alt="" />
          </div>
          <h1 className="text-xl font-bold color-primary mt-5">
            Get a full online store audit to learn what you should be optimizing
          </h1>
          <button className=" color-primary mt-3 flex justify-center items-center">
            Get a Free Quote
            <BiSolidChevronRight
              className="ml-1 "
              size={18}
            ></BiSolidChevronRight>
          </button>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon6} alt="" />
          </div>
          <h1 className="text-2xl font-bold color-primary mt-5 md:mt-[110px] mb-4">
            Page speed getting you down? Let&#39;s see how we can fix that
          </h1>
          <p className="text-xl font-medium color-primary">
            Increasing page speed can lead to a better user experience and lower
            bounce rates, which can ultimately result in an increase in sales.
            Faster loading pages can also improve SEO, making it easier for
            potential customers to find your website.
          </p>
          <button className=" color-primary mt-3 flex justify-center items-center">
            Get a Free Quote
            <BiSolidChevronRight
              className="ml-1 "
              size={18}
            ></BiSolidChevronRight>
          </button>
        </div>
      </div>
      <div className="mb-5 text-center border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <img src={projectIcon7} alt="" />
        </div>
        <h1 className="text-2xl font-bold color-primary mt-5 md:mt-10 mb-4">
          And everything else
        </h1>
        <p className="text-base color-primary md:w-2/5 m-auto">
          Don&#39;t see what you are looking for here? No worries. Create a Task
          request and a member of our team will let you know if it is possible.
        </p>
        <div className="flex justify-center my-6">
          <MainButton></MainButton>
        </div>
      </div>
    </div>
  );
};

export default CustomizationProject;
