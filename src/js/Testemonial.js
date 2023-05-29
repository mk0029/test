import React from "react";
import Header from "../componants/Header";
import AboutHero from "./../componants/AboutHero";
import VIdeoTestiMon from "../componants/VIdeoTestiMon";
import Experience from "../componants/Experience";
import Loader from "../componants/Loader";
import VideoGrid from "../componants/VideoGrid";
import Accordian from "../componants/Accordian";
import Footer from "../componants/Footer";

function Testemonial() {
  return (
    <div style={{ background: "#151515" }} className=" overflow-hidden">
      <Loader />
      <Header nav_tab_onhover_Testimo="nav_tab_onhover_ActivePage" />
      <AboutHero MainText="What people say  " />
      <VIdeoTestiMon />
      <VideoGrid />
      <Experience />
      <Accordian />
      <Footer />
    </div>
  );
}

export default Testemonial;
