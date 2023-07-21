import Banner from "../components/UI/Banner";
import ReviewsBannerImage from "../assets/review-page-banner-image.webp";
import Wave from "../components/Wave";

const Reviews = () => {
  return (
    <>
      <Banner
        title="What people
      are saying"
        paragraph="We love our customers. Read what they
      have to say about the experience working
      with Bullzpot for their Shopify website
      development needs."
        images={ReviewsBannerImage}
        buttonState={false}
      ></Banner>
      <Wave></Wave>
    </>
  );
};

export default Reviews;
