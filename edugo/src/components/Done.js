import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function Done(props) {
  return(
    <div className="done">
      <div className="new-blog done-card ">
        <span>  <i class="icon ion-checkmark-circled"></i></span>
        <h2>Your blog is under review</h2>
        <p>Thank you for sharing your content. Your blog is under review and it will be posted on the website within 3-5 days.</p>
      </div>
    </div>
  );
}