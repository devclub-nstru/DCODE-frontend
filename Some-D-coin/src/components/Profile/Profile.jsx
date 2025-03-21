"use client"

import { useState } from "react"
import "./Profile.css"

const Profile = () => {
  // Sample data - in a real app, this would come from props or an API
  const userData = {
    name: "Alex Johnson",
    username: "alexj42",
    email: "alex.johnson@example.com",
    walletBalance: 13165,
    walletAddress: "0x3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
    stats: [
      { icon: "repo", value: 7, label: "Issues Created" },
      { icon: "git-branch", value: 5, label: "Pull Requests" },
      { icon: "gift", value: 3, label: "Mystery Boxes" },
    ],
    issues: [
      { title: "Add solution of October 2024", tag: "DCODE", date: "2024-10-08", status: "assigned" },
      { title: "Please add mini projects here", tag: "DCODE", date: "2024-10-08", status: "assigned" },
      { title: "Please add the projects on ai-ml here", tag: "DCODE", date: "2024-10-08", status: "assigned" },
      { title: "Add solution of Weekly Contest 2024", tag: "DCODE", date: "2024-10-07", status: "assigned" },
    ],
    pullRequests: [
      { title: "Fix navigation bug in mobile view", tag: "frontend-app", date: "2024-03-15", status: "merged" },
      { title: "Update documentation for API v2", tag: "api-docs", date: "2024-03-10", status: "open" },
      { title: "Implement new dashboard widgets", tag: "dashboard", date: "2024-02-28", status: "merged" },
      { title: "Add unit tests for user service", tag: "user-service", date: "2024-02-20", status: "open" },
      { title: "Refactor authentication flow", tag: "auth", date: "2024-02-15", status: "merged" },
    ],
    mysteryBoxes: [
      { id: 1, name: "Bronze Box", rarity: "Common", unopened: true },
      { id: 2, name: "Silver Box", rarity: "Uncommon", unopened: true },
      { id: 3, name: "Gold Box", rarity: "Rare", unopened: false, reward: "500 DC" },
    ],
    achievements: [
      {
        title: "Golden Contributor",
        rarity: "Legendary",
        acquiredDate: "2024-03-01",
        description: "Awarded for 100+ merged PRs",
      },
      {
        title: "Bug Hunter",
        rarity: "Rare",
        acquiredDate: "2024-02-15",
        description: "Found and fixed 50+ bugs",
      },
      {
        title: "First Contribution",
        rarity: "Common",
        acquiredDate: "2023-05-20",
        description: "First PR merged",
      },
    ],
    quotes: [
      "Code is like humor. When you have to explain it, it's bad.",
      "The best error message is the one that never shows up.",
      "Programming isn't about what you know; it's about what you can figure out.",
      "The most important property of a program is whether it accomplishes the intention of its user.",
    ],
  }

  const [activeTab, setActiveTab] = useState("Issues")
  const [copied, setCopied] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(0)
  const [openedBoxes, setOpenedBoxes] = useState([])

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOpenBox = (boxId) => {
    if (!openedBoxes.includes(boxId)) {
      setOpenedBoxes([...openedBoxes, boxId])
    }
  }

  const cycleQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % userData.quotes.length)
  }

  return (
    <div className="profile-container">
      {/* Left column - User profile */}
      <div className="profile-column">
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle"></div>
          </div>
          <h1 className="profile-name">{userData.name}</h1>
          <p className="profile-username">@{userData.username}</p>

          <div className="profile-email">
            <span className="icon">✉</span>
            <span>{userData.email}</span>
          </div>

          {/* <button className="profile-edit-btn">Edit Profile</button> */}
        </div>

        <div className="wallet-card">
          <div className="wallet-header">
            <span className="icon">◳</span>
            <h2>Dcoin Wallet</h2>
          </div>

          <div className="wallet-balance">
            <span className="balance-label">Balance</span>
            <span className="balance-amount">{userData.walletBalance} DC</span>
          </div>

          <div className="wallet-address-container">
            <p className="address-label">Wallet Address</p>
            <div className="address-input-group">
              <input type="text" className="address-input" value={userData.walletAddress} readOnly />
              <button className="copy-btn" onClick={handleCopy}>
                <span className="icon">⎘</span>
                {copied && <span className="copy-tooltip">Copied!</span>}
              </button>
            </div>
          </div>

          <button className="view-transactions-btn">View Transactions</button>
        </div>

        <div className="quote-card">
          <p className="quote-text">"{userData.quotes[currentQuote]}"</p>
          <button className="quote-btn" onClick={cycleQuote}>
            New Quote
          </button>
        </div>
      </div>

      {/* Right column - Stats and activity */}
      <div className="activity-column">
        {/* Stats cards */}
        <div className="stats-container">
          {userData.stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon-container">
                <span className={`icon icon-${stat.icon}`}></span>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements section */}
        <div className="achievements-card">
          <h2 className="achievements-title">Achievements</h2>

          <div className="achievements-grid">
            {userData.achievements.map((achievement, index) => (
              <div className="achievement-item" key={index}>
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className={`achievement-rarity ${achievement.rarity.toLowerCase()}`}>{achievement.rarity}</span>
                </div>
                <p className="achievement-date">Acquired: {achievement.acquiredDate}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <div className={`tab ${activeTab === "Issues" ? "active" : ""}`} onClick={() => setActiveTab("Issues")}>
            Issues
          </div>
          <div
            className={`tab ${activeTab === "Pull Requests" ? "active" : ""}`}
            onClick={() => setActiveTab("Pull Requests")}
          >
            Pull Requests
          </div>
          <div
            className={`tab ${activeTab === "Mystery Boxes" ? "active" : ""}`}
            onClick={() => setActiveTab("Mystery Boxes")}
          >
            Mystery Boxes
          </div>
        </div>

        {/* Issues list */}
        {activeTab === "Issues" && (
          <div className="issues-card">
            <h2 className="issues-title">Issues ({userData.issues.length})</h2>

            <div className="issues-list">
              {userData.issues.map((issue, index) => (
                <div className="issue-item" key={index}>
                  <div className="issue-content">
                    <h3 className="issue-title">{issue.title}</h3>
                    <div className="issue-meta">
                      <span className="issue-tag">{issue.tag}</span>
                      <span className="issue-date">{issue.date}</span>
                    </div>
                  </div>
                  <div className={`issue-status ${issue.status}`}>{issue.status}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pull Requests */}
        {activeTab === "Pull Requests" && (
          <div className="pr-card">
            <h2 className="pr-title">Pull Requests ({userData.pullRequests.length})</h2>

            <div className="pr-list">
              {userData.pullRequests.map((pr, index) => (
                <div className="pr-item" key={index}>
                  <div className="pr-content">
                    <h3 className="pr-item-title">{pr.title}</h3>
                    <div className="pr-meta">
                      <span className="pr-tag">{pr.tag}</span>
                      <span className="pr-date">{pr.date}</span>
                    </div>
                  </div>
                  <div className={`pr-status ${pr.status}`}>{pr.status}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mystery Boxes */}
        {activeTab === "Mystery Boxes" && (
          <div className="mystery-boxes-card">
            <h2 className="mystery-boxes-title">Mystery Boxes</h2>

            <div className="mystery-boxes-grid">
              {userData.mysteryBoxes.map((box) => {
                const isOpened = openedBoxes.includes(box.id) || !box.unopened
                const reward = openedBoxes.includes(box.id) ? "250 DC" : box.reward

                return (
                  <div className={`mystery-box ${isOpened ? "opened" : ""}`} key={box.id}>
                    <div className="mystery-box-content">
                      <div className="mystery-box-icon">
                        <span className="icon">⊞</span>
                      </div>
                      <h3 className="mystery-box-name">{box.name}</h3>
                      <div className={`mystery-box-rarity ${box.rarity.toLowerCase()}`}>{box.rarity}</div>

                      {!isOpened ? (
                        <button className="open-box-btn" onClick={() => handleOpenBox(box.id)}>
                          Open Box
                        </button>
                      ) : (
                        <div className="mystery-box-reward">
                          <span className="reward-label">Reward:</span>
                          <span className="reward-value">{reward}</span>
                        </div>
                      )}

                      {openedBoxes.includes(box.id) && (
                        <div className="mystery-box-opened-animation">
                          <div className="confetti"></div>
                          <p className="reward-text">You got: 250 DC!</p>
                          <button
                            className="collect-btn"
                            onClick={() => setOpenedBoxes(openedBoxes.filter((id) => id !== box.id))}
                          >
                            Collect
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile

