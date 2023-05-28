import React from "react";
import Header from "./Header";
import eyes from "../assets/img/webp/eyes.webp";
import plus from "../assets/img/svg/plus.svg";
import vactor from "../assets/img/svg/eye-vector.svg";
import curve from "../assets/img/svg/curve.svg";

function Hero() {
  return (
    <section
      id="#Hero"
      className="min_vh_100 d-flex flex-column Header__main_Bg_img position-relative pb-5 pb-xxl-0">
      <img
        className="position-absolute Anim_RotatePlusIcon MediclePlusIco"
        src={plus}
        alt="icon"
      />
      <img
        className="position-absolute Anim_RotatePlusIconOpp MediclePlusIco2"
        src={plus}
        alt="icon"
      />
      <img
        className="position-absolute Anim_RotatePlusIconOpp MediclePlusIco3"
        src={plus}
        alt="icon"
      />
      <img
        className="position-absolute Anim_Eye EyeLogoIco"
        src={vactor}
        alt="icon"
      />
      <img
        className="position-absolute Anim_EyeOpp EyeLogoIco2"
        src={vactor}
        alt="icon"
      />
      <span className="GreenLayer position-absolute"></span>
      <span className="GreenLayer2 position-absolute"></span>
      <Header nav_tab_onhover_ActivePage="nav_tab_onhover_ActivePage" />
      <div className="container flex-grow-1 justify-content-center align-items-center d-flex">
        <div className="row">
          <div
            className="col-md-8 mx-auto"
            data-aos="flip-up"
            data-aos-duration="1500"
            data-aos-easing="linear"
            data-aos-delay="1700">
            <h1 className="ff_jakarta fw-semibold fs_5x6l text-white text-center mt-5 pt-lg-5 z_index1 mb-0">
              Seeing life{" "}
              <span className=" position-relative z_index2 d-inline-block">
                <img
                  className="curve_over_text position-absolute d-none d-md-inline"
                  src={curve}
                  alt=""
                />{" "}
                clearly
              </span>
              , with Macular Program
            </h1>
            <div className="position-relative">
              <img className="w-100" src={eyes} alt="header-img" />
              <div className="d-flex justify-content-center gap-4">
                <p className="ff_jakarta fw_med fs_md text_white Header__Blur_CArd_Bttom mb-0">
                  No Injection Required
                </p>
                <p className="ff_jakarta fw_med fs_md text_white Header__Blur_CArd mb-0">
                  Certificated Method
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
