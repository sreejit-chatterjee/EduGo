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
            <img src="" alt=""/>
          </div>

        </div>
      </section>

      <section className="blog-content">
        <div className="post">
          <div className="wrapper">
            <div class="date">
              <p>Novemeber 5, 2021 | Content Writing Tips</p>
              <p>By author</p>
            </div>
            <div className="votes">
              <p>votes</p>
            </div>
          </div>

          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas beatae sed consequatur deleniti amet dolores nam eum necessitatibus. Minus odit atque id? Odit, modi. Necessitatibus assumenda maxime consequatur perferendis.</p>

          <div class="post-tags">
            <h4>Post Tags</h4>
            <p>
              <a>How to Start an Agency</a>
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
              <p>dsfsdgfsdfds</p>
              <span>date</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}