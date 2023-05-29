import { Accordion } from "react-bootstrap";
import React, { useState } from "react";
import arrow from "../assets/img/svg/arrow-forward.svg";
import vector from "../assets/img/svg/faq-vector.svg";

function Accordian(props) {
  const [accordian, setAccordian] = useState(0);

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="linear"
        data-aos-delay="0"
        style={{ background: props.Faq__BgGreen }}
        className="py-lg-5 py-4 position-relative overflow-hidden">
        <span
          style={{ margin: "70px 0 0 80px" }}
          className={`GreenLayer_faq position-absolute ${props.FaqShaddowNone}`}></span>
        <div className="container py-5">
          <h2 className=" ff_jakarta fw_med fs_4x8l text-white text-center opacity_09 mb-0">
            <span className="position-relative">
              Frequently
              <img
                className="position-absolute top-0 start-0 translate-middle ms-5 ps-5 mb-5"
                src={vector}
                alt="vector"
              />
            </span>
            Asked Questions
          </h2>
          <div className="row mt-lg-5 pt-3">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="linear"
              data-aos-delay="0"
              className="col-lg-4">
              <div className="pe-2">
                <div
                  onClick={() => setAccordian(0)}
                  className={`Btn_Faq cursor_pointer d-flex justify-content-between ${
                    accordian === 0 ? "Btn_Faqhover" : ""
                  }`}>
                  <h3 className=" ff_roboto fw-semibold fs_xl text_white mb-0">
                    Customer Questions
                  </h3>
                  <img src={arrow} alt="forword-arrow" />
                </div>
                <div
                  onClick={() => setAccordian(1)}
                  className={`Btn_Faq cursor_pointer d-flex justify-content-between ${
                    accordian === 1 ? "Btn_Faqhover" : ""
                  }`}>
                  <h3 className=" ff_roboto fw-semibold fs_xl text_white mb-0">
                    Tech Support Questions
                  </h3>
                  <img src={arrow} alt="forword-arrow" />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="linear"
              data-aos-delay="0"
              className="col-lg-8 mt-5 mt-lg-0">
              <div className={accordian === 0 ? "ps-lg-4" : "d-none"}>
                <Accordion
                  className="Accordian__FAQ"
                  defaultActiveKey="null"
                  flush>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className=" Accordian__Items__FAQ position-relative py-4"
                    eventKey="0">
                    <Accordion.Header className="accordion_Header">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        How long does it take to see improvements with dry AMD?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordian__Items__FAQ position-relative py-4"
                    eventKey="1">
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        Do I need to continue to take the program to sustain the
                        benfits?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordian__Items__FAQ position-relative py-4"
                    eventKey="3">
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        Do Blood Tests Improve?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordian__Items__FAQ position-relative py-4"
                    eventKey="4">
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        How do you decrease the frequency of injections for Wet
                        AMD.
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordian__Items__FAQ position-relative py-4"
                    eventKey="5">
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        Is this Anti-Aging Medicine?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordian__Items__FAQ position-relative py-4"
                    eventKey="6">
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        What would slow improvement in Dry or Wet AMD?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className={accordian === 1 ? "ps-lg-4" : "d-none"}>
                <Accordion className="Accordian__FAQ" defaultActiveKey="" flush>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className=" Accordian__Items__FAQ position-relative py-4"
                    eventKey="0">
                    <Accordion.Header className="accordion_Header">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        Tech Support
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordian__Items__FAQ position-relative py-4"
                    eventKey="1">
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        How to Solve Err
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordian__Items__FAQ position-relative py-4"
                    eventKey="3">
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        Need More Help
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordian__Items__FAQ position-relative py-4"
                    eventKey="4">
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        How do you decrease the frequency of injections for Wet
                        AMD.
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordian__Items__FAQ position-relative py-4"
                    eventKey="5">
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        Is this Anti-Aging Medicine?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordian__Items__FAQ position-relative py-4"
                    eventKey="6">
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                        What would slow improvement in Dry or Wet AMD?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accordian;
