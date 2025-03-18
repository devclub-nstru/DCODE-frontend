import React, { useState } from "react";
import "./GitHubIssues.css"; // Make sure to create this CSS file
import dGif from "../../../public/3dgifmaker07456.gif"

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
  let numbers = 0;
  const issuesNums = issues.filter((issue) => {
    if (issue.labels.includes("already-assigned")) {
      numbers += 1;
    }
    return numbers;
  });

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
                Available{" "}
                <span className="count">
                  {issues.length - issuesNums.length}
                </span>
              </button>
              <button
                className={`tab ${activeTab === "Assigned" ? "active" : ""}`}
                onClick={() => setActiveTab("Assigned")}
              >
                Assigned <span className="count">{issuesNums.length}</span>
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
                      <button>
                        <span class="box">
                          Buy Now{" "}
                          <img src={dGif} alt="Loading Animation" className="btn-gif"/>
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
