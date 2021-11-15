import React from "react";
import FAQ from "../FAQ/FAQ";
import IntroSection from "../IntroSection/IntroSection";
import Offer from "../Offer/Offer";
import Places from "../Places/Places";

const Home = () => {
  return (
    <div>
      {/* intro section or banner section  */}
      <IntroSection></IntroSection>
      {/* places Route  */}
      <Places></Places>
      {/* offering route  */}
      <Offer></Offer>
      {/* questions FAQ route  */}
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
