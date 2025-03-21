import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../Login/Login";
import Modal from "react-modal";
import { X } from "lucide-react";
import Auth from "../Login/Login";
import dGif from "../../../public/3dgifmaker07456.gif";
import "./Header.css";

function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLogin = true

  return (
    <>
      <nav id="nav-bar">
        <div className="logo">
          <a href="/#">
            <svg
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.2692 0.754333H0.576923C0.258462 0.754333 0 1.0147 0 1.33551V26.9073C0 27.2287 0.258462 27.4885 0.576923 27.4885H28.2692C28.5883 27.4885 28.8462 27.2287 28.8462 26.9073V1.33551C28.8462 1.0147 28.5883 0.754333 28.2692 0.754333ZM13.6771 14.5323L7.90789 20.3441C7.79539 20.4574 7.64769 20.5143 7.5 20.5143C7.35231 20.5143 7.20462 20.4574 7.09212 20.3441C6.86654 20.1168 6.86654 19.7495 7.09212 19.5223L10.3554 16.2349C11.5166 15.0652 11.5166 13.1777 10.3554 12.0079L7.09212 8.72052C6.86654 8.49328 6.86654 8.12598 7.09212 7.89874C7.31769 7.6715 7.68231 7.6715 7.90789 7.89874L13.6771 13.7105C13.9027 13.9377 13.9027 14.3051 13.6771 14.5323ZM21.3462 20.5143H15.5769C15.2579 20.5143 15 20.2546 15 19.9332C15 19.6118 15.2579 19.352 15.5769 19.352H21.3462C21.6652 19.352 21.9231 19.6118 21.9231 19.9332C21.9231 20.2546 21.6652 20.5143 21.3462 20.5143Z"
                fill="#DDDDDD"
              />
            </svg>
            <span>DCODE</span>
          </a>
        </div>

        <div className="nav-items">
          <NavLink
            to="/#"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""} lg-hover`
            }
          >
            <span id="home-nav">Home</span>
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""} lg-hover`
            }
          >
            <span id="shop-nav">Shop</span>
          </NavLink>

          <NavLink
            to="/leaderboard"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""} lg-hover`
            }
          >
            Leaderboard
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""} lg-hover`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""} lg-hover`
            }
          >
            History
          </NavLink>

        </div>
        {isLogin ? 
        // your-acc
        <div className="your-acc">
          <div className="xp-counter">
            <div className="xp-icon">
              <img src={dGif} alt="Loading Animation" className="btn-gif" />
            </div>
            <div className="xp-value">13,165</div>
          </div>
          <div className="profile">
            <Link to="/profile">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                alt="Profile"
                className="profile-image"
              />
            </Link>
          </div>
        </div>
        :
        // login btn
        <div className="login">
            {" "}
            <button id="account" onClick={() => setIsOpen(true)}>
              <svg
                width="27"
                height="29"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.31041 14.4788C5.47223 14.136 5.62043 13.788 5.75585 13.4333M12.2849 15.7508C12.7353 14.632 13.0834 13.4834 13.3257 12.3158M16.7691 12.9398C17.0893 11.4203 17.2571 9.85352 17.2571 8.25227C17.2574 7.20273 16.9546 6.17035 16.3772 5.25219C15.7998 4.33403 14.9668 3.56023 13.9564 3.00354C12.946 2.44685 11.7914 2.12554 10.6013 2.06983C9.41107 2.01411 8.22435 2.22581 7.15262 2.68502M2.77832 11.3663C3.05342 10.3673 3.19906 9.32477 3.19906 8.25227C3.19906 6.90602 3.68708 5.65952 4.51663 4.64402M10.2281 8.25152C10.2308 10.8517 9.63749 13.4256 8.48382 15.819M6.53855 10.5C6.65353 9.76502 6.71315 9.01502 6.71315 8.25227C6.71315 7.43146 7.08343 6.64427 7.74253 6.06387C8.40163 5.48347 9.29556 5.1574 10.2277 5.1574C11.1598 5.1574 12.0537 5.48347 12.7128 6.06387C13.3719 6.64427 13.7422 7.43146 13.7422 8.25227C13.7422 8.62877 13.732 9.00302 13.7107 9.37502"
                  stroke="#868F97"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Login</span>
            </button>
            <div>
              <Modal
                className="modal"
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                  content: {
                    textAlign: "center",
                    backgroundColor: "transparent",
                    border: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "90%", // Responsive width
                    maxWidth: "40%", // Limit max width
                    padding: "1rem", // Minimal padding
                    margin: "0 auto",
                  },
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                }}
              >
                {/* Close Button */}
                <button
                  className="close-btn"
                  onClick={() => setIsOpen(false)}
                  style={{
                    position: "absolute",
                    top: "28%",
                    left: "61%",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}
                >
                  <X size={40} />
                </button>

                <Login />
              </Modal>
            </div>
          </div>
        }
        

        

        <div class="hamburger" onClick="toggleMenu()">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
}

function toggleMenu() {
  document.querySelector(".nav-items").classList.toggle("active");
}

export default navbar;
