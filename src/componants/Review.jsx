import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Arrow from "../assets/img/svg/arrow-curve.svg";
import Image__Slide from "../assets/img/webp/review-img.webp";

function Review() {
  const MyBtn = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="linear"
        data-aos-delay="0"
        id="Review"
        className="py-4 py-lg-5 my-5 position-relative">
        <div className="container position-relative py-lg-5">
          <span
            style={{ margin: "50px 0 0 80px" }}
            className="GreenLayer4 top-50 start-0 translate-middle-y position-absolute"></span>
          <h2 className="ff_jakarta fw_med fs_4x8l text-white opacity_09 text-center mb-0 pt-md-3 px-3">
            <span className="position-relative">
              {" "}
              What{" "}
              <img
                style={{ padding: "0 180px 0 0" }}
                className="Text__Navigate_Arrow position-absolute start-0 translate-middle-x"
                src={Arrow}
                alt="curve-arrow"
              />
            </span>{" "}
            our patients say
          </h2>
          <p className="ff_roboto fw-normal fs_md text_white opacity_07 text-center mb-0 mt-2 pt-1 px-3">
            Viverra nisi integer convallis ultricies tellus mauris. Ante purus
            pretium ac vitae morbi in{" "}
            <span className="d-md-block">
              ultricies ut. Orci pharetra adipiscing ut.
            </span>
          </p>
          <Slider {...settings}>
            <div style={{ background: "##151515" }} className=" bg_black">
              <div className="row align-items-center justify-content-between bg-transparent">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-easing="linear"
                  data-aos-delay="0"
                  className="col-lg-5 mt-md-4 mt-lg-0">
                  <div className="w-100 my-lg-4 pb-lg-4 pb-sm-0 py-2 z_index1 position-relative d-flex">
                    <img
                      className="w-100 pe-lg-4"
                      src={Image__Slide}
                      alt="img"
                    />
                  </div>
                </div>{" "}
                <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-easing="linear"
                  data-aos-delay="0"
                  className="col-lg-6 ">
                  <div className="px-4  flex-column-reverse flex-lg-column  pt-4 z_index1 position-relative d-flex flex-column align-items-center align-items-lg-start">
                    <div className=" pt-4 z_index1 position-relative d-flex flex-column align-items-center align-items-lg-start">
                      {" "}
                      <h2 className=" ff_jakarta fw_med fs_2x4l text_white">
                        Alex willson
                      </h2>
                      <p className="ff_roboto fw-normal fs_md text-white opacity_07 mb-0 mt-2 pt-1">
                        Lectus adipiscing pulvinar et praesent justo libero
                        luctus tortor. A semper feugiat non dui ut egestas eu.
                        Euismod eu fames ante in vestibulum duis in odio. Amet
                        pharetra mauris at pellentesque. Netus libero nulla eu
                        id.
                      </p>
                      <a
                        className=" ff_roboto fw-normal fs_md text_ligth_green mt-2 pt-1 d-inline-block"
                        href="#">
                        Read More...
                      </a>
                    </div>
                    <span className="d-flex gap-3 mt-lg-5 mt-4">
                      <svg
                        onClick={() => MyBtn.current.slickPrev()}
                        style={{ rotate: "180deg" }}
                        className="SvgHoverGreen cursor_pointer"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                          cx="17.9247"
                          cy="18.0043"
                          r="17.6415"
                          fill=""
                          stroke-width="0.801887"
                          stroke="#27BBA2"
                        />
                        <path
                          d="M15.4186 10.7071L22.1745 17.4429C22.2547 17.5231 22.3116 17.61 22.3453 17.7035C22.379 17.7971 22.3955 17.8973 22.395 18.0042C22.395 18.1112 22.3784 18.2114 22.3453 18.3049C22.3121 18.3985 22.2552 18.4854 22.1745 18.5656L15.4186 25.3215C15.2315 25.5086 14.9976 25.6021 14.7169 25.6021C14.4363 25.6021 14.1957 25.5019 13.9952 25.3014C13.7948 25.1009 13.6945 24.867 13.6945 24.5998C13.6945 24.3325 13.7948 24.0986 13.9952 23.8981L19.8891 18.0042L13.9952 12.1104C13.8081 11.9233 13.7146 11.6926 13.7146 11.4183C13.7146 11.1441 13.8148 10.907 14.0153 10.7071C14.2158 10.5066 14.4496 10.4064 14.7169 10.4064C14.9842 10.4064 15.2181 10.5066 15.4186 10.7071Z"
                          fill="#27BBA2"
                        />
                      </svg>
                      <svg
                        onClick={() => MyBtn.current.slickNext()}
                        className="SvgHoverGreen cursor_pointer"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                          cx="17.9247"
                          cy="18.0043"
                          r="17.6415"
                          fill=""
                          stroke-width="0.801887"
                          stroke="#27BBA2"
                        />
                        <path
                          d="M15.4186 10.7071L22.1745 17.4429C22.2547 17.5231 22.3116 17.61 22.3453 17.7035C22.379 17.7971 22.3955 17.8973 22.395 18.0042C22.395 18.1112 22.3784 18.2114 22.3453 18.3049C22.3121 18.3985 22.2552 18.4854 22.1745 18.5656L15.4186 25.3215C15.2315 25.5086 14.9976 25.6021 14.7169 25.6021C14.4363 25.6021 14.1957 25.5019 13.9952 25.3014C13.7948 25.1009 13.6945 24.867 13.6945 24.5998C13.6945 24.3325 13.7948 24.0986 13.9952 23.8981L19.8891 18.0042L13.9952 12.1104C13.8081 11.9233 13.7146 11.6926 13.7146 11.4183C13.7146 11.1441 13.8148 10.907 14.0153 10.7071C14.2158 10.5066 14.4496 10.4064 14.7169 10.4064C14.9842 10.4064 15.2181 10.5066 15.4186 10.7071Z"
                          fill="#27BBA2"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-5 mt-4 mt-lg-0">
                  <div className="w-100 my-sm-4 pb-4 pb-sm-0 py-2 z_index1 position-relative d-flex">
                    <img className="w-100 pe-lg-4" src={Image__Slide} alt="img" />
                  </div>
                </div>{" "}
                <div className="col-lg-6 ">
                  <div className="px-4  flex-column-reverse flex-lg-column  pt-4 z_index1 position-relative d-flex flex-column align-items-center align-items-lg-start">
                    <div className=" pt-4 z_index1 position-relative d-flex flex-column align-items-center align-items-lg-start">
                      {" "}
                      <h2 className=" ff_jakarta fw_med fs_2x4l text_white">
                        Alex willson
                      </h2>
                      <p className="ff_roboto fw-normal fs_md text-white opacity_07 mb-0 mt-2 pt-1">
                        Lectus adipiscing pulvinar et praesent justo libero
                        luctus tortor. A semper feugiat non dui ut egestas eu.
                        Euismod eu fames ante in vestibulum duis in odio. Amet
                        pharetra mauris at pellentesque. Netus libero nulla eu
                        id.
                      </p>
                      <a
                        className=" ff_roboto fw-normal fs_md text_ligth_green mt-2 pt-1 d-inline-block"
                        href="#">
                        Read More...
                      </a>
                    </div>
                    <span className="d-flex gap-3 mt-lg-5 mt-4">
                      <svg
                        onClick={() => MyBtn.current.slickPrev()}
                        style={{ rotate: "180deg" }}
                        className="SvgHoverGreen cursor_pointer"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                          cx="17.9247"
                          cy="18.0043"
                          r="17.6415"
                          fill=""
                          stroke-width="0.801887"
                          stroke="#27BBA2"
                        />
                        <path
                          d="M15.4186 10.7071L22.1745 17.4429C22.2547 17.5231 22.3116 17.61 22.3453 17.7035C22.379 17.7971 22.3955 17.8973 22.395 18.0042C22.395 18.1112 22.3784 18.2114 22.3453 18.3049C22.3121 18.3985 22.2552 18.4854 22.1745 18.5656L15.4186 25.3215C15.2315 25.5086 14.9976 25.6021 14.7169 25.6021C14.4363 25.6021 14.1957 25.5019 13.9952 25.3014C13.7948 25.1009 13.6945 24.867 13.6945 24.5998C13.6945 24.3325 13.7948 24.0986 13.9952 23.8981L19.8891 18.0042L13.9952 12.1104C13.8081 11.9233 13.7146 11.6926 13.7146 11.4183C13.7146 11.1441 13.8148 10.907 14.0153 10.7071C14.2158 10.5066 14.4496 10.4064 14.7169 10.4064C14.9842 10.4064 15.2181 10.5066 15.4186 10.7071Z"
                          fill="#27BBA2"
                        />
                      </svg>
                      <svg
                        onClick={() => MyBtn.current.slickNext()}
                        className="SvgHoverGreen cursor_pointer"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                          cx="17.9247"
                          cy="18.0043"
                          r="17.6415"
                          fill=""
                          stroke-width="0.801887"
                          stroke="#27BBA2"
                        />
                        <path
                          d="M15.4186 10.7071L22.1745 17.4429C22.2547 17.5231 22.3116 17.61 22.3453 17.7035C22.379 17.7971 22.3955 17.8973 22.395 18.0042C22.395 18.1112 22.3784 18.2114 22.3453 18.3049C22.3121 18.3985 22.2552 18.4854 22.1745 18.5656L15.4186 25.3215C15.2315 25.5086 14.9976 25.6021 14.7169 25.6021C14.4363 25.6021 14.1957 25.5019 13.9952 25.3014C13.7948 25.1009 13.6945 24.867 13.6945 24.5998C13.6945 24.3325 13.7948 24.0986 13.9952 23.8981L19.8891 18.0042L13.9952 12.1104C13.8081 11.9233 13.7146 11.6926 13.7146 11.4183C13.7146 11.1441 13.8148 10.907 14.0153 10.7071C14.2158 10.5066 14.4496 10.4064 14.7169 10.4064C14.9842 10.4064 15.2181 10.5066 15.4186 10.7071Z"
                          fill="#27BBA2"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Review;
