import React from "react";
import { Link } from "react-router-dom";
import "./IntroSection.css";
const IntroSection = () => {
  return (
    <div>
      {/* intro contaner  */}
      <div className="intro-container">
        <div>
          <div>
            {/* intro message */}
            <h4 className="intro-title">
              Enter a world of extra ordinary experiences
            </h4>
            {/* button for more vetails  */}
            <Link to='/services'>
              <button className="btn btn-success">
                <i className="fas fa-arrow-circle-right"></i> {"  "}Explore more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
