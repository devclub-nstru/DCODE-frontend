import { useState } from "react"
import { ChevronDown } from "lucide-react"
import dImg from "../../../public/Dcode.png";
import "./Leaderboard.css"

export default function Leaderboard() {
  const [timeFilter, setTimeFilter] = useState("Mar 25")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const topUsers = [
    { id: 2, name: "Agrim Kumar", initials: "AM", score: 4095, avatar: null },
    { id: 1, name: "Kevish Sewliya", initials: "KS",score: 4498, avatar: null },
    { id: 3, name: "Meghna Nair", initials: "MN",score: 3891, avatar: null },
  ]

  const leaderboardData = [
    {
      id: 1,
      rank: 1,
      name: "Kevish Sewliya",
      score: 2392,
      change: 2,
      avatar: null,
      initials: "KS",
      lastSubmission: "9 hrs 49 min ago",
    },
    {
      id: 2,
      rank: 2,
      name: "Agrim Kumar Malhotra",
      score: 4095,
      change: -1,
      avatar: null,
      initials: "AM",
      lastSubmission: "8 hrs 21 min ago",
    },
    {
      id: 3,
      rank: 3,
      name: "Meghna Nair",
      score: 3891,
      change: 2,
      avatar: null,
      initials: "AM",
      lastSubmission: "5 hrs 22 min ago",
    },
    {
      id: 4,
      rank: 4,
      name: "Abhayanth K",
      score: 3888,
      change: -1,
      avatar: null,
      initials: "AM",
      lastSubmission: "5 hrs 44 min ago",
    },
    {
      id: 5,
      rank: 5,
      name: "Narendra Singh",
      score: 3878,
      change: -1,
      avatar: null,
      initials: "AM",
      lastSubmission: "8 hrs 40 min ago",
    },
    {
      id: 7,
      rank: 6,
      name: "Manpreet Singh",
      score: 3854,
      change: 0,
      avatar: null,
      initials: "AM",
      lastSubmission: "1 hrs 22 min ago",
    },
    {
      id: 8,
      rank: 7,
      name: "Rachit Gupta",
      score: 3498,
      change: 1,
      avatar: null,
      initials: "AM",
      lastSubmission: "9 hrs 49 min ago",
    },
  ]

  return (
    <div className="leaderboard-container">
      <div className="second-container">
        <div className="leaderboard-header">
          <div className="contest-title">
            <div className="title-line"></div>
            <div className="title-box">
              <svg 
                className="crown-icon" 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
              >
                <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
              </svg>
              DCODE
            </div>
            <div className="title-line"></div>
          </div>
        </div>

        <h1 className="leaderboard-heading">Leaderboard</h1>

        <div className="top-users">
          {topUsers
            .sort((a, b) => a.id - b.id)
            .map((user) => (
              <div key={user.id} className={`top-user top-user-${user.id}`}>
                <div className="user-avatar">
                  {user.avatar ? (
                    <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="avatar-img" />
                  ) : (
                    <div className="avatar-initials">{user.initials}</div>
                  )}
                  <div className="rank-badge">
                    <svg 
                      className="rank-crown" 
                      viewBox="0 0 24 24" 
                      width="24" 
                      height="24" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                    >
                      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                    </svg>
                    <span>{user.id}</span>
                  </div>
                </div>
                <div className="user-name">{user.name}</div>
                <div className="user-score">
                  {user.score}
                </div>
              </div>
            ))}
        </div>

        <div className="leaderboard-table">
          <div className="table-header">
            <div className="header-rank">
              <svg 
                className="header-crown" 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
              >
                <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
              </svg> 
              RANK
            </div>
            <div className="header-name">NAME</div>
            <div className="header-xp">POINTS</div>
          </div>

          <div className="table-body">
            {leaderboardData.map((user) => (
              <div key={user.id} className={`table-row ${user.rank <= 3 ? `rank-${user.rank}` : ""}`}>
                <div className="cell-rank">
                  {user.rank <= 3 ? (
                    <div className="rank-badge-small">
                      <svg 
                        className="rank-crown-small" 
                        viewBox="0 0 24 24" 
                        width="16" 
                        height="16" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        fill="none"
                      >
                        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                      </svg>
                      <span>{user.rank}</span>
                    </div>
                  ) : (
                    <span>{user.rank}</span>
                  )}
                </div>

                <div className="cell-name">
                  {user.avatar ? (
                    <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="table-avatar" />
                  ) : (
                    <div className="table-initials">{user.initials}</div>
                  )}
                  <span>{user.name}</span>
                </div>

                <div className="cell-xp">
                  {user.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}