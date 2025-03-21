import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contributors.css";

const ContributorGuide = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contributor-guide">
      <h1 className="guide-title-contri" data-aos="fade-up">
        Contributor's Guide for DCODE
      </h1>
      <p className="intro-text-contri" data-aos="fade-up">
        Welcome to DCODE, the open-source collaboration event organised by the
        Dev Club! We’re excited to have you join us in contributing to
        meaningful projects. This guide will help ensure a smooth and productive
        experience for all participants.
      </p>

      <h2 className="section-title-contri" data-aos="fade-up">
        About DCODE
      </h2>
      <p className="section-text-contri" data-aos="fade-up">
        DCODE is a unique event where developers work together to improve
        open-source projects. Instead of building from scratch, participants
        pick issues from our maintained repositories and solve them to enhance
        existing codebases.
      </p>

      <h2 className="section-title-contri" data-aos="fade-up">
        What Are DCoin?
      </h2>
      <p className="section-text-contri" data-aos="fade-up">
        DCoin are our event’s digital currency. You use them to “buy” issues,
        commit to solving them, and earn more by successfully contributing. They
        also count toward the leaderboard and can be transferred between
        participants.
      </p>

      <h2 className="section-title-contri" data-aos="fade-up">
        Issue Availability
      </h2>
      <p className="section-text-contri" data-aos="fade-up">
        At the start of the event, there will be a set of predefined issues
        available in the shop. More issues may be added as the event progresses
        based on participant petitions and discoveries.
      </p>

      <h2 className="section-title-contri" data-aos="fade-up">
        How to Work on Issues
      </h2>
      <p className="section-text-contri" data-aos="fade-up">
        Participants can only work on issues they have “bought” with DCoin. This
        ensures that each participant has a fair chance to contribute while
        helping others with issues they are interested in solving.
      </p>

      <h2 className="section-title-contri" data-aos="fade-up">
        How to Contribute
      </h2>
      <p className="section-text-contri" data-aos="fade-up">
        Follow these steps to contribute to DCODE:
      </p>

      <h3 className="step-title-contri" data-aos="fade-up">
        1. Learn Git & GitHub
      </h3>
      <p className="step-description-contri" data-aos="fade-up">
        If you’re new to Git and GitHub, check out these resources:
      </p>
      <ul className="resource-link-contris" data-aos="fade-up">
        <li>
          <a
            className="resource-link-contri"
            href="https://docs.github.com/en/github/getting-started-with-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git & GitHub for Beginners
          </a>
        </li>
        <li>
          <a
            className="resource-link-contri"
            href="https://opensource.guide/how-to-contribute/"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to Contribute to Open Source
          </a>
        </li>
      </ul>

      <h3 className="step-title-contri" data-aos="fade-up">
        2. Choose an Issue
      </h3>
      <p className="step-description-contri" data-aos="fade-up">
        Browse through our open issues in the repositories. Use your DCoin to
        “buy” an issue, meaning you commit to solving it. If you discover a new
        issue, you can petition to add it to the shop. Be respectful—issues are
        first come, first serve.
      </p>

      <h3 className="step-title-contri" data-aos="fade-up">
        3. Fork and Clone
      </h3>
      <p className="step-description-contri" data-aos="fade-up">
        Fork the repository and clone it to your local machine using the
        following command:
      </p>
      <pre className="code-snippet-contri" data-aos="fade-up">
        git clone https://github.com/your-username/repository-name.git
      </pre>

      <h3 className="step-title-contri" data-aos="fade-up">
        4. Create a Branch
      </h3>
      <p className="step-description-contri" data-aos="fade-up">
        After cloning, create a new branch for your issue:
      </p>
      <pre className="code-snippet-contri" data-aos="fade-up">
        git checkout -b issue-name
      </pre>

      <h3 className="step-title-contri" data-aos="fade-up">
        5. Commit and Push
      </h3>
      <p className="step-description-contri" data-aos="fade-up">
        Once you've made your changes, commit and push them to the repository:
      </p>
      <pre className="code-snippet-contri" data-aos="fade-up">
        git commit -m "Fix: [Short Description of Fix]"
      </pre>
      <pre className="code-snippet-contri" data-aos="fade-up">
        git push origin issue-name
      </pre>

      <h3 className="step-title-contri" data-aos="fade-up">
        6. Submit a Pull Request (PR)
      </h3>
      <p className="step-description-contri" data-aos="fade-up">
        When you're ready to submit your changes, create a pull request. In your
        PR description:
      </p>
      <ul className="pr-tips" data-aos="fade-up">
        <li>Clearly describe the changes you've made.</li>
        <li>Reference the issue number you're solving.</li>
        <li>Request a review from a maintainer.</li>
      </ul>

      <h2 className="section-title-contri" data-aos="fade-up">
        Collaboration Guidelines
      </h2>
      <p className="section-text-contri" data-aos="fade-up">
        DCODE is about teamwork and the open-source spirit. To maintain a
        positive environment:
      </p>
      <ul className="guidelines-list" data-aos="fade-up">
        <li>
          <strong>No Issue Hoarding:</strong> You can only work on one issue at
          a time.
        </li>
        <li>
          <strong>Respect Others’ Work:</strong> If an issue is assigned to
          someone, let them work on it.
        </li>
        <li>
          <strong>Be Constructive:</strong> Give helpful feedback in PR reviews.
        </li>
        <li>
          <strong>Help First-Timers:</strong> Encourage and guide newcomers.
        </li>
        <li>
          <strong>No Toxicity:</strong> Disrespectful behaviour will not be
          tolerated.
        </li>
      </ul>

      <h2 className="section-title-contri" data-aos="fade-up">
        Raising and Resolving Issues
      </h2>
      <p className="section-text-contri" data-aos="fade-up">
        If you find a bug, raise a petition.
      </p>
      <ul className="issue-steps" data-aos="fade-up">
        <li>If approved, the issue will be listed for others to “buy.”</li>
        <li>If you want to work on it yourself, you get priority.</li>
      </ul>

      <h2 className="section-title-contri" data-aos="fade-up">
        Imposter Syndrome Disclaimer
      </h2>
      <p className="section-text-contri" data-aos="fade-up">
        We want your help. No really, we do.
      </p>
      <p className="section-text-contri" data-aos="fade-up">
        There might be a little voice inside that tells you you're not ready;
        that you need to do one more tutorial, or learn another framework, or
        write a few more blog posts before you can help with this project.
      </p>
      <p className="section-text-contri" data-aos="fade-up">
        I assure you, that's not the case. This document contains some
        contribution guidelines and best practices, but if you don't get it
        right the first time, we'll try to help you fix it.
      </p>
      <p className="section-text-contri" data-aos="fade-up">
        The contribution guidelines outline the process that you'll need to
        follow to get a patch merged. By making expectations and process
        explicit, we hope it will make it easier for you to contribute.
      </p>
      <p className="section-text-contri" data-aos="fade-up">
        And you don't just have to write code. You can help out by writing
        documentation, tests, or even by giving feedback about this work. (And
        yes, that includes giving feedback about the contribution guidelines.)
      </p>
      <p className="section-text-contri" data-aos="fade-up">
        If you have questions or want to chat, feel free to reach out in our Dev
        Club Discord{" "}
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          link
        </a>{" "}
        or GitHub issues.
      </p>
      <p className="section-text-contri" data-aos="fade-up">
        Thank you for contributing! 🚀
      </p>

      <h2 className="section-title-contri" data-aos="fade-up">
        Code of Conduct
      </h2>
      <ul className="conduct-list" data-aos="fade-up">
        <li>
          <strong>Be inclusive and respectful.</strong>
        </li>
        <li>
          <strong>Provide constructive feedback.</strong>
        </li>
        <li>
          <strong>Follow ethical coding practices.</strong>
        </li>
        <li>
          <strong>No plagiarism—give credit where due.</strong>
        </li>
      </ul>

      <h2 className="section-title-contri" data-aos="fade-up">
        Need Help?
      </h2>
      <p className="section-text-contri" data-aos="fade-up">
        If you have any questions, reach out to the maintainers or ask in our
        Dev Club Discord Channel{" "}
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          link
        </a>
      </p>
      <p className="section-text-contri" data-aos="fade-up">
        Happy Coding! 🚀
      </p>
    </div>
  );
};

export default ContributorGuide;
