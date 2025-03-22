import React, { useEffect, useState } from "react";
import "./GitHubIssues.css"; // Make sure to create this CSS file
import "./BuyNowPopup.css";
import "./UserNamePopup.css";
import dGif from "../../../public/Dcode.png";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import axiosInstance from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import { useBalance } from "../../context/BalanceContext";

const GitHubIssues = () => {
  const [activeTab, setActiveTab] = useState("Available");

  const [issues, setIssues] = useState();
  const [githubusername, setUsername] = useState("");
  const [currentIssueId, setcurrentIssueId] = useState(null);
  const { updateBalance } = useBalance();
  let numbers = 0;
  const issuesNums = 0;
  // const issuesNums = issues.filter((issue) => {
  //   if (issue.labels.available) {
  //     numbers += 1;
  //   }
  //   return numbers;
  // });
  var loadIssues = async () => {
    var { data: axres } = await axiosInstance.get("/api/marketplace/issues");
    if (axres.status) {
      setIssues(axres.issues);
    }
  };
  useEffect(() => {
    loadIssues();
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBuyClick = (issueid) => {
    setcurrentIssueId(issueid);
    setIsPopupOpen(true);
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  const handleConfirm = async () => {
    if (!githubusername) {
      console.error("No GitHub username found");
      return;
    }

    try {
      const { data: axres } = await axiosInstance.post(
        "/api/marketplace/purchase",
        {
          issueId: currentIssueId,
          githubUsername: githubusername.trim(),
        }
      );
      if (axres.status) {
        updateBalance();
        setIsPopupOpen(false);
        toast.success(
          "Issue Purchased Sucessfully!\nIssue will be assigned to you by the maintainer shortly."
        );
        loadIssues();
        // alert(
        //   "Issue Purchased Sucessfully and will be assigned to you sortly by EOD. Thanks for the purchase"
        // );
      } else {
        toast.error(axres.message);
      }
    } catch (error) {
      toast.error("Error Occured");
      console.error("Error during purchase:", error);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const [error, setError] = useState("");
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  const handleShopClick = (issueid) => {
    if (!authenticatedUser) {
      setcurrentIssueId(issueid);
      setShowModal(true);
      setError("");
    }
  };

  const handleInputChange = (e) => {
    const value = e.currentTarget.value;
    setUsername(value);
    if (value.trim().length < 3) {
      setError("Username must be at least 3 characters");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (githubusername.trim().length >= 3) {
      setAuthenticatedUser(githubusername.trim());
      setShowModal(false);
      setError("");
      setIsPopupOpen(true);
    } else {
      setError("Username must be at least 3 characters");
    }
  };

  const Modal = () => (
    <div className="modal-overlay !z-[99]" onClick={() => setShowModal(false)}>
      <div
        className="modal"
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(1px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal-title">Enter Username</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="input-group">
            <input
              type="text"
              value={githubusername}
              onChange={handleInputChange}
              placeholder="Enter your GitHub username"
              className={`modal-input ${error ? "error" : ""}`}
              style={{ background: "rgba(255,255,255,0.04)" }}
              autoFocus
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          <button
            type="submit"
            className="modal-button"
            disabled={!githubusername.trim() || error}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );

  function ConfirmationPopup({ onCancel, onConfirm, isOpen }) {
    if (!isOpen) return null;

    return (
      <div className="buy-overlay">
        <div className="buy-popup">
          <div className="buy-popup-content">
            <ShoppingCart className="cart-icon" />
            <h3 className="buy-popup-title">Are you sure to buy?</h3>
            <p className="buy-popup-message">
              Please confirm your purchase. This action cannot be undone.
            </p>
          </div>
          <div className="buy-popup-actions">
            <button onClick={onCancel} className="buy-btn buy-btn-cancel">
              Cancel
            </button>
            <button onClick={onConfirm} className="buy-btn buy-btn-confirm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    // Main Container
    <div className="main-container">
      <div className="github-issues">
        {/* Header Section */}
        <div className="header">
          <div className="action-buttons !py-[0.3rem]">
            <button className="font-semibold text-[1.1rem]">Pick issue</button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          {
            // <div className="tabs-container">
            //   <div className="tabs">
            //     <button
            //       className={`tab ${activeTab === "Available" ? "active" : ""}`}
            //       onClick={() => setActiveTab("Available")}
            //     >
            //       Available{" "}
            //       {/* <span className="count">
            //       {issues.reduce((prev, cur) => {
            //         prev + (cur.available ? 1 : 0);
            //       }, 0)}
            //     </span> */}
            //     </button>
            //     <button
            //       className={`tab ${activeTab === "Assigned" ? "active" : ""}`}
            //       onClick={() => setActiveTab("Assigned")}
            //     >
            //       Assigned
            //       {/* <span className="count">{issuesNums}</span> */}
            //     </button>
            //   </div>
            // </div>
          }
        </div>

        {/* Issue List */}
        {activeTab === "Available" && (
          <div className="issue-list">
            {issues?.map((issue) => (
              <div key={issue.id} className="issue-item">
                <div className="issue-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="green-icon"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div className="issue-content">
                  <div className="issue-title-row">
                    <NavLink
                      to={`/shop/issue?id=${issue._id}`}
                      className={"issue-title !m-0"}
                    >
                      <span>{issue.title}</span>
                    </NavLink>
                    {issue.labels.map((label, idx) => (
                      <span
                        key={idx}
                        className={` ${
                          label == "easy"
                            ? "!bg-green-700 !px-[8px] py-[2px] text-[12px] rounded-[12px]"
                            : label == "medium"
                            ? "!bg-orange-500 !px-[8px] py-[2px] text-[12px] rounded-[12px]"
                            : label == "hard"
                            ? "!bg-red-500 !px-[8px] py-[2px] text-[12px] rounded-[12px]"
                            : label == "already-assigned"
                            ? "!bg-blue-600 !px-[8px] py-[2px] text-[12px] rounded-[12px]"
                            : " label "
                        }`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  {/* <div className="issue-meta">
                        Skills •{" "}
                        {issue.projectSkills.map((skill, idx) => (
                          <span key={idx}>
                            {skill}
                            {idx == issue.projectSkills.length - 1
                              ? " "
                              : " | "}
                          </span>
                        ))}
                      </div> */}
                </div>
                {issue?.available ? (
                  <div className="issue-stats">
                    {/* onClick={handleBuyClick}  handleShopClick*/}
                    {authenticatedUser ? (
                      <button onClick={() => handleBuyClick(issue._id)}>
                        <span class="box">
                          Buy Now{" "}
                          <img
                            src={dGif}
                            alt="Loading Animation"
                            height={30}
                            width={30}
                          />
                          <div className="issue-price">{issue.price}</div>
                        </span>
                      </button>
                    ) : (
                      <button onClick={() => handleShopClick(issue._id)}>
                        <span class="box">
                          Buy Now{" "}
                          <img
                            src={dGif}
                            alt="Loading Animation"
                            height={30}
                            width={30}
                          />
                          <div className="issue-price">{issue.price}</div>
                        </span>
                      </button>
                    )}
                    {showModal && <Modal />}
                    <ConfirmationPopup
                      isOpen={isPopupOpen}
                      onCancel={handleCancel}
                      onConfirm={handleConfirm}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        )}

        {
          // {activeTab === "Assigned" && (
          //   <div className="issue-list">
          //     {issues.map(
          //       (issue) =>
          //         !issue.available && (
          //           <div key={issue.id} className="issue-item">
          //             <div className="issue-icon">
          //               <svg
          //                 xmlns="http://www.w3.org/2000/svg"
          //                 width="20"
          //                 height="20"
          //                 viewBox="0 0 24 24"
          //                 fill="none"
          //                 stroke="currentColor"
          //                 strokeWidth="2"
          //                 strokeLinecap="round"
          //                 strokeLinejoin="round"
          //                 className="blue-icon"
          //               >
          //                 <circle cx="12" cy="12" r="10" />
          //               </svg>
          //             </div>
          //             <div className="issue-content">
          //               <div className="issue-title-row">
          //                 <NavLink
          //                   to="/shop/issue"
          //                   className={"issue-title !m-0 py-[1rem]"}
          //                 >
          //                   <span>{issue.title}</span>
          //                 </NavLink>
          //                 {issue.labels.includes("already-assigned") &&
          //                   issue.labels.map((label, idx) => (
          //                     <span key={idx} className="label">
          //                       {label}
          //                     </span>
          //                   ))}
          //                 {issue.labels.includes("assignment-available") &&
          //                   issue.labels.map((label, idx) => (
          //                     <span key={idx} className="available-label">
          //                       {label}
          //                     </span>
          //                   ))}
          //               </div>
          //               {/* <div className="issue-meta">
          //                 Skills •{" "}
          //                 {issue.projectSkills.map((skill, idx) => (
          //                   <span key={idx}>
          //                     {skill}
          //                     {idx == issue.projectSkills.length - 1
          //                       ? " "
          //                       : " // "}
          //                   </span>
          //                 ))}
          //               </div> */}
          //             </div>
          //             {/* <div className="avatar-group">
          //               {issue.labels.includes("already-assigned") &&
          //                 issue.avatars.map((avatar, idx) => (
          //                   <img
          //                     key={idx}
          //                     src={avatar || "/placeholder.svg"}
          //                     alt="User avatar"
          //                     className="avatar"
          //                   />
          //                 ))}
          //             </div> */}
          //           </div>
          //         )
          //     )}
          //   </div>
          // )}
        }
      </div>
    </div>
  );
};

export default GitHubIssues;
