import React from "react";
import HeroImg from "../../assets/Hero-img.png";
import CardOne from "../../assets/CardImg1.png";
import CardTwo from "../../assets/CardImg2.png";
import CardThree from "../../assets/CardImg3.png";
import "./Home.css";

function Hero() {
  return (
    <>
      <div id="main-hero">
        <div className="live-btn">
          <span id="live-txt">Live</span>
          <span>Get Started</span>
        </div>
        <div className="heading">
          <p id="main-txt">Code for impact, contribute for change</p>
          <p id="sub-txt">
            Open-source is built by contributors like you. Pick an issue, solve
            it, and grow
          </p>
        </div>
        <div className="what-btn">
          <button>
            Get Started
            <svg
              width="1rem"
              height="1rem"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.38633 0.461182H4.55337V2.30698H5.38633H11.705L1.46546 13.6521L0.876465 14.3047L2.05446 15.6099L2.64346 14.9572L12.8817 3.61358V10.6131V11.536H14.5476V10.6131V1.69171C14.5476 1.01212 14.0504 0.461182 13.437 0.461182H5.38633Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="" />
        </div>
      </div>

      <section className="what">
        <div className="what-heading">
          <span id="what-bold">What is DCODE? </span>
          <span id="what-sub">Everything you need to know</span>
        </div>

        <div className="what-cards">
          <div class="kard">
            <div class="kard-image">
              <img alt="No-img-found" />
            </div>
            <div class="kategory">Pick your challenge</div>
            <div class="explanation">
              Browse through curated open-source issues that match your skills
              and interests.
            </div>
          </div>

          <div class="kard">
            <div class="kard-image">
              <img alt="No-img-found" />
            </div>
            <div class="kategory">Contribute & Earn</div>
            <div class="explanation">
              Solve issues to earn D-Coins while making meaningful contributions
              to open-source.
            </div>
          </div>

          <div class="kard">
            <div class="kard-image">
              <img alt="No-img-found" />
            </div>
            <div class="kategory">Build Your Reputation</div>
            <div class="explanation">
              Climb the leaderboard and showcase your impact in the developer
              community.
            </div>
          </div>
        </div>

        <div className="what-btn2">
          <button>
            Get Started
            <svg
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.38633 0.461182H4.55337V2.30698H5.38633H11.705L1.46546 13.6521L0.876465 14.3047L2.05446 15.6099L2.64346 14.9572L12.8817 3.61358V10.6131V11.536H14.5476V10.6131V1.69171C14.5476 1.01212 14.0504 0.461182 13.437 0.461182H5.38633Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
