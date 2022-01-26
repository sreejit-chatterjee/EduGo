import React from "react";
import PostData from "../blogSample.json";
import BlogItems from "./BlogItems";
import Filter from "./Filter";
import "../App.css";

const Projects = (props) => {
  return (
    // <div className="container ml-3 my-5 col-md-6">
    <section className="blogs" style={{marginTop : "%"}}>
      <div className="filters">
      {/* {PostData.map((element) => {
          return (<Filter uni={element.uni} />);
        })} */}
        <div
        className="container col-md-5"
        style={{ width: "50%", display: "inline-flex" }}
      >
          <div className="card" style={{width : "13rem"}}>
          <div className="card-header">Subject</div>
        {PostData.map((element) => {
          return <Filter uni={element.uni} />;
        })}
      </div>
      </div>
      </div>
      <div className="blog-wrapper">

          {PostData.map((element) => {
            return (
              <div>s
                <BlogItems
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
