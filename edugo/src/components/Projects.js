import React from "react";
import PostData from "../SampleOut.json";
import ProjectItems from "./ProjectItems";
import Filter from "./Filter";
const Projects = (props) => {
  return (
    // <div className="container ml-3 my-5 col-md-6">
    <div className="container my-3  col-md-12" style={{marginTop:"1%s"}}>
      <div
        className="container col-md-3"
        style={{ width: "30%", display: "inline-flex" }}
      >
          <div className="card" style={{width : "13rem"}}>
          <div className="card-header">Subject</div>
        {PostData.map((element) => {
          return <Filter uni={element.uni} />;
        })}
      </div>
      </div>
      <div
        className="container col-md-6"
        style={{ width: "70%", display: "inline-flex" }}
      >
        <div className="row my-3 ml-4">
          {PostData.map((element) => {
            return (
              <div>
                <ProjectItems
                  title={element.title ? element.title.slice(0, 45) : ""}
                //   content={element.content ? element.content.slice(0, 80) : ""}
                  content={element.content}
                  date={element.datePublished}
                  author={element.author}
                  key = {element.id}
                />
                <div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
