import React from "react";
import Arrow from "../assets/img/svg/arrow-curve1.svg";
import structure from "../assets/img/svg/structure-vector.svg";

function FeeStructure() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="linear"
      data-aos-delay="0"
      className="py-md-5 py-4 my-lg-5 mb-5 mb-lg-0 position-relative">
      <span className="GreenLayer3 position-absolute translate-middle z_index--1"></span>

      <div className="container">
        <div className="py-xl-5">
          {" "}
          <div className="row">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="linear"
              data-aos-delay="0"
              className="col-lg-6">
              <h2 className=" ff_jakarta fw_med fs_4x8l text-white opacity_09 position-relative text-center text-lg-start">
                Fee Structure
                <img
                  className="Text__Navigate_Arrow start-50 translate-middle-x ms-4 ms-lg-0 position-absolute d-none d-sm-flex"
                  src={Arrow}
                  alt="curve-arrow"
                />
              </h2>
              <div className="d-flex justify-content-center py-4 py-lg-5">
                <img src={structure} alt="img" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="linear"
              data-aos-delay="0"
              className="col-lg-6">
              <div className="d-flex flex-column gap-4 z_index1">
                <div
                  style={{ background: "#25AE8614", borderRadius: "16px" }}
                  className="py-4 px-3 z_index1">
                  <h2 className=" ff_jakarta fw_med fs_2x4l text-white mb-0 ps-1 ">
                    One Time Enrollment $3000/y
                  </h2>
                  <p className=" ff_roboto fw-normal fs_md text-white opacity_07 mb-0 mt-1 pe-lg-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint Velit officia consequat duis enim{" "}
                  </p>
                </div>
                <div
                  style={{ background: "#25AE8614", borderRadius: "16px" }}
                  className="py-4 px-3 z_index1">
                  <h2 className=" ff_jakarta fw_med fs_2x4l text-white mb-0 ps-1 ">
                    One Time Enrollment $3000/y
                  </h2>
                  <p className=" ff_roboto fw-normal fs_md text-white opacity_07 mb-0 mt-1 pe-lg-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint Velit officia consequat duis enim{" "}
                  </p>
                </div>
                <div
                  style={{ background: "#25AE8614", borderRadius: "16px" }}
                  className="py-4 px-3 z_index1">
                  <h2 className=" ff_jakarta fw_med fs_2x4l text-white mb-0 ps-1 ">
                    One Time Enrollment $3000/y
                  </h2>
                  <p className=" ff_roboto fw-normal fs_md text-white opacity_07 mb-0 mt-1 pe-lg-3">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint Velit officia consequat duis enim{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeeStructure;
