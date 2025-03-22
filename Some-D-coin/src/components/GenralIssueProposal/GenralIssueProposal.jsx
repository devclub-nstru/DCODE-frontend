import { useState } from "react";
import "./GenralIssueProposal.css";

const GeneralIssueProposal = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="proposal-wrapper">
      <div className="issue-container">
        <h2 className="title">General Issue Proposal</h2>
        <p className="subtitle">
          Submit a new issue or feature request for the development team to consider
        </p>
        <label>Issue Title</label>
        <input
          type="text"
          placeholder="Enter a clear and concise title for your issue"
          className="input-field"
        />
        <label>Description</label>
        <textarea
          placeholder="Describe the issue in detail..."
          className="textarea-field"
        ></textarea>
        <label>Skills Needed</label>
        <div className="skills-input-container">
          <input
            type="text"
            placeholder="Add skills needed (e.g., React, UI/UX, API Design)"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            className="input-field"
          />
          <button className="add-btn" onClick={addSkill}>+</button>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill} <button className="remove-btn" onClick={() => removeSkill(skill)}>×</button>
            </span>
          ))}
        </div>
        <button className="submit-btn">Submit Issue</button>
      </div>
    </div>
  );
};

export default GeneralIssueProposal;
