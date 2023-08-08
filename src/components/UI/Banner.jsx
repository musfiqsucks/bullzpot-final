import MainButton from "../MainButton";
import PropTypes from "prop-types";
const Banner = ({ title, paragraph, images, buttonState }) => {
  return (
    <div className="bg-[#ECF4FF] py-5 md:py-10">
      <div className="max-w-screen-xl w-10/12 mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2">
            <div className="text-center mt-8 md:mt-0 md:text-left">
              <h1 className="text-3xl md:text-[50px] font-bold color-primary leading-10 md:leading-[60px]">
                {title}
              </h1>
              <p className="font-medium text-2xl leading-[36px] mt-5 color-primary">
                {paragraph}
              </p>
              {buttonState === true && (
                <div className="mt-8 flex justify-center md:justify-start">
                  <MainButton></MainButton>
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex justify-center items-center">
              <img src={images} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  buttonState: PropTypes.bool.isRequired,
};

export default Banner;
