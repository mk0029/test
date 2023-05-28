import React, { useState } from "react";
import logo from "../assets/img/svg/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-easing="linear"
      data-aos-delay="800"
      id="Header"
      className="w-100">
      <nav>
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center pt-sm-4 pt-3">
            <ul className="mb-0 p-0">
              <Link to="/">
                <img className="logo_size" src={logo} alt="LOGO-ICON" />
              </Link>
            </ul>

            <div
              className={
                navShow
                  ? "threeline d-lg-none cursor_pointer"
                  : "threeline d-lg-none cursor_pointer"
              }
              onClick={() => setNavShow(!navShow)}>
              <div
                className={navShow ? " falseline1" : "  threelinechild"}></div>
              <div className={navShow ? "falseline" : " threelinechild"}></div>
              <div className={navShow ? "falseline3 " : "threelinechild"}></div>
            </div>

            <ul className="mb-0 p-0 d-flex gap-4 ms-xl-5 d-none d-lg-flex">
              <li>
                <Link
                  className={`ff_jakarta fw-normal fs_md text-white nav_tab_onhover position-relative opacity_07 transition px-1 ${props.nav_tab_onhover_ActivePage}`}
                  to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className={`ff_jakarta fw-normal fs_md text-white nav_tab_onhover position-relative opacity_07 transition px-1 ${props.nav_tab_onhover_About}`}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Testimonials"
                  className={`ff_jakarta fw-normal fs_md text-white nav_tab_onhover position-relative opacity_07 transition px-1 ${props.nav_tab_onhover_Testimo}`}
                  href="#">
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  className={`ff_jakarta fw-normal fs_md text-white nav_tab_onhover position-relative opacity_07 transition px-1 ${props.nav_tab_onhover_Location}`}
                  href="#">
                  Location
                </a>
              </li>
              <li>
                <a
                  className={`ff_jakarta fw-normal fs_md text-white nav_tab_onhover position-relative opacity_07 transition px-1 ${props.nav_tab_onhover_Procces}`}
                  href="#">
                  Process
                </a>
              </li>
            </ul>
            <ul className="d-flex gap-1 mb-0 p-0 mb-0 d-none d-lg-flex">
              <button className="ff_jakarta fw-semibold text-white fs_md common_btn">
                Contact Us
              </button>
            </ul>
          </div>
          <div
            className={
              navShow
                ? "shownav d-flex flex-column justify-content-center align-items-center"
                : "hidenav d-flex flex-column justify-content-center align-items-center"
            }>
            <ul className="mb-0 p-0 d-flex gap-4 flex-column justify-content-center align-items-center">
              {" "}
              <li>
                <Link
                  to="/"
                  className={`ff_jakarta fw-normal fs_md text-white nav_tab_onhover position-relative transition px-1 ${props.nav_tab_onhover_ActivePage}`}
                  href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className={`ff_jakarta fw-normal fs_md text-white nav_tab_onhover position-relative transition px-1 ${props.nav_tab_onhover_About}`}
                  href="#">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Testimonials"
                  className={`ff_jakarta fw-normal fs_md text-white nav_tab_onhover position-relative transition px-1 ${props.nav_tab_onhover_Testimo}`}
                  href="#">
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  className={`ff_jakarta fw-normal fs_md text-white nav_tab_onhover position-relative transition px-1 ${props.nav_tab_onhover_Location}`}
                  href="#">
                  Location
                </a>
              </li>
              <li>
                <a
                  className={`ff_jakarta fw-normal fs_md text-white nav_tab_onhover position-relative transition px-1 ${props.nav_tab_onhover_proses}`}
                  href="#">
                  Process
                </a>
              </li>
            </ul>
            <ul className="d-flex gap-1 mb-0 p-0 mb-0 justify-content-center align-items-center mt-4">
              <button className="ff_jakarta fw-semibold text-white fs_md common_btn">
                Contact Us
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
