import React from "react";
import PostData from "../SampleOut.json";
import ProjectItems from "./ProjectItems";
const Projects = (props) => {
  return (
    // <div className="container ml-3 my-5 col-md-6">
    <div className="container my-3  col-md-6">
      <div className="container">
        <div className="row my-3 ml-4">
          {PostData.map((element) => {
            return (
              <div>
                <ProjectItems
                  title={element.title ? element.title.slice(0, 45) : ""}
                  content={element.content ? element.content.slice(0, 80) : ""}
                  date={element.datePublished}
                  author={element.author}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
