import React from "react";
import "../App.css";

import BlogMain from "./BlogMain";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 
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
          
          <a href= "/blog-main"
            className=" card-button">READ MORE</a>
        </div>
      </div>
  );
}
