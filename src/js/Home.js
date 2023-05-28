import React from "react";
import Hero from "../componants/Hero";
import Disease from "../componants/Disease";
import Methodology from "../componants/Methodology";
import Method from "../componants/Method";
import Optmize from "../componants/Optmize";
import Recovery from "../componants/Recovery";
import Success from "../componants/Success";
import Eligiblity from "../componants/Eligiblity";
import Program from "../componants/Program";
import FeeStructure from "../componants/FeeStructure";
import Review from "../componants/Review";
import Faq from "../componants/Faq";
import Footer from "../componants/Footer";
import Loader from "../componants/Loader";

function Home() {
  return (
    <>
      <div style={{ background: "#151515" }} className=" overflow-hidden">
        <Loader />
        <Hero />
        <Disease />
        <Methodology />
        <Method />
        <Optmize />
        <Recovery />
        <Success />
        <Eligiblity />
        <FeeStructure />
        <Program />
        <Review />
        <Faq FaqShaddowNone="d-none" />
        <Footer />
      </div>
    </>
  );
}

export default Home;
