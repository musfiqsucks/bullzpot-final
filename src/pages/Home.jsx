import Banner from "../components/UI/Banner";
import BannerImage from "../assets/illustrations.webp";
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
        title="Your Shopify Store Customized Your Way"
        paragraph="Sell more with the help of in-house Shopify Experts, Partners and Developers"
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
