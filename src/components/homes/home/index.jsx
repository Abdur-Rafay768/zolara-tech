import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import HeroSlider from "./hero-slider";
import AboutArea from "./about-area";
import FeatureArea from "./feature-area";
import ServiceArea from "./service-area"; 
import FaqArea from "./faq-area";
import Footer from "@/src/layout/footers/footer";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroSlider />
        <AboutArea />
        <FeatureArea />
        <ServiceArea />
        <div style={{marginTop: '10vh'}}></div>
        <FaqArea />
        <Footer />
      </main>
    </>
  );
};

export default HomeOne;
