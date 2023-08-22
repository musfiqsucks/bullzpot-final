import Faq from "../components/UI/Faq";
import LoveTrustSection from "../components/UI/LoveTrustSection";
import Price from "../components/UI/Price";
import PriceCard from "../components/UI/PriceCard";
import Wave from "../components/Wave";

const Pricing = () => {
  return (
    <div>
      <Price></Price>
      <PriceCard></PriceCard>
      <Wave></Wave>
      <LoveTrustSection></LoveTrustSection>
      <Faq></Faq>
    </div>
  );
};

export default Pricing;
