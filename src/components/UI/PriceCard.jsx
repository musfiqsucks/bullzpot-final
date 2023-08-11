import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import GuaranteedIcon from "../../assets/guaranted_icon.webp";
const PriceCard = () => {
  return (
    <div className="bg-[#ECF4FF]">
      <div className="max-w-screen-xl w-10/12 mx-auto ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-white border-solid border-[1px] border-gray-200 shadow-lg h-96 px-16 py-10">
            <div className="flex items-center mb-3">
              <div className="bg-secondary color-white h-4 w-4 flex justify-center rounded-full items-center">
                <TiTick size={12}></TiTick>
              </div>
              <span className="text-xl color-primary ml-2">
                Any customisation request
              </span>
            </div>
            <div className="flex items-center mb-3">
              <div className="bg-secondary color-white h-4 w-4 flex justify-center rounded-full items-center">
                <TiTick size={12}></TiTick>
              </div>
              <span className="text-xl color-primary ml-2">
                Providing Top Notch Web Development
              </span>
            </div>
            <div className="flex items-center mb-3">
              <div className="bg-secondary color-white h-4 w-4 flex justify-center rounded-full items-center">
                <TiTick size={12}></TiTick>
              </div>
              <span className="text-xl color-primary ml-2">
                Unlimited Revisions
              </span>
            </div>
            <div className="flex items-center mb-3">
              <div className="bg-secondary color-white h-4 w-4 flex justify-center rounded-full items-center">
                <TiTick size={12}></TiTick>
              </div>
              <span className="text-xl color-primary ml-2">
                Experience the Best Consultation Service
              </span>
            </div>
            <div className="flex items-center mb-3">
              <div className="bg-secondary color-white h-4 w-4 flex justify-center rounded-full items-center">
                <TiTick size={12}></TiTick>
              </div>
              <span className="text-xl color-primary ml-2">
                Customized Quote for Your Needs
              </span>
            </div>
            <div className="flex items-center mb-3">
              <div className="bg-secondary color-white h-4 w-4 flex justify-center rounded-full items-center">
                <TiTick size={12}></TiTick>
              </div>
              <span className="text-xl color-primary ml-2">
                Customer Support
              </span>
            </div>
          </div>
          <div className="md:w-1/2 h-96 bg-secondary px-10 py-10">
            <h2 className="text-2xl font-bold color-white">Starting from</h2>
            <h1 className="text-[40px] font-bold color-white">$99 -</h1>
            <Link to="mailto:bullzpot@gmail.com">
              <button className="bg-orange hover:bg-orange-400 duration-300 ease-in-out  py-3 w-full font-semibold my-4 md:my-8 rounded-md color-white px-6 flex justify-center items-center">
                Get a Free Quote
              </button>
            </Link>

            <div className="relative mt-8 md:mt-10">
              <div className="flex">
                <div className="">
                  <img className="w-full" src={GuaranteedIcon} alt="" />
                </div>
              </div>
              <div className="color-white absolute top-0 left-6 md:left-14">
                <h2 className="text-xl font-bold">
                  Our Guarantee: Complete Satisfaction!
                </h2>
                <p className="text-base w-[95%]">
                  Your satisfaction fuels our commitment! If our service
                  doesn&#39;t meet your expectations, we&#39;ll go the extra
                  mile to meet your deamands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
