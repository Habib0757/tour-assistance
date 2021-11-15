import React from "react";
import "animate.css";
const FAQ = () => {
  return (
    <div className="container mx-auto mt-5 ">
      {/* FAQ section  */}
      <h4>FAQ</h4>
      <h1>Full range of travel service</h1>
      {/* faq container  */}
      <div className="row justify-content-between mb-5 align-items-center ">
        {/* faq questions and ans  */}
        <div className="col-md-5 container mt-5 ">
          <div className="accordion" id="accordionExample ">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Starts the automated process.
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The automated process starts as soon as your clothes go into
                  the machine. Duis cursus, mi quis viverra ornare. The
                  automated process starts as soon as your clothes go into the
                  machine. Duis cursus, mi quis viverra ornare.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  The automated process starts.
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The automated process starts as soon as your clothes go into
                  the machine. Duis cursus, mi quis viverra ornare.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Process the automated magic.
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The automated process starts as soon as your clothes go into
                  the machine. Duis cursus, mi quis viverra ornare.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* faq image  */}
        <div className="col-md-7 mt-5 ">
          <img className="img-fluid"
            src="https://i.ibb.co/P5s5mkF/xabout2-png-pagespeed-ic-FKuxbsbrr-T.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
