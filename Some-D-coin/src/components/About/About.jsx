import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="main-about">
      <div
        className="doubt"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-delay={200}
      >
        <h1>What is Open-Source?</h1>
        <div className="description">
          <p>
            {"->"} Open-source means that the code is publicly available for
            anyone to view, use, and modify. Think of it like a recipe that
            anyone can improve, customize, or share.
          </p>
          <p>
            {"->"} By contributing to open-source projects, developers can fix
            bugs, add features, and help make the software better for everyone.
            It’s all about collaboration, learning, and building together!
          </p>
        </div>
      </div>
      <div
        className="doubt"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-delay={200}
      >
        <h1>What is DCODE?</h1>
        <div className="description">
          <p>
            {"->"} DCODE is an event where developers come together to work on
            open-source projects. At DCODE, participants pick problems (called
            “issues”) from a list of open-source projects they want to work on.
            They then “buy” these issues using DCoin, meaning they commit to
            solving them.
          </p>
          <p>
            {"->"} Once the issues are fixed, they help improve the project, and
            everyone benefits because the code becomes better. If the
            participants find an issue or bug while working on the project, they
            can raise a petition. If the issue is valid, it can be listed on the
            shop for others to buy in case the person who raised the issue is
            willing to work on that particular issue.
          </p>
          <p>
            {"->"} It’s like a hackathon, but instead of just building new
            things from scratch, you’re helping improve existing projects that
            anyone can use. It’s all about teamwork, learning, and contributing
            to the wider tech community.
          </p>
        </div>
      </div>
      <div
        className="doubt"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-delay={200}
      >
        <h1>What are DCoin?</h1>
        <div className="description">
          <p>
            {"->"} DCoin are like a digital currency that will be used in buying
            the issues and other exciting rewards up for grabs. It will also
            serve as a point system for the leaderboard throughout the whole
            event.
          </p>
          <p>
            {"->"} Every participant will get their own wallets, which will help
            them store these coins. They can also transfer these coins among
            themselves if they are willing to do so.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
