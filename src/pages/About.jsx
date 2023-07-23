import Banner from "../components/UI/Banner";
import AboutBannerImage from "../assets/about-page-banner-image.webp";
import Wave from "../components/Wave";
import LoveTrustSection from "../components/UI/LoveTrustSection";
import BullzpotDifference from "../components/UI/BullzpotDifference";
import GreatPartners from "../components/UI/GreatPartners";
import AboutTimeline from "../components/UI/AboutTimeline";

const About = () => {
  return (
    <>
      <Banner
        title="Who we are"
        paragraph="Bullzpot is an on-demand design and
        development service for Shopify merchants
        based in Kalamazoo, Michigan. We focused
        on delivering exceptional service to Shopify
        merchants."
        images={AboutBannerImage}
        buttonState={false}
      ></Banner>
      <Wave></Wave>
      <BullzpotDifference></BullzpotDifference>
      <AboutTimeline></AboutTimeline>
      <GreatPartners></GreatPartners>
      <LoveTrustSection></LoveTrustSection>
    </>
  );
};

export default About;
