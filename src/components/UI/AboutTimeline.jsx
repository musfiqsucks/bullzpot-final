import timeLineImage from "../../assets/bull.png";
import { mobileTimelineData } from "../../helpers/data";

const AboutTimeline = () => {
  return (
    <div className="max-w-screen-xl py-8 w-10/12 mx-auto">
      <div className="text-center">
        <h2 className="text-[40px] font-bold color-primary mb-10 ">
          Bullzpot Timeline
        </h2>
        <div className="flex justify-center">
          <img src={timeLineImage} alt="" />
        </div>
        <h2 className="text-2xl font-bold color-primary my-5">Starting time</h2>
        <p className="text-lg font-medium color-primary w-full md:w-2/3 m-auto">
          We&#39;ve curated a set of FAQ questions to quench your curiosity.
          Armed with this knowledge, make a choice that resonates with
          confidence.
        </p>
      </div>
      {/* timelineStart */}
      <div className="relative wrap overflow-hidden p-10 h-full hidden md:block">
        <div
          className=" border-2-2 absolute border-opacity-20 border-gray-700 h-full border border-solid"
          style={{ left: "50%" }}
        ></div>
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">1</h1>
          </div>
          <div className="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-6 text-right">
            <h3 className="mb-3 font-bold text-white text-2xl">
              First Few Days
            </h3>
            <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-80">
              We&#39;ve curated a set of FAQ questions to quench your curiosity.
              At this point, be assured that our team will take care of your
              requirements as quick as possible.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-[42%]"></div>
          <div className="z-20 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
          </div>
          <div className="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-6">
            <h3 className="mb-3 font-bold text-white text-2xl">
              Growing with Bullzpot
            </h3>
            <p className="text-lg leading-snug tracking-wide text-white text-opacity-80">
              Experience the transformation of your online store as conversions
              soar!
            </p>
          </div>
        </div>
      </div>
      <div className="text-center hidden md:block">
        <h2 className="text-2xl font-bold color-primary my-4 ">Now</h2>
        <p className="text-lg w-2/3 m-auto font-medium leading-snug tracking-wide text-primary text-opacity-80">
          Thank you for trusting us! You&#39;ve now witnessed one of the best
          business decisions you&#39;ve made this year.
        </p>
      </div>
      {/* timelineEnd */}
      {/* timeline for mobile view code start  */}
      <div className="block md:hidden">
        {mobileTimelineData?.map((data, index) => (
          <div
            key={index}
            className={`order-1 bg-secondary rounded-lg shadow-xl px-6 py-6 text-center ${
              data?.marginTop ? data.marginTop : "mt-8"
            }`}
          >
            <h3 className="mb-3 font-bold text-white text-2xl">
              {data?.title}
            </h3>
            <p className="text-base font-medium leading-snug tracking-wide text-white text-opacity-80">
              {data?.description}
            </p>
          </div>
        ))}
      </div>
      {/*timeline for mobile view code end */}
    </div>
  );
};

export default AboutTimeline;
