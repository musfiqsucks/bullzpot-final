import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partners from "../../assets/partners/8.png";
import partners1 from "../../assets/partners/1.png";
import partners2 from "../../assets/partners/2.png";
import partners3 from "../../assets/partners/3.png";
import partners4 from "../../assets/partners/4.png";
import partners5 from "../../assets/partners/5.png";
import partners6 from "../../assets/partners/6.png";
import partners8 from "../../assets/partners/7.png";


const PartnersSlider = () => {
  let settings = {
    dots: false,
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
          dots: false,
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
  );
};

export default PartnersSlider;
