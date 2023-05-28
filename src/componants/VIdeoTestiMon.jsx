import React, { useState } from "react";
import vector from "../assets/img/svg/video-vector.svg";
import video from "../assets/img/png/video-img.png";
import youbute from "../assets/img/svg/youtube-icon.svg";

function VIdeoTestiMon() {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideoClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="linear"
      data-aos-delay="900"
      className="py-5 mt-5 position-relative">
      <span className="GreenLayer_Team top-0 mt-5 start-0 position-absolute"></span>
      <span className="GreenLayer_Team top-100 end-0 translate-middle position-absolute"></span>

      <div className="container">
        <div
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-easing="linear"
          data-aos-delay="0"
          className="d-flex flex-column align-items-center">
          <h2 className=" ff_jakarta fw_med fs_4x8l text_white text-center mb-0">
            Video{" "}
            <span className="position-relative">
              Testimonials{" "}
              <img
                className="Text__Navigate_Arrow position-absolute start-100 translate-middle-x ms-5 ps-5"
                src={vector}
                alt="img"
              />
            </span>
          </h2>
          <div className="VIdeoBox d-flex justify-content-center mt-5 position-relative ">
            {showVideo ? (
              <iframe
                src="https://www.youtube.com/embed/vy4C93X9DQk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            ) : (
              <div className="position-relative">
                <img
                  className="w-100 z_index4 "
                  src={video}
                  alt="Video Thumbnail"
                  onClick={handleVideoClick}
                />
                <img
                  onClick={handleVideoClick}
                  className="Btn_YouTube cursor_pointer"
                  src={youbute}
                  alt="icon"
                />
              </div>
            )}
          </div>
          <p className=" ff_jakarta fw_med fs_3x2l text-white mb-0 mt-4 pt-1">
            A patient named Paddy, was suffering from dry AMD and temporary
            vision loss. Our strategies cured her and now she is living happily.
          </p>
          <button className="ff_jakarta fw-semibold text-white fs_md common_btn mt-1 z_index1">
            Book Call
          </button>{" "}
        </div>
      </div>
    </section>
  );
}

export default VIdeoTestiMon;
