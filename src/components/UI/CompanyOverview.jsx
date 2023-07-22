import shopifyIcon from "../../assets/Shopify-Logo-icon.webp";
const CompanyOverview = () => {
  return (
    <div className="max-w-screen-xl w-10/12 my-12 md:my-20 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="text-center mb-8 md:text-left md:mb-0">
          <div>
            <h2 className="text-base font-bold color-primary">Bullzpot.com</h2>
            <h1 className="text-4xl font-bold color-primary">
              The Bullzpot <br /> difference
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
                  Shopify Experts since 2016
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
                    In-house team
                  </h2>
                </div>
                <p className="text-base color-primary font-medium mt-1">
                  No outsourced jobs. Our In-house team is here for you.
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
                  <h2 className="text-2xl color-primary font-bold ">20,000+</h2>
                </div>
                <p className="text-base color-primary font-medium mt-1">
                  projects completed with Shopify brands
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
                    Starting at $39
                  </h2>
                </div>
                <p className="text-base color-primary font-medium mt-1">
                  Agency quality at freelance prices
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
