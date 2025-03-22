import React, { useEffect, useState } from "react";
import "./IssueDetails.css";
import { Circle, ArrowLeft } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import axiosInstance from "../../../utils/axiosConfig";

function IssueDetails() {
  const [issueDetails, setissueDetails] = useState({});
  useEffect(() => {
    (async () => {
      var { data: axres } = await axiosInstance.get(
        "/api/marketplace/issues/" +
          new URL(document.URL).searchParams.get("id")
      );
      if (axres.status) {
        setissueDetails(axres.issue);
      } else {
      }
    })();
  }, []);

  return (
    <>
      <div className="container-issue">
        <NavLink to="/shop">
          <button className="back-button-issue !mt-[2rem]">
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </NavLink>
        <div className="issue-card-issue">
          <div className="issue-header-issue">
            <Circle className="status-icon-issue" size={24} />
            <h2 className="issue-title-issue">{issueDetails.title}</h2>
          </div>

          {/* <div className="skills-section-issue">
            <p>skills - html, css, javascript, etc</p>
          </div> */}

          <div className="description-section-issue">
            <h3 className="description-title-issue">DESCRIPTION</h3>
            <div className="description-box-issue">
              <p
                style={{ whiteSpace: "break-spaces" }}
                className="max-h-[23rem] overflow-scroll"
              >
                {issueDetails.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IssueDetails;
