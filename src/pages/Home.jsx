import Banner from "../components/UI/Banner";
import BannerImage from "../assets/homepage-trans.png";
import Wave from "../components/Wave";
import CustomizationWork from "../components/UI/CustomizationWork";
import Partners from "../components/UI/Partners";
import LoveTrustSection from "../components/UI/LoveTrustSection";
import CompanyOverview from "../components/UI/CompanyOverview";
import CustomizationProject from "../components/UI/CustomizationProject";

const Home = () => {
  return (
    <>
      <Banner
        title="Need a stunning and optimized web shop?"
        paragraph={<p className="custom-paragraph">Get high sales with the help of our Shopify Experts, E-Commerce Consultants & Skilled Web Developers</p>}
        images={BannerImage}
        buttonState={true}
      ></Banner>
      <Partners></Partners>
      <Wave></Wave>
      <CompanyOverview></CompanyOverview>
      <LoveTrustSection></LoveTrustSection>
      <CustomizationWork></CustomizationWork>
      <CustomizationProject></CustomizationProject>
    </>
  );
};

export default Home;
