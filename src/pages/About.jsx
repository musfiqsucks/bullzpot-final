import Banner from "../components/UI/Banner";
import AboutBannerImage from "../assets/about-page-banner-image.webp";
import Wave from "../components/Wave";

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
    </>
  );
};

export default About;
