import { TiTick } from "react-icons/ti";
import GuaranteedIcon from "../../assets/guaranted_icon.webp";
const PriceCard = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-screen-xl w-10/12 mx-auto ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-white border-solid border-[1px] border-gray-200 shadow-lg h-96 px-16 py-10">
            <div className="flex items-center mb-3">
              <div className="bg-secondary color-white h-4 w-4 flex justify-center rounded-full items-center">
                <TiTick size={12}></TiTick>
              </div>
              <span className="text-xl color-primary ml-2">No size limit</span>
            </div>
            <div className="flex items-center mb-3">
              <div className="bg-secondary color-white h-4 w-4 flex justify-center rounded-full items-center">
                <TiTick size={12}></TiTick>
              </div>
              <span className="text-xl color-primary ml-2">
                1 Active Task Request / Store
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
                Customize Your Experience
              </span>
            </div>
            <div className="flex items-center mb-3">
              <div className="bg-secondary color-white h-4 w-4 flex justify-center rounded-full items-center">
                <TiTick size={12}></TiTick>
              </div>
              <span className="text-xl color-primary ml-2">
                Risk Free Quote
              </span>
            </div>
            <div className="flex items-center mb-3">
              <div className="bg-secondary color-white h-4 w-4 flex justify-center rounded-full items-center">
                <TiTick size={12}></TiTick>
              </div>
              <span className="text-xl color-primary ml-2">
                100% Satisfaction Guarantee
              </span>
            </div>
          </div>
          <div className="md:w-1/2 h-96 bg-secondary px-10 py-10">
            <h2 className="text-2xl font-bold color-white">Average Cost</h2>
            <h1 className="text-[40px] font-bold color-white">$89 - $250</h1>
            <button className="bg-orange hover:bg-orange-400 duration-300 ease-in-out  py-3 w-full font-semibold my-8 rounded-md color-white px-6 flex justify-center items-center">
              Get a Free Quote
            </button>
            <div className="relative mt-10">
              <div className="flex">
                <div className="">
                  <img className="w-full" src={GuaranteedIcon} alt="" />
                </div>
              </div>
              <div className="color-white absolute top-0 left-14">
                <h2 className="text-xl font-bold">
                  100% Satisfaction Guaranteed
                </h2>
                <p className="text-base w-[95%]">
                  If you&#39;re not happy with the service, our team will work
                  until you are happy or provide an account credit.
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
