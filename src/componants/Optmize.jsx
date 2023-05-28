import React from "react";
import plus from "../assets/img/svg/plus.svg";
import vactor from "../assets/img/svg/eye-vector.svg";

function Optmize() {
  return (
    <>
      <section
        data-aos="zoom-out"
        data-aos-duration="1500"
        data-aos-easing="linear"
        data-aos-delay="0"
        id="Optimize"
        className="position-relative py-lg-5 my-5">
        <img
          className="position-absolute Anim_RotatePlusIcon Optimize_Img_Pos d-none d-sm-flex"
          src={plus}
          alt="icon"
        />
        <img
          className="position-absolute Anim_RotatePlusIcon2 Optimize_Img_Pos2 d-none d-sm-flex"
          src={plus}
          alt="icon"
        />
        <img
          className="position-absolute Anim_RotatePlusIcon Optimize_Img_Pos3 d-none d-sm-flex"
          src={plus}
          alt="icon"
        />
        <img
          className="position-absolute Optimize_Img_Pos4 d-none d-sm-flex"
          src={vactor}
          alt="icon"
        />
        <img
          className="position-absolute Optimize_Img_Pos5 d-none d-sm-flex"
          src={vactor}
          alt="icon"
        />
        <span className="GreenLayer position-absolute top-50 start-50 translate-middle z_index0"></span>

        <div className="container position-relative z_index2">
          <div className="Optimize_bg py-sm-5 py-4 px-sm-4 px-2 d-flex flex-column align-items-center z_index1">
            <h2 className=" ff_jakarta fw_med fs_4x8l text-white text-center mb-0 pt-sm-4 z_index1">
              Optimize Biochemistry
            </h2>

            <p className="ff_roboto fw-normal fs_md text-white text-center opacity_07 mb-0 pt-1 mt-1">
              Lectus adipiscing pulvinar et praesent justo libero luctus tortor.
              A semper feugiat{" "}
              <span className="d-md-block">
                non dui ut egestas eu. Euismod eu fames ante in vestibulum duis
                in odio. Amet
              </span>{" "}
              pharetra mauris at pellentesque. Netus libero nulla eu id.
            </p>
            <button className="ff_jakarta fw-semibold text-white fs_md common_btn mt-md-5 mt-4">
              Book Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Optmize;
