import React from "react";
import { NavLink } from "react-router-dom";
import "./IssueProposal.css";

function IssueProposalNavigation() {
  return (
    <div className="issue-proposal-container">
      <div className="section-heading">
        <h2>Submit an Issue Proposal</h2>
        <p>Choose the type of proposal you'd like to submit</p>
      </div>
      
      <div className="proposal-cards">
        <div className="proposal-card rbh-card">
          <div className="card-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 17H15" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 13H15" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 9H12" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="card-category">RBH Issue Proposal</div>
          <div className="card-explanation">
            Report and suggest improvements for projects maintained. These proposals focus on debugging and enhancing RBH repositories.
          </div>
          <NavLink 
            to="/rbhissueproposal" 
            className="card-button"
          >
            Continue
            <svg
              width="1rem"
              height="1rem"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.38633 0.461182H4.55337V2.30698H5.38633H11.705L1.46546 13.6521L0.876465 14.3047L2.05446 15.6099L2.64346 14.9572L12.8817 3.61358V10.6131V11.536H14.5476V10.6131V1.69171C14.5476 1.01212 14.0504 0.461182 13.437 0.461182H5.38633Z"
                fill="white"
              />
            </svg>
          </NavLink>
        </div>
        
        <div className="proposal-card general-card">
          <div className="card-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V15" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 9V21" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="card-category">General Issue Proposal</div>
          <div className="card-explanation">
            Submit issues for general projects and help the community. These proposals can be for a repository you'd like to contribute to.
          </div>
          <NavLink 
            to="/GenralIssueProposal" 
            className="card-button"
          >
            Continue
            <svg
              width="1rem"
              height="1rem"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.38633 0.461182H4.55337V2.30698H5.38633H11.705L1.46546 13.6521L0.876465 14.3047L2.05446 15.6099L2.64346 14.9572L12.8817 3.61358V10.6131V11.536H14.5476V10.6131V1.69171C14.5476 1.01212 14.0504 0.461182 13.437 0.461182H5.38633Z"
                fill="white"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default IssueProposalNavigation;