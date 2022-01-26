import React from "react";
import "../App.css";

export default function Card(props) {
  return (

      <div className="card">
        <div className="image">
          <img src={props.img} className="card-img" alt="" />
        </div>
        <div className="card-content">
          <p className="card-grey">
            <span>
              {props.date} | {props.author}
            </span>
          </p>
          <h2 className="card-title">{props.title}</h2>
          <p>{props.content}</p>
          <button a="#" className="card-button">READ MORE</button>
        </div>
      </div>
  );
}
