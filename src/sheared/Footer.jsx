import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import ShopifyImage from "../assets/Shopify_svg.webp";
import FooterWave from "../components/FooterWave";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="">
        <FooterWave></FooterWave>
        <div className="bg-[#FDF6E7]">
          <div className="max-w-screen-xl py-8 w-10/12 mx-auto">
            <div className="text-center">
            <Link to="/">
               <img
                className="footerlogo"
                src="https://i.ibb.co/mCXD87N/bullzpot-logo-footer.png"
                alt=""
              /> 
           
            </Link>
            </div>
            <div className="h-[1px] w-full bg-[#E7E0D9] my-14"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    <Link
                      to="/about-us"
                      className="text-lg font-medium hover:underline"
                    >
                      <span>About</span>
                    </Link>
                    <Link
                      to="/reviews "
                      className="text-lg font-medium hover:underline"
                    >
                      <span>Reviews</span>
                    </Link>
                    <Link
                      to="/pricing"
                      className="text-lg font-medium hover:underline"
                    >
                      <span>Pricing</span>
                    </Link>
                    <Link
                      to="/support"
                      className="text-lg font-medium hover:underline"
                    >
                      <span>Support</span>
                    </Link>
                  </div>
                  <div className="flex justify-center gap-8 mt-5">
                    <a
                      href="https://www.linkedin.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <BsLinkedin
                        size={20}
                        className=" color-primary"
                      ></BsLinkedin>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaFacebookSquare
                        size={20}
                        className=" color-primary"
                      ></FaFacebookSquare>
                    </a>
                    <a
                      href="https://www.github.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <BsGithub size={20} className=" color-primary"></BsGithub>
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <BsTwitter
                        size={20}
                        className=" color-primary"
                      ></BsTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center text-center">
                <div className="">
                  <p className="text-xl font-medium ">Mighty Web Services</p>
                  <p className="text-base mt-2 font-normal hidden md:block">
                    &copy; {year} Bullzpot, All rights reserved.
                  </p>
                </div>
              </div>
              <div className="flex justify-center text-center">
                <div>
                  <div className="flex justify-center">
                    <img src={ShopifyImage} alt="" />
                  </div>
                  <p className="my-2">
                    Grow your business, <br /> Create an online shop.
                  </p>
                  <button className="bg-[#95BF47] mt-2 py-2 px-6 rounded-md font-semibold text-lg color-white">
                    <a
                      href="https://www.shopify.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Try it free today
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center block md:hidden mt-6">
              <p className="text-base font-normal">
                &copy; {year} Bullzpot, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
