import projectIcon1 from "../../assets/icons8-change-theme-96.png";
import projectIcon2 from "../../assets/icons8-specification-of-the-engineering-material-with-estimate-cost-48.png";
import projectIcon3 from "../../assets/icons8-new-copy-48.png";
import projectIcon4 from "../../assets/icons8-update-48.png";
import projectIcon5 from "../../assets/icons8-increase-48.png";
import projectIcon6 from "../../assets/icons8-rocket-96.png";
import projectIcon7 from "../../assets/icons8-message-48.png";
import { BiSolidChevronRight } from "react-icons/bi";
import MainButton from "../MainButton";
import { Link } from "react-router-dom";

const CustomizationProject = () => {
  return (
    <div className="max-w-screen-xl py-8 w-10/12 mx-auto">
      <div className="text-center">
        <h1 className="text-[40px] color-primary font-bold md:w-1/2 m-auto leading-[50px]">
          We are here for your Shopify, WordPress and custom web <br></br>
          project needs.
        </h1>
        <p className="font-base color-primary mt-4">
          Even the smallest projects can make a significant difference!
        </p>
      </div>
      <div className="columns-1 md:columns-2 gap-5 mt-10">
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon1} alt="" />
          </div>
          <h1 className="text-2xl font-bold color-primary mt-5 md:mt-[35px] mb-4">
            Any Theme Customizations!
          </h1>
          <p className="text-xl font-medium color-primary">
            Looking to tailor your online store or website to your unique brand
            identity? We specialize in customizing both Shopify and WordPress
            themes to align perfectly with your vision. Whether it&#39;s a
            subtle change or a complete start from scratch, trust us to bring
            your digital dreams to life.
          </p>

          <button>
            <Link
              to="mailto:bullzpot@gmail.com?Subject=Any%20Theme%20Customization"
              className=" color-primary mt-3 flex justify-center items-center"
            >
              Get a Free Quote
              <BiSolidChevronRight
                className="ml-1 "
                size={18}
              ></BiSolidChevronRight>
            </Link>
          </button>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon2} alt="" />
          </div>
          <h1 className="text-xl font-bold color-primary mt-5">
            Configure a brand new theme to your specific needs!
          </h1>
          <button>
            <Link
              to="mailto:bullzpot@gmail.com?Subject=Configure%20a%20brand%20new%20theme%20to%20your%20specific%20needs"
              className=" color-primary mt-3 flex justify-center items-center"
            >
              Get a Free Quote
              <BiSolidChevronRight
                className="ml-1 "
                size={18}
              ></BiSolidChevronRight>
            </Link>
          </button>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon3} alt="" />
          </div>
          <h1 className="text-xl font-bold color-primary mt-5">
            Add any functional changes according to your business campaigns!
          </h1>
          <button>
            <Link
              to="mailto:bullzpot@gmail.com?Subject=Add%20any%20functional%20changes%20according%20to%20to%20your%20business%20campaigns"
              className=" color-primary mt-3 flex justify-center items-center"
            >
              Get a Free Quote
              <BiSolidChevronRight
                className="ml-1 "
                size={18}
              ></BiSolidChevronRight>
            </Link>
          </button>
        </div>
      </div>
      <div className="columns-1 md:columns-2 gap-5">
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon4} alt="" />
          </div>
          <h1 className="text-xl font-bold color-primary mt-5">
            Update your current website theme to the newest editions!
          </h1>
          <button>
            <Link
              to="mailto:bullzpot@gmail.com?Subject=Update%20your%20current%20website%20theme%20to%20the%20newest%20editions"
              className=" color-primary mt-3 flex justify-center items-center"
            >
              Get a Free Quote
              <BiSolidChevronRight
                className="ml-1 "
                size={18}
              ></BiSolidChevronRight>
            </Link>
          </button>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon5} alt="" />
          </div>
          <h1 className="text-xl font-bold color-primary mt-5">
            Get the online shop audited by our experts to increase sales
            significantly!
          </h1>
          <button>
            <Link
              to="mailto:bullzpot@gmail.com?Subject=Get%20the%20online%20shop%20audited%20by%20our%20experts%20to%20increase%20sales%20significantly"
              className=" color-primary mt-3 flex justify-center items-center"
            >
              Get a Free Quote
              <BiSolidChevronRight
                className="ml-1 "
                size={18}
              ></BiSolidChevronRight>
            </Link>
          </button>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <img src={projectIcon6} alt="" />
          </div>
          <h1 className="text-2xl font-bold color-primary mt-5 md:mt-[60px] mb-4">
            Is slow page speed troubling you?
          </h1>
          <p className="text-xl font-medium color-primary">
            Enhancing page load times can elevate user satisfaction and decrease
            the likelihood of visitors leaving prematurely. This can directly
            boost your sales figures. Moreover, swifter pages can bolster your
            SEO ranking, amplifying your site&#39;s visibility to prospective
            customers.
          </p>
          <button>
            <Link
              to="mailto:bullzpot@gmail.com?Subject=Is%20slow%20page%20speed%20troubling%20you?"
              className=" color-primary mt-3 flex justify-center items-center"
            >
              Get a Free Quote
              <BiSolidChevronRight
                className="ml-1 "
                size={18}
              ></BiSolidChevronRight>
            </Link>
          </button>
        </div>
      </div>
      <div className="mb-5 text-center border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <img src={projectIcon7} alt="" />
        </div>
        <h1 className="text-2xl font-bold color-primary mt-5 md:mt-6 mb-4">
          And much more!
        </h1>
        <p className="text-base color-primary md:w-2/5 m-auto">
          Can&#39;t find what you need? Submit a task request, and our team will
          quickly confirm the project and start working on it.
        </p>
        <div className="flex justify-center my-6">
          <MainButton></MainButton>
        </div>
      </div>
    </div>
  );
};

export default CustomizationProject;
