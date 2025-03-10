import React, { useState } from "react";
import "./GitHubIssues.css"; // Make sure to create this CSS file

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
    },
    {
      id: 4,
      number: "#26",
      title: "Please add mini projects here",
      author: "Ayu-hack",
      openedOn: "Oct 8, 2024",
      price: "25",
      labels: ["already-assigned"],
      comments: 40,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
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
    },
    {
      id: 6,
      number: "#19",
      title: "Add solution of Weekly Contest 2024.",
      author: "Ayu-hack",
      openedOn: "Oct 7, 2024",
      price: "25",
      labels: ["already-assigned"],
      comments: 8,
      avatars: [
        "https://avatar.iran.liara.run/public",
        "https://avatar.iran.liara.run/public",
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
    },
  ]);

  // Function to create a new issue
  const createNewIssue = () => {
    // Implementation for creating a new issue
    alert("Create new issue functionality would go here");
  };

  return (
    // Main Container
    <div className="main-container">
      <div className="github-issues">
        {/* Header Section */}
        <div className="header">
          <div className="action-buttons">
            <button className="new-issue-button" onClick={createNewIssue}>
              New issue
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <div className="tabs-container">
            <div className="tabs">
              <button
                className={`tab ${activeTab === "Available" ? "active" : ""}`}
                onClick={() => setActiveTab("Available")}
              >
                Available <span className="count">15</span>
              </button>
              <button
                className={`tab ${activeTab === "Assigned" ? "active" : ""}`}
                onClick={() => setActiveTab("Assigned")}
              >
                Assigned <span className="count">19</span>
              </button>
            </div>
          </div>
        </div>

        {/* Issue List */}
        {activeTab === "Available" && (
          <div className="issue-list">
            {issues.map(
              (issue) =>
                issue.labels.includes("more-assignment-needed") ||
                (issue.labels.includes("assignment-available") && (
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
                        <a href="#" className="issue-title">
                          {issue.title}
                        </a>
                        {issue.labels.includes("already-assigned") &&
                          issue.labels.map((label, idx) => (
                            <span key={idx} className="label">
                              {label}
                            </span>
                          ))}
                        {issue.labels.includes("assignment-available") &&
                          issue.labels.map((label, idx) => (
                            <span key={idx} className="available-label">
                              {label}
                            </span>
                          ))}
                      </div>
                      <div className="issue-meta">
                        {issue.number} • {issue.author} opened on{" "}
                        {issue.openedOn}
                      </div>
                    </div>
                    <div className="issue-stats">
                      <button class="btn">
                        <span class="btn__visible">
                          <span>Buy Now</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 48 48"
                          >
                            <linearGradient
                              id="DVSfvSNjr8xfsZzZZgSija_XDum8M4mrAZQ_gr1"
                              x1="13.999"
                              x2="34.001"
                              y1="6.677"
                              y2="41.323"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#ffda1c"></stop>
                              <stop offset="1" stop-color="#feb705"></stop>
                            </linearGradient>
                            <path
                              fill="url(#DVSfvSNjr8xfsZzZZgSija_XDum8M4mrAZQ_gr1)"
                              d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
                            ></path>
                            <path
                              d="M27,10h-1c-1.103,0-2,0.897-2,2c0-1.103-0.897-2-2-2h-1c-1.103,0-2,0.897-2,2v1h-1 c-1.103,0-2,0.897-2,2v18c0,1.103,0.897,2,2,2h1v1c0,1.103,0.897,2,2,2h1c1.103,0,2-0.897,2-2v-1v1c0,1.103,0.897,2,2,2h1 c1.103,0,2-0.897,2-2v-1.391c1.116-0.289,2.056-0.74,2.802-1.344C33.26,32.083,34,30.352,34,28.121 c0-1.341-0.366-2.504-1.086-3.457c-0.315-0.421-0.684-0.782-1.104-1.081c0.309-0.282,0.583-0.601,0.821-0.955 c0.608-0.914,0.915-1.972,0.915-3.147c0-2.119-0.763-3.764-2.269-4.887c-0.626-0.467-1.376-0.827-2.277-1.09V12 C29,10.897,28.103,10,27,10L27,10z M22,18h3.199c1.178,0,1.678,0.247,1.871,0.394c0.259,0.197,0.391,0.588,0.391,1.161 c0,0.527,0,1.409-2.115,1.445L22,21V18L22,18z M22,26h4c1.322,0.019,2,0.824,2,2.391C28,29.982,25.932,30,25.844,30H22V26L22,26z"
                              opacity=".05"
                            ></path>
                            <path
                              d="M27,10.5h-1c-0.827,0-1.5,0.673-1.5,1.5v1.5h-1V12c0-0.827-0.673-1.5-1.5-1.5h-1 c-0.827,0-1.5,0.673-1.5,1.5v1.5H18c-0.827,0-1.5,0.673-1.5,1.5v18c0,0.827,0.673,1.5,1.5,1.5h1.5V36c0,0.827,0.673,1.5,1.5,1.5h1 c0.827,0,1.5-0.673,1.5-1.5v-1.5h1V36c0,0.827,0.673,1.5,1.5,1.5h1c0.827,0,1.5-0.673,1.5-1.5v-1.786 c1.213-0.264,2.216-0.713,2.987-1.338c1.336-1.083,2.013-2.683,2.013-4.755c0-1.23-0.331-2.291-0.985-3.156 c-0.422-0.564-0.952-1.008-1.58-1.329c0.509-0.345,0.938-0.775,1.281-1.287c0.552-0.829,0.831-1.794,0.831-2.868 c0-1.953-0.696-3.462-2.068-4.487c-0.657-0.491-1.471-0.855-2.478-1.109V12C28.5,11.173,27.827,10.5,27,10.5L27,10.5z M21.5,17.5 h3.699c1.01,0,1.742,0.167,2.174,0.496c0.395,0.301,0.588,0.811,0.588,1.559c0,0.885-0.296,1.906-2.606,1.945l-3.855,0V17.5 L21.5,17.5z M21.5,25.5H26c1.61,0.023,2.5,1.05,2.5,2.891c0,2.085-2.548,2.109-2.656,2.109H21.5V25.5L21.5,25.5z"
                              opacity=".07"
                            ></path>
                            <path
                              fill="#fff"
                              d="M21,11h1c0.552,0,1,0.448,1,1v3c0,0.552-0.448,1-1,1h-1c-0.552,0-1-0.448-1-1v-3 C20,11.448,20.448,11,21,11z M26,11h1c0.552,0,1,0.448,1,1v3c0,0.552-0.448,1-1,1h-1c-0.552,0-1-0.448-1-1v-3 C25,11.448,25.448,11,26,11z M21,32h1c0.552,0,1,0.448,1,1v3c0,0.552-0.448,1-1,1h-1c-0.552,0-1-0.448-1-1v-3 C20,32.448,20.448,32,21,32z M26,32h1c0.552,0,1,0.448,1,1v3c0,0.552-0.448,1-1,1h-1c-0.552,0-1-0.448-1-1v-3 C25,32.448,25.448,32,26,32z M17,33V15c0-0.552,0.448-1,1-1h7.199c2.41,0,4.234,0.465,5.48,1.395s1.867,2.293,1.867,4.086 c0,0.98-0.25,1.844-0.746,2.59c-0.5,0.746-1.195,1.293-2.086,1.641c1.016,0.258,1.816,0.773,2.402,1.555 C32.703,26.043,33,26.992,33,28.121c0,1.922-0.609,3.379-1.828,4.367S28.219,33.98,25.965,34H18C17.448,34,17,33.552,17,33z M21,22 h4.363c2.063-0.035,3.098-0.824,3.098-2.445c0-0.906-0.262-1.559-0.785-1.957S26.328,17,25.199,17H21V22z M21,25v6h4.844 C26.805,31,29,30.531,29,28.391S27.883,25.027,26,25H21z"
                            ></path>
                          </svg>
                          {issue.price}
                        </span>
                      </button>
                    </div>
                  </div>
                ))
            )}
          </div>
        )}

        {activeTab === "Assigned" && (
          <div className="issue-list">
            {issues.map(
              (issue) =>
                issue.labels.includes("already-assigned") && (
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
                        <a href="#" className="issue-title">
                          {issue.title}
                        </a>
                        {issue.labels.includes("already-assigned") &&
                          issue.labels.map((label, idx) => (
                            <span key={idx} className="label">
                              {label}
                            </span>
                          ))}
                        {issue.labels.includes("assignment-available") &&
                          issue.labels.map((label, idx) => (
                            <span key={idx} className="available-label">
                              {label}
                            </span>
                          ))}
                      </div>
                      <div className="issue-meta">
                        {issue.number} • {issue.author} opened on{" "}
                        {issue.openedOn}
                      </div>
                    </div>

                    <div className="avatar-group">
                      {issue.labels.includes("already-assigned") &&
                        issue.avatars.map((avatar, idx) => (
                          <img
                            key={idx}
                            src={avatar || "/placeholder.svg"}
                            alt="User avatar"
                            className="avatar"
                          />
                        ))}
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubIssues;
