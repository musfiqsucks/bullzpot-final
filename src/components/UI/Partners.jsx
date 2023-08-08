// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import partners from "../../assets/partners/8.png";
// import partners1 from "../../assets/partners/1.png";
// import partners2 from "../../assets/partners/2.png";
// import partners3 from "../../assets/partners/3.png";
// import partners4 from "../../assets/partners/4.png";
// import partners5 from "../../assets/partners/5.png";
// import partners6 from "../../assets/partners/6.png";
// import partners8 from "../../assets/partners/7.png";
// import partners9 from "../../assets/partners/partners_9.webp";

import PartnersSlider from "./PartnersSlider";

const Partners = () => {
  // let settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="bg-primary">
      <div className="max-w-screen-xl w-10/12 mx-auto">
        <div className="text-center mb-8 pt-4 flex justify-between items-center">
          <div className="h-[2px] w-[35%] bg-[#DFDFDF]"></div>
          <h1 className="text-xl font-bold color-primary">
           What We Offer!
          </h1>
          <div className="h-[2px] w-[35%] bg-[#DFDFDF]"></div>
        </div>
        {/* <Slider {...settings}>
          <div>
            <img className="m-auto" src={1} alt="" />
          </div>
          <div>
            <img className="m-auto" src={2} alt="" />
          </div>
          <div>
            <img className="m-auto" src={3} alt="" />
          </div>
          <div>
            <img className="m-auto" src={partners9} alt="" />
          </div>
          <div>
            <img className="m-auto" src={4} alt="" />
          </div>
          <div>
            <img className="m-auto" src={5} alt="" />
          </div>
          <div>
            <img className="m-auto" src={6} alt="" />
          </div>
          <div>
            <img className="m-auto" src={7} alt="" />
          </div>
          <div>
            <img className="m-auto" src={8} alt="" />
          </div>
        </Slider> */}
        <PartnersSlider></PartnersSlider>
      </div>
    </div>
  );
};

export default Partners;
