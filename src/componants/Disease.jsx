import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "../assets/img/webp/img1.webp";
import img2 from "../assets/img/webp/img2.webp";
import img3 from "../assets/img/webp/im3.webp";

const images = [img1, img2];

function Disease() {
  window.onload = () => {
    let sliderImagesBox = document.querySelectorAll(".SliderCard");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".CardSlide:not(.hide)");
      let arrIndexes = []; // Index array
      (() => {
        // The loop that added values to the arrIndexes array for the first time
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i]; // Set indexes
        }
      };
      el.addEventListener("click", () => {
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      });
      setIndex(arrIndexes); // The first indexes addition
    });
  };

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="linear"
        data-aos-delay="00"
        id="Disease"
        className="py-4 py-lg-5 mt-5 position-relative">
        <span className="GreenLayer3 position-absolute"></span>
        <span className="GreenLayer4 position-absolute"></span>
        <div className="container ">
          <div
            style={{ background: " #27BBA214", borderRadius: "20px" }}
            className="">
            <div
              style={{
                background: "rgba(0, 0, 0, 0.14)",
                borderRadius: "20px 20px 0 0 ",
              }}
              className="py-4">
              <h2 className="ff_jakarta fw_med fs_4x8l text-white opacity_09 text-center mb-0 pt-3 px-3">
                Symptoms of the disease
              </h2>
              <p className="ff_roboto fw-normal fs_md text_white opacity_07 text-center mb-0 mt-2 pt-1 pb-3 px-3">
                Macular degeneration is a progressive eye disease that can cause
                a range of problems, including:
              </p>
            </div>
            <div className="row align-items-center">
              <div
                className="col-xxl-7 col-lg-6"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-easing="linear"
                data-aos-delay="0">
                <div className="px-4 pt-4 z_index1 position-relative d-flex flex-column align-items-center align-items-lg-start">
                  <h2 className=" ff_jakarta fw_med fs_3x2l text-white px-md-3 text-center text-lg-start">
                    Blurred or distorted central vision
                  </h2>
                  <p className="ff_roboto fw-normal fs_md text_white opacity_07 mb-0 mt-2 pt-1 px-md-3 text-center text-lg-start">
                    This is one of the primary symptoms of macular degeneration.
                    As the disease progresses, it can cause the vision to become
                    increasingly blurred or distorted, making it difficult to
                    read, recognize faces, or perform other tasks that require
                    clear vision.
                  </p>
                  <span className="px-3 d-flex gap-3 mt-lg-5 mt-4">
                    <svg
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
              <div
                className="col-xxl-5 col-lg-6 mt-4 mt-lg-0"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-easing="linear"
                data-aos-delay="0">
                <div className="w-100 my-sm-4 pb-4 pb-sm-0 py-2 z_index1 position-relative d-flex justify-content-center justify-content-lg-start">
                  <div className="SliderCard">
                    <div className="CardSlide hide">
                      <div className="content-placeholder"></div>
                    </div>
                    <div className="CardSlide">
                      <div className="content-placeholder">
                        <img className="Img_width_custom" src={img1} alt="" />
                      </div>
                    </div>
                    <div className="CardSlide">
                      <div className="content-placeholder">
                        <img className="Img_width_custom" src={img2} alt="" />
                      </div>
                    </div>
                    <div className="CardSlide">
                      <div className="content-placeholder">
                        <img className="Img_width_custom" src={img3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Disease;
