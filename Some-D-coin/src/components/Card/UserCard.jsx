import React from "react";
import "./UserCard.css";

export default function UserCard(props) {
  return (
    <div>
      <div class="card">
        <div class="card-image">
          <img src={props.picture} alt="No-img-found" />
        </div>
        <a href={props.link}>
          <div class="category">{props.name}</div>
          <div class="heading">
            A heading that must span over two lines 
            {/* {props.data} */}
            <div class="author">
              By <span class="name">User</span> 4 days ago
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
