import CustomizationWorksImage1 from "../../assets/how-customization-work.png";
import CustomizationWorksImage2 from "../../assets/how-customization-work_1.png";
import CustomizationWorksImage3 from "../../assets/how-customization-work_2.png";
import arrow1 from "../../assets/arrow1.webp";
import arrow2 from "../../assets/arrow2.webp";
import CustomizationWorkWave from "../CustomizationWorkWave";
import MainButton from "../MainButton";

const CustomizationWork = () => {
  return (
    <>
      <CustomizationWorkWave></CustomizationWorkWave>
      <div className="bg-secondary">
        <div className="max-w-screen-xl py-20 w-10/12 mx-auto">
          <div className="text-center  md:w-2/5  mx-auto">
            <h2 className="text-4xl md:text-[44px] font-bold color-white leading-10 md:leading-[50px]">
              How to Start!
            </h2>
            <p className="font-medium text-2xl leading-[36px] mt-5 color-white">
              High Quality Projects Get Done, Super-Easy & Fast!
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
              <div className="text-center mt-8 md:0">
                <div className="flex justify-center">
                  <img src={CustomizationWorksImage1} alt="" />
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-bold color-white">
                    Brief us about your project
                  </h2>
                  <p className="text-base color-white mt-2 w-2/3 mx-auto">
                    Let us know about your website project requirements - any
                    customization request.
                  </p>
                </div>
              </div>
              <div className="text-center mt-8 md:0">
                <div className="flex justify-center">
                  <img src={CustomizationWorksImage2} alt="" />
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-bold color-white">
                    Confirm the quotation
                  </h2>
                  <p className="text-base color-white mt-2 w-2/3 mx-auto">
                    We&#39;ll swiftly provide a customized quote. Once you
                    approve, let us take care of the rest!
                  </p>
                </div>
              </div>
              <div className="text-center mt-8 md:0">
                <div className="flex justify-center">
                  <img src={CustomizationWorksImage3} alt="" />
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-bold color-white">Get it Done</h2>
                  <p className="text-base color-white mt-2 w-2/3 mx-auto">
                    Boom ... your high converting web or app customization will
                    be done - on time.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute left-[200px] bottom-[60px] hidden lg:block">
              <img src={arrow1} alt="" />
            </div>
            <div className="absolute top-[60px] right-[280px] hidden lg:block ">
              <img src={arrow2} alt="" />
            </div>
            <div className="flex justify-center mt-8">
              <MainButton></MainButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizationWork;
