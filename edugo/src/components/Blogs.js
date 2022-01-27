import React from "react";
import PostData from "../blogSample.json";
import BlogItems from "./BlogItems";
import Filter from "./Filter";
import "../App.css";

const Projects = (props) => {
  return (
    // <div className="container ml-3 my-5 col-md-6">
    <section className="blogs" style={{marginTop : "%"}}>
      <div className="new-blog">

          <h2>Create a New Blog</h2>
          <p>Want to share some of your content with us. Send in any article, content or blog today</p>
          <button className="button" ><a href="/create-new-blog">Create Blog</a></button>
    
      </div>
      
      <div className="blog-wrapper">

          {PostData.map((element) => {
            return (
              <div>
                <BlogItems
                  id={element.id}
                  img={element.img}
                  date={element.datePublished ? element.datePublished.slice(0, 10) : ""}
                  author={element.author}
                  title={element.title ? element.title.slice(0, 45) : ""}
                  content={element.content ? element.content.slice(0, 80) : ""}
                />
              </div>
            );
          })}
        
      </div>
    </section>
  );
};

export default Projects;
