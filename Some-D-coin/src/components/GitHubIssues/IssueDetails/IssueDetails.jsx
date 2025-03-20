import React from "react";
import "./IssueDetails.css";
import { Circle, ArrowLeft } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function IssueDetails(props) {
  return (
    <>
      <div className="container-issue">
        <NavLink to="/shop">
          <button className="back-button-issue">
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </NavLink>
        <div className="issue-card-issue">
          <div className="issue-header-issue">
            <Circle className="status-icon-issue" size={24} />
            <h2 className="issue-title-issue">Github Issue name</h2>
          </div>

          <div className="skills-section-issue">
            <p>skills - html, css, javascript, etc</p>
          </div>

          <div className="description-section-issue">
            <h3 className="description-title-issue">DESCRIPTION</h3>
            <div className="description-box-issue">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                facere voluptate id ea quasi provident. Est quo asperiores
                officiis deleniti aspernatur tenetur. Cumque in architecto amet
                ea minus illo possimus voluptatum similique ex fuga, blanditiis
                suscipit aut fugiat id aliquam fugit laboriosam aspernatur sunt
                debitis tempora eaque nostrum sapiente qui!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IssueDetails;
