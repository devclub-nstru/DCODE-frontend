import React, { useState } from "react";
import "./IssueDetails.css";
import dGif from "../../../..//public/Dcode.png"

export default function IssueDetails() {
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
      labels: ["already-assigned"],
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
      labels: ["already-assigned"],
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

  let numbers = 0;
  const issuesNums = issues.filter((issue) => {
    if (issue.labels.includes("already-assigned")) {
      numbers += 1;
    }
    return numbers;
  });

  return (
    <>
      <div className="issue-container">

        <div className="github-issues">
          <div className="issue-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
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
                              Skills • {
                                issue.projectSkills.map((skill, idx) => (
                                  <span key={idx}>{skill}{idx == issue.projectSkills.length-1 ?" ":" | "}</span>
                                ))}
                              </div>
                            </div>
                            <div className="issue-stats">
                              <button className="issue-btn">
                                <span class="box">
                                  Buy Now{" "}
                                  <img src={dGif} alt="Loading Animation" height={30} width={30}/>
                                  <div className="issue-price">{issue.price}</div>
                                </span>
                              </button>
                            </div>
                          </div>
                        ))
                    )}
        </div>


        </div>

        

      </div>
    </>
  );
}
