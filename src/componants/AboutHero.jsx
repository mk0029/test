import React from "react";

import plus from "../assets/img/svg/plus.svg";
import vactor from "../assets/img/svg/eye-vector.svg";
import Header from "./Header";
function AboutHero(props) {
  return (
    <>
      <section
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-easing="linear"
        data-aos-delay="800"
        style={{ background: "#26B49C17" }}
        className="py-5 position-relative mt-3 overflow-hidden">
        <img
          className="position-absolute Anim_RotatePlusIcon MediclePlusIco__AterHeade"
          src={plus}
          alt="icon"
        />

        <img
          className="position-absolute Anim_Eye EYE_AboutHead"
          src={vactor}
          alt="icon"
        />
        <img
          className="position-absolute Anim_RotatePlusIcon plusicoSecond_Abouthead"
          src={plus}
          alt="icon"
        />

        <img
          className="position-absolute Anim_Eye EYESECOND_Abouthead"
          src={vactor}
          alt="icon"
        />

        <span
          style={{ margin: "70px 0 0 80px" }}
          className="GreenLayer_faq start-50 top-50 translate-middle position-absolute"></span>
        <div className="container">
          <div className="py-5 my-md-5">
            <h1 className=" ff_jakarta fw-semibold fs_5x6l text-white text-center position-relative z_index3">
              {props.MainText}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHero;
