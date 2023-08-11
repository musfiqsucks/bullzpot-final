import shopifyIcon from "../../assets/Shopify-Logo-icon.webp";
const CompanyOverview = () => {
  return (
    <div className="max-w-screen-xl w-10/12 my-12 md:my-20 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="text-center mb-8 md:text-left md:mb-0">
          <div>
            <h2 className="text-base font-bold color-primary">Bullzpot.com</h2>
            <h1 className="text-4xl font-bold color-primary">
              Mighty Web <br /> Services
            </h1>
          </div>
        </div>
        <div>
          <div>
            <div className="md:flex ">
              <div className="h-[80px] w-[2px] bg-orange hidden md:block"></div>
              <div className="md:ml-4 text-center md:text-left">
                <div className="flex justify-center items-center">
                  <div className="h-6 w-6">
                    <img src={shopifyIcon} alt="" />
                  </div>
                  <h2 className="text-2xl color-primary font-bold ml-2">
                    Shopify experts
                  </h2>
                </div>
                <p className="text-base color-primary font-medium mt-1">
                  Shopify Experts since 2017
                </p>
              </div>
            </div>
            <div className="h-[2px] w-full bg-orange block md:hidden mt-4"></div>
          </div>
          <div>
            <div className="md:flex mt-10">
              <div className="h-[80px] w-[2px] bg-orange hidden md:block"></div>
              <div className="md:ml-4 text-center md:text-left">
                <div className="">
                  <h2 className="text-2xl color-primary font-bold">
                    Dedicated team
                  </h2>
                </div>
                <p className="text-base color-primary font-medium mt-1">
                  In-house expert team dedicated to serving your specific needs.
                </p>
              </div>
            </div>
            <div className="h-[2px] w-full bg-orange block md:hidden mt-4"></div>
          </div>
        </div>
        <div>
          <div>
            <div className="md:flex mt-5 md:mt-0 text-center">
              <div className="h-[80px] w-[2px] bg-orange hidden md:block"></div>
              <div className="md:ml-4 text-center md:text-left">
                <div className=" ">
                  <h2 className="text-2xl color-primary font-bold ">
                    100+ Projects
                  </h2>
                </div>
                <p className="text-base color-primary font-medium mt-1">
                  web and app projects completed with various businesses
                </p>
              </div>
            </div>
            <div className="h-[2px] w-full bg-orange block md:hidden mt-4"></div>
          </div>
          <div>
            <div className="md:flex mt-10">
              <div className="h-[80px] w-[2px] bg-orange hidden md:block"></div>
              <div className="md:ml-4 text-center md:text-left">
                <div className="">
                  <h2 className="text-2xl color-primary font-bold">
                    Starting at $99
                  </h2>
                </div>
                <p className="text-base color-primary font-medium mt-1">
                  Top agency quality at freelance rates
                </p>
              </div>
            </div>
            <div className="h-[2px] w-full bg-orange block md:hidden mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
