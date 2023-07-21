import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partners from "../../assets/partners/partners.webp";
import partners1 from "../../assets/partners/partners_1.webp";
import partners2 from "../../assets/partners/partners_2.webp";
import partners3 from "../../assets/partners/partners_3.webp";
import partners4 from "../../assets/partners/partners_4.webp";
import partners5 from "../../assets/partners/partners_5.webp";
import partners6 from "../../assets/partners/partners_6.webp";
import partners8 from "../../assets/partners/partners_8.webp";
import partners9 from "../../assets/partners/partners_9.webp";

const Partners = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-primary">
      <div className="max-w-screen-xl w-10/12 mx-auto">
        <div className="text-center mb-8 pt-4 flex justify-between items-center">
          <div className="h-[2px] w-[35%] bg-[#DFDFDF]"></div>
          <h1 className="text-xl font-bold color-primary">
            Some of our great partners
          </h1>
          <div className="h-[2px] w-[35%] bg-[#DFDFDF]"></div>
        </div>
        <Slider {...settings}>
          <div>
            <img className="m-auto" src={partners} alt="" />
          </div>
          <div>
            <img className="m-auto" src={partners5} alt="" />
          </div>
          <div>
            <img className="m-auto" src={partners8} alt="" />
          </div>
          <div>
            <img className="m-auto" src={partners9} alt="" />
          </div>
          <div>
            <img className="m-auto" src={partners4} alt="" />
          </div>
          <div>
            <img className="m-auto" src={partners2} alt="" />
          </div>
          <div>
            <img className="m-auto" src={partners6} alt="" />
          </div>
          <div>
            <img className="m-auto" src={partners1} alt="" />
          </div>
          <div>
            <img className="m-auto" src={partners3} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
