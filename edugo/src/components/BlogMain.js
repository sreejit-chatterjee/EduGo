import React from "react";
import PostData from "../blogSample.json";
import BlogItems from "./BlogItems";
import "../App.css";

export default function Blog(props) {
  return(
    <div className="blog-main">
      <section className="blog-top">
        
        <div className="wrapper">
          <div className="content">
            <h3>Single Post</h3>
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2> 
          </div>
          
          <div className="image">
            <img src="https://thumbs.dreamstime.com/b/big-data-analytics-bi-business-intelligence-concept-chart-graph-icons-virtual-screen-big-data-analytics-bi-business-126811848.jpg" alt=""/>
          </div>

        </div>
      </section>

      <section className="blog-content">
        <div className="post">
          <div className="wrapper">
            <div class="date">
              <p>2020-04-27 | Big Data</p>
              <p>By Vineet Patil</p>
            </div>
            <div className="votes">
              <p>24 Upvotes</p>
            </div>
          </div>

          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas beatae sed consequatur deleniti amet dolores nam eum necessitatibus. Minus odit atque id? Odit, modi. Necessitatibus assumenda maxime consequatur perferendis.</p>

          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas beatae sed consequatur deleniti amet dolores nam eum necessitatibus. Minus odit atque id? Odit, modi. Necessitatibus assumenda maxime consequatur perferendis.</p>
          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas beatae sed consequatur deleniti amet dolores nam eum necessitatibus. Minus odit atque id? Odit, modi. Necessitatibus assumenda maxime consequatur perferendis.</p>

          <div class="post-tags">
            <h4>Post Tags</h4>
            <p>
              <a>Big Data</a>,
              <a>Lorem ipsum dolor</a>,
              <a>Lorem ipsum dolor</a>,
              <a>Lorem ipsum dolor</a>
            </p>
          </div>
        </div>

        <div className="wrapper-com">
          <h4>Top Comments</h4> 
          <div className="item">
            <div className="col">
              <p className="user">User</p>
              <span></span>
            </div>
            <div className="col">
              <p>Awesome post!</p>
              <span>2020-04-27</span>
            </div>
          </div>
          <div className="item">
            <div className="col">
              <p className="user">User534</p>
              <span></span>
            </div>
            <div className="col">
              <p>Good content!</p>
              <span>2020-04-27</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}