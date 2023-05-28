import React from "react";
import Journey from "../componants/Journey";
import Footer from "../componants/Footer";
import Faq from "../componants/Faq";
import Program from "../componants/Program";
import Review from "../componants/Review";
import Team from "../componants/Team";
import Recovery from "../componants/Recovery";
import Success from "../componants/Success";
import AboutHero from "../componants/AboutHero";
import Header from "../componants/Header";
import Loader from "../componants/Loader";

function About() {
  return (
    <div style={{ background: "#151515" }} className=" overflow-hidden">
      <Loader />
      <Header nav_tab_onhover_About="nav_tab_onhover_ActivePage" />
      <AboutHero MainText="AboutUs" />
      <Journey />
      <Team />
      <Recovery COlmnREvart=" flex-column-reverse" />
      <Success />
      <Review />
      <Faq Faq__BgGreen=" #25AE8614" />
      <Footer />
    </div>
  );
}

export default About;
