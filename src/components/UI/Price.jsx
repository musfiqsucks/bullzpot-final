import { TiTick } from "react-icons/ti";
const Price = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-screen-xl py-8 w-10/12 mx-auto">
        <h2 className="text-[40px] font-bold color-primary text-center">
          on-demand
        </h2>
        <div className="gap-2 flex flex-col md:flex-row justify-center items-center">
          <div className="bg-tertiary duration-300 ease-in-out inline-block px-5 py-2 rounded-md">
            <div className="flex items-center justify-center">
              <div className="bg-[#F8D1A2] color-secondary h-7 w-7 flex justify-center rounded-full items-center">
                <TiTick size={20}></TiTick>
              </div>
              <span className="text-[40px] font-bold color-white ml-3">
                design
              </span>
            </div>
          </div>
          <div className="bg-tertiary duration-300 ease-in-out inline-block px-5 py-2 rounded-md">
            <div className="flex items-center justify-center">
              <div className="bg-[#F8D1A2] color-secondary h-7 w-7 flex justify-center rounded-full items-center">
                <TiTick size={20}></TiTick>
              </div>
              <span className="text-[40px] font-bold color-white ml-3">
                marketing
              </span>
            </div>
          </div>
          <div className="bg-tertiary duration-300 ease-in-out inline-block px-5 py-2 rounded-md">
            <div className="flex items-center justify-center">
              <div className="bg-[#F8D1A2] color-secondary h-7 w-7 flex justify-center rounded-full items-center">
                <TiTick size={20}></TiTick>
              </div>
              <span className="text-[40px] font-bold color-white ml-3">
                development
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-[40px] font-bold color-primary text-center">
          with no commitment
        </h2>
      </div>
    </div>
  );
};

export default Price;
