import React, { useEffect, useState } from "react";
import "./GitHubIssues.css"; // Make sure to create this CSS file
import "./BuyNowPopup.css";
import "./UserNamePopup.css";
import dGif from "../../../public/Dcode.png";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import axiosInstance from "../../utils/axiosConfig";

const GitHubIssues = () => {
  const [activeTab, setActiveTab] = useState("Available");
  const [issues, setIssues] = useState([
    {
      id: 1,
      number: "#347",
      title: "Add solution of November 2024.",
      author: "Adit-ino",
      openedOn: "Dec 1, 2024",
      price: "30",
      labels: ["assignment-available"],
      comments: 0,
      avatars: ["https://avatar.iran.liara.run/public"],
      projectSkills: ["HTML & CSS", "Git & GitHub"],
    },
    {
      id: 2,
      number: "#340",
      title: "Add solution of November 2024.",
      author: "Ayu-hack",
      openedOn: "Nov 2, 2024",
      price: "25",
      labels: ["assignment-available"],
      comments: 2,
      avatars: ["https://avatar.iran.liara.run/public"],
      projectSkills: ["HTML & CSS", "JavaScript & React", "MongoDB & SQL"],
    },
    {
      id: 3,
      number: "#47",
      title: "Add solution of October 2024.",
      author: "Ayu-hack",
      openedOn: "Oct 8, 2024",
      price: "25",
      labels: ["already-assigned"],
      comments: 36,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
      ],
      projectSkills: [
        "JavaScript & React",
        "MongoDB & SQL",
        "Git & GitHub",
        "CI/CD & DevOps",
      ],
    },
    {
      id: 4,
      number: "#26",
      title: "Please add mini projects here",
      author: "Ayu-hack",
      openedOn: "Oct 8, 2024",
      price: "25",
      labels: ["assignment-available"],
      comments: 40,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
      ],
      projectSkills: [
        "HTML & CSS",
        "JavaScript & React",
        "Node.js & Express",
        "Git & GitHub",
        "Docker & Kubernetes",
        "CI/CD & DevOps",
      ],
    },
    {
      id: 5,
      number: "#25",
      title: "Please add the projects on ai-ml here",
      author: "Ayu-hack",
      openedOn: "Oct 8, 2024",
      price: "25",
      labels: ["already-assigned"],
      comments: 23,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
      ],
      projectSkills: [
        "HTML & CSS",
        "Git & GitHub",
        "Docker & Kubernetes",
        "CI/CD & DevOps",
      ],
    },
    {
      id: 6,
      number: "#19",
      title: "Add solution of Weekly Contest 2024.",
      author: "Ayu-hack",
      openedOn: "Oct 7, 2024",
      price: "25",
      labels: ["assignment-available"],
      comments: 8,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
      ],
      projectSkills: [
        "JavaScript & React",
        "Node.js & Express",
        "MongoDB & SQL",
        "Git & GitHub",
        "CI/CD & DevOps",
      ],
    },
    {
      id: 7,
      number: "#18",
      title: "Add solution of September 2024.",
      author: "Ayu-hack",
      openedOn: "Oct 7, 2024",
      price: "25",
      labels: ["already-assigned"],
      comments: 28,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
      ],
      projectSkills: ["HTML & CSS", "JavaScript & React"],
    },
    {
      id: 8,
      number: "#17",
      title: "Add solution of June 2024.",
      author: "Ayu-hack",
      openedOn: "Oct 7, 2024",
      price: "25",
      labels: ["already-assigned"],
      comments: 14,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
      ],
      projectSkills: [
        "HTML & CSS",
        "JavaScript & React",
        "Node.js & Express",
        "Git & GitHub",
      ],
    },
    {
      id: 9,
      number: "#16",
      title: "Add solution of May 2024.",
      author: "Ayu-hack",
      openedOn: "Oct 7, 2024",
      price: "25",
      labels: ["already-assigned", "more-assignment-needed"],
      comments: 14,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
      ],
      projectSkills: [
        "HTML & CSS",
        "JavaScript & React",
        "Node.js & Express",
        "Docker & Kubernetes",
        "CI/CD & DevOps",
      ],
    },
    {
      id: 10,
      number: "#15",
      title: "Add solution of April 2024.",
      author: "Ayu-hack",
      openedOn: "Oct 7, 2024",
      price: "25",
      labels: ["already-assigned"],
      comments: 16,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
      ],
      projectSkills: ["HTML & CSS", "JavaScript & React", "CI/CD & DevOps"],
    },
    {
      id: 11,
      number: "#14",
      title: "Add solution of March 2024.",
      author: "Ayu-hack",
      openedOn: "Oct 7, 2024",
      price: "25",
      labels: ["already-assigned"],
      comments: 15,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
      ],
      projectSkills: [
        "HTML & CSS",
        "JavaScript & React",
        "MongoDB & SQL",
        "Git & GitHub",
        "Docker & Kubernetes",
        "CI/CD & DevOps",
      ],
    },
  ]);
  const [username, setUsername] = useState("");
  const [currentIssueId, setcurrentIssueId] = useState(null);
  let numbers = 0;
  const issuesNums = 0;
  // const issuesNums = issues.filter((issue) => {
  //   if (issue.labels.available) {
  //     numbers += 1;
  //   }
  //   return numbers;
  // });
  useEffect(() => {
    (async () => {
      var { data: axres } = await axiosInstance.get("/api/marketplace/issues");
      if (axres.status) {
        setIssues(axres.issues);
      }
    })();
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
    // console.log("Purchase confirmed!");
    var { data: axres } = await axiosInstance.post(
      "/api/marketplace/purchase",
      { issueId: currentIssueId, githubUsername: username }
    );
    setIsPopupOpen(false);
  };

  const [showModal, setShowModal] = useState(false);

  const [error, setError] = useState("");
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  const handleShopClick = (issueid) => {
    if (!authenticatedUser) {
      setIssues(issueid);
      setShowModal(true);
      setError("");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (value.trim().length < 3) {
      setError("Username must be at least 3 characters");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length >= 3) {
      setAuthenticatedUser(username.trim());
      setShowModal(false);
      setUsername("");
      setError("");
      setIsPopupOpen(true);
    } else {
      setError("Username must be at least 3 characters");
    }
  };

  const Modal = () => (
    <div className="modal-overlay !z-[99]" onClick={() => setShowModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Enter Username</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={handleInputChange}
              placeholder="Enter your GitHub username"
              className={`modal-input ${error ? "error" : ""}`}
              autoFocus
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          <button
            type="submit"
            className="modal-button"
            disabled={!username.trim() || error}
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
            <div className="tabs-outliner">
              <div className="tabs">
                <button
                  className={`tab ${activeTab === "Available" ? "active" : ""}`}
                  onClick={() => setActiveTab("Available")}
                >
                  Available{" "}
                </button>
                <button
                  className={`tab ${activeTab === "Assigned" ? "active" : ""}`}
                  onClick={() => setActiveTab("Assigned")}
                >
                  Assigned
                </button>
              </div>
            </div>
          }
        </div>

        {/* Issue List */}
        {activeTab === "Available" && (
          <div className="issue-list">
            {issues.map((issue) => (
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
                    <NavLink to="/shop/issue" className={"issue-title !m-0"}>
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
                      <button onClick={()=>handleBuyClick()}>
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
