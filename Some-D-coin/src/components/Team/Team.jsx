import React from "react";
import "./Team.css";
import UserCard from "../Card/UserCard";

export default function About() {
  return (
    <div className="container">
      <UserCard name="Aditya Kumar" data="" picture='https://nxtup.in/images/aditya_pfp.jpeg' link='https://www.linkedin.com/in/adityainnovates/'/>
      <UserCard name="Ved Pawar" data="" picture='https://nxtup.in/images/ved_pfp.jpeg' link='https://www.linkedin.com/in/ved-pawar-00169a268/'/>
      <UserCard name="Hardik Jaiswal" data="" picture='https://nxtup.in/images/hardik_pfp.jpg' link='https://www.linkedin.com/in/pseudopythonic/'/>
      <UserCard name="Rohan Shigh" data="" picture='https://nxtup.in/images/rohan_pfp.jpeg' link='https://www.linkedin.com/in/rohansng/'/>
      <UserCard name="Raghav Gupta" data="" picture='https://nxtup.in/images/raghav_pfp.jpeg' link='https://www.linkedin.com/in/raghav-gupta-b890b7323/'/>
      <UserCard name="Kevish Sewliya" data="" picture='https://pbs.twimg.com/profile_images/1835703213301121024/ATDUEVk1_400x400.jpg' link='https://www.linkedin.com/in/kevish-sewliya/'/>
      <UserCard name="Aryan" data="" picture='' link=''/>
      <UserCard name="Rudra" data="" picture='' link=''/>
      <UserCard name="Yug" data="" picture='' link=''/>
    </div>
  );
}
