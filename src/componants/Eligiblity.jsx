import React from "react";
import green from "../assets/img/svg/right-tik.svg";
import wrong from "../assets/img/svg/red-cross.svg";
import Arrow from "../assets/img/svg/arrow-curve.svg";
import greenRight from "../assets/img/svg/green-right-vector.svg";

function Eligiblity() {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="linear"
        data-aos-delay="0"
        id="Eligible"
        className="py-5 my-xl-5 position-relative">
        <div className="container py-xl-4">
          <div className=" py-lg-5 my-xl-5">
            {" "}
            <div className="row">
              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-easing="linear"
                data-aos-delay="0"
                className="col-lg-9 mx-auto">
                {" "}
                <h2 className="ff_jakarta fw_med fs_4x8l text-white opacity_09 text-center">
                  {" "}
                  <span className="position-relative">
                    Who
                    <img
                      className="Text__Navigate_Arrow position-absolute me-5 mt-5 translate-middle-y"
                      src={Arrow}
                      alt="curve-arrow"
                    />
                  </span>{" "}
                  will be eligible for
                  <span className="d-block">the Program</span>
                </h2>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-easing="linear"
                  data-aos-delay="0"
                  className="row mt-lg-5 mt-4 justify-content-center">
                  {" "}
                  <div className="col-md-6 pt-2">
                    <div className=" Commn_Green_border_On_hover Eliglibliti_Bg_child px-lg-5 px-4 py-lg-5 py-4 position-relative overflow-hidden">
                      <span className="GreenLayer_success position-absolute ms-5"></span>

                      <img src={green} alt="RIGHT" />
                      <ul className="m-0 p-0 mt-4 z_index1 position-relative">
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Prevention vision loss
                        </li>
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Drusen
                        </li>
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Wet in an eye
                        </li>
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Diabetic Retinopathy
                        </li>
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Prevention wet AMD
                        </li>
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Vision loss
                        </li>
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Wet in both eyes
                        </li>
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Cataract + AMD
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 pt-2 mt-4 mt-md-0 ">
                    <div className="Eliglibliti_Bg_child Commn_Green_border_On_hover px-lg-5 px-4 py-lg-5 py-4 position-relative overflow-hidden h-100">
                      <span className="GreenLayer_success position-absolute ms-5"></span>

                      <img src={wrong} alt="RIGHT" />
                      <ul className="m-0 p-0 mt-4 z_index1 position-relative h-100">
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Macular hole
                        </li>
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Irreversible legal Blindness
                        </li>
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Macular Puckar
                        </li>
                        <li className="ff_roboto fw-normal fs_md text_white mt-3">
                          {" "}
                          <img
                            className="me-2 pe-1"
                            src={greenRight}
                            alt="icon"
                          />
                          Chemotherapy
                        </li>
                      </ul>
                    </div>
                  </div>
                  <span className="d-flex justify-content-center pt-3">
                    <button className="ff_jakarta fw-semibold text-white fs_md common_btn mt-4 position-relative">
                      <span> Learn More</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Eligiblity;
