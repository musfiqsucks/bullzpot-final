import PartnersSlider from "./PartnersSlider";
const Partners = () => {
  return (
    <div className="bg-[#ECF4FF]">
      <div className="max-w-screen-xl w-10/12 mx-auto">
        <div className="text-center mb-8 pt-4 flex justify-between items-center">
          <div className="h-[2px] w-[35%] bg-[#DFDFDF]"></div>
          <h1 className="text-xl font-bold color-primary">What We Offer!</h1>
          <div className="h-[2px] w-[35%] bg-[#DFDFDF]"></div>
        </div>
        <PartnersSlider></PartnersSlider>
      </div>
    </div>
  );
};

export default Partners;
