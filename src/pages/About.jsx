import Banner from "../components/UI/Banner";
import AboutBannerImage from "../assets/bullzpot-transparent.png";
import Wave from "../components/Wave";
import LoveTrustSection from "../components/UI/LoveTrustSection";
import BullzpotDifference from "../components/UI/BullzpotDifference";
import GreatPartners from "../components/UI/GreatPartners";
import AboutTimeline from "../components/UI/AboutTimeline";

const About = () => {
  return (
    <>
      <Banner
        title="About Us"
        paragraph="Bullzpot, based in Estonia, offers premier on-demand web and app design
        and development services tailored for e-commerce merchants. 
        Our dedication is to provide unparalleled service to our clients."
        images={AboutBannerImage}
        imgClass="about-logo"
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
