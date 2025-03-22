"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Profile.css";
import { useAccount, useBalance } from "../../context/BalanceContext";
import axiosInstance from "../../utils/axiosConfig";

const Profile = () => {
  const { userBalance, updateBalance } = useBalance();
  const { userData, refreshUserdata } = useAccount();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await refreshUserdata();
      setisLoading(false);
    })();
  }, []);

  var quotes = [
    "Code is like humor. When you have to explain it, it's bad.",
    "The best error message is the one that never shows up.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The most important property of a program is whether it accomplishes the intention of its user.",
  ];
  // Sample data - in a real app, this would come from props or an API
  // var [userData, setuserData] = useState({
  //   name: "Aditya Kumar",
  //   username: "pseudopythonic",
  //   email: "pseudopythonic@gmail.com",
  //   walletAddress: "0x3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
  //   stats: [
  //     { icon: "repo", value: 0, label: "Issues Created" },
  //     { icon: "git-branch", value: 0, label: "Pull Requests" },
  //     { icon: "gift", value: 0, label: "Mystery Boxes" },
  //   ],
  //   issues: [
  //     {
  //       title: "Add solution of October 2024",
  //       tag: "DCODE",
  //       date: "2024-10-08",
  //       status: "assigned",
  //     },
  //     {
  //       title: "Please add mini projects here",
  //       tag: "DCODE",
  //       date: "2024-10-08",
  //       status: "assigned",
  //     },
  //     {
  //       title: "Please add the projects on ai-ml here",
  //       tag: "DCODE",
  //       date: "2024-10-08",
  //       status: "assigned",
  //     },
  //     {
  //       title: "Add solution of Weekly Contest 2024",
  //       tag: "DCODE",
  //       date: "2024-10-07",
  //       status: "assigned",
  //     },
  //   ],
  //   pullRequests: [
  //     {
  //       title: "Fix navigation bug in mobile view",
  //       tag: "frontend-app",
  //       date: "2024-03-15",
  //       status: "merged",
  //     },
  //     {
  //       title: "Update documentation for API v2",
  //       tag: "api-docs",
  //       date: "2024-03-10",
  //       status: "open",
  //     },
  //     {
  //       title: "Implement new dashboard widgets",
  //       tag: "dashboard",
  //       date: "2024-02-28",
  //       status: "merged",
  //     },
  //     {
  //       title: "Add unit tests for user service",
  //       tag: "user-service",
  //       date: "2024-02-20",
  //       status: "open",
  //     },
  //     {
  //       title: "Refactor authentication flow",
  //       tag: "auth",
  //       date: "2024-02-15",
  //       status: "merged",
  //     },
  //   ],
  //   mysteryBoxes: [
  //     { id: 1, name: "Bronze Box", rarity: "Common", unopened: true },
  //     { id: 2, name: "Silver Box", rarity: "Uncommon", unopened: true },
  //     {
  //       id: 3,
  //       name: "Gold Box",
  //       rarity: "Rare",
  //       unopened: false,
  //       reward: "500 DC",
  //     },
  //   ],
  //   achievements: [
  //     {
  //       title: "Golden Contributor",
  //       rarity: "Legendary",
  //       acquiredDate: "2024-03-01",
  //       description: "Awarded for 100+ merged PRs",
  //     },
  //     {
  //       title: "Bug Hunter",
  //       rarity: "Rare",
  //       acquiredDate: "2024-02-15",
  //       description: "Found and fixed 50+ bugs",
  //     },
  //     {
  //       title: "First Contribution",
  //       rarity: "Common",
  //       acquiredDate: "2023-05-20",
  //       description: "First PR merged",
  //     },
  //   ],
  // });

  var [activeTab, setActiveTab] = useState("Issues");
  const [copied, setCopied] = useState(false);
  var [currentQuote, setCurrentQuote] = useState(0);
  var [openedBoxes, setOpenedBoxes] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     var { data: axres } = await axiosInstance.get("/api/user/details");
  //     if (axres.status) {
  //       console.log(axres.user);
  //       setuserData(axres.user);
  //     }
  //   })();
  // });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    refreshUserdata();
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenBox = async (boxId) => {
    if (!openedBoxes.includes(boxId)) {
      setOpenedBoxes([...openedBoxes, boxId]);
    }
    try {
      const { data: response } = await axiosInstance.post(
        "/api/mystery-box/open",
        {
          boxId: boxId,
        }
      );

      if (response.status) {
        setOpenedBoxes([...openedBoxes, boxId]);
        setopenedReward((prev) => ({ ...prev, [boxId]: response.reward }));
        // Optionally update user balance or other data based on response
      } else {
        console.error("Failed to open mystery box:", response.message);
      }
    } catch (error) {
      console.error("Error opening mystery box:", error);
      // Handle unauthorized errors
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    }

    updateBalance();
    refreshUserdata();
  };

  const cycleQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const handleLogout = () => {
    if (window.confirm("Do you really want to leave?")) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };
  if (isLoading) {
    return (
      <div
        role="status"
        className="w-[100vw] h-[100vw] flex justify-between items-center"
      >
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div className="profile-container !pt-[6rem]">
      {/* Left column - User profile */}
      <div className="profile-column">
        <div className="profile-card">
          <div className="profile-avatar">
            <img
              src={userData?.profilePicture}
              className="rounded-full w-[8rem] object-fit"
              onError={(el) =>
                el.currentTarget.setAttribute(
                  "src",
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                )
              }
              alt=""
            />
          </div>
          <h1 className="profile-name">
            {userData?.username?.includes(" ")
              ? userData?.username.split(" ")?.[0]
              : userData?.username}
          </h1>
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
            <span className="balance-amount">{userBalance} DC</span>
          </div>

          {/* <div className="wallet-address-container">
            <p className="address-label">Wallet Address</p>
            <div className="address-input-group">
              <input type="text" className="address-input" value={userData.walletAddress} readOnly />
              <button className="copy-btn" onClick={handleCopy}>
                <span className="icon">⎘</span>
                {copied && <span className="copy-tooltip">Copied!</span>}
              </button>
            </div>
          </div> */}

          <Link to={"/wallet"} className="view-transactions-btn">
            View Transactions
          </Link>
        </div>

        <div className="quote-card">
          <p className="quote-text">"{quotes[currentQuote]}"</p>
          <button className="quote-btn" onClick={cycleQuote}>
            New Quote
          </button>
        </div>
      </div>

      {/* Right column - Stats and activity */}
      <div className="activity-column">
        {/* Stats cards */}
        <div className="stats-container">
          {userData.stats?.map((stat, index) => (
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
            {userData?.achievements?.map((achievement, index) => (
              <div className="achievement-item" key={index}>
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span
                    className={`achievement-rarity ${achievement.rarity.toLowerCase()}`}
                  >
                    {achievement.rarity}
                  </span>
                </div>
                <p className="achievement-date">
                  Acquired: {achievement.acquiredDate}
                </p>
                {/* <p className="achievement-description">
                  {achievement.description}
                </p> */}
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs-container">
          <div
            className={`tab ${activeTab === "Issues" ? "active" : ""}`}
            onClick={() => setActiveTab("Issues")}
          >
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
            <h2 className="issues-title">
              Issues ({userData?.issues?.length})
            </h2>

            <div className="issues-list">
              {userData?.issues?.map((issue, index) => (
                <div className="profile-issue-item" key={index}>
                  <div className="issue-content">
                    <h3 className="profile-issue-title">{issue.title}</h3>
                    <div className="issue-meta">
                      <span className="issue-tag">{issue.tag}</span>
                      <span className="issue-date">
                        {new Date(issue.date).toDateString()}
                      </span>
                    </div>
                  </div>
                  <div className={`issue-status ${issue.status}`}>
                    {issue.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pull Requests */}
        {activeTab === "Pull Requests" && (
          <div className="pr-card">
            <h2 className="pr-title">
              Pull Requests ({userData.pullRequests.length})
            </h2>

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
                const isOpened = openedBoxes.includes(box.id) || !box.unopened;
                const reward = openedBoxes.includes(box.id)
                  ? "250 DC"
                  : box.reward;

                return (
                  <div
                    className={`mystery-box ${isOpened ? "opened" : ""}`}
                    key={box.id}
                  >
                    <div className="mystery-box-content">
                      <div className="mystery-box-icon">
                        <span className="icon">⊞</span>
                      </div>
                      <h3 className="mystery-box-name">{box.name}</h3>
                      <div
                        className={`mystery-box-rarity ${box.rarity.toLowerCase()}`}
                      >
                        {box.rarity}
                      </div>

                      {!isOpened ? (
                        <button
                          className="open-box-btn"
                          onClick={() => handleOpenBox(box.id)}
                        >
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
                            onClick={() =>
                              setOpenedBoxes(
                                openedBoxes.filter((id) => id !== box.id)
                              )
                            }
                          >
                            Collect
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
