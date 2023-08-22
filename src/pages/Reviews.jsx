import Banner from "../components/UI/Banner";
import ReviewsBannerImage from "../assets/REVIEW.png";
import Wave from "../components/Wave";
import CompanyOverview from "../components/UI/CompanyOverview";
import LoveTrustSection from "../components/UI/LoveTrustSection";

const Reviews = () => {
  return (
    <>
      <Banner
        title="What people are saying"
        paragraph="We love our customers. Read what they have to say about the experience working with Bullzpot for their Shopify website development needs."
        images={ReviewsBannerImage}
        buttonState={false}
      ></Banner>
      <Wave></Wave>
      <LoveTrustSection></LoveTrustSection>
      <CompanyOverview></CompanyOverview>
    </>
  );
};

export default Reviews;
