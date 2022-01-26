import React from "react";
// import PropTypes from "prop-types";
// import ReadMore from "./ReadMore";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectItems = (props) => {
  const [title, setTitle] = useState("");
  const titleSet = () => {
    setTitle(props.title);
  };
  const [displayIt, setDisplayIt] = useState("inline");
  const DisplaySet = () =>{
    if(displayIt==="none"){
        setDisplayIt("inline")
    }
    else if(displayIt==="inline"){
        setDisplayIt("none")
    }
    
  }
//   const a = key;
  return (
    //   <Router>

    <div>
      <div class="card my-5">
        <div class="card-header">Subject</div>
        <div class="card-body">
          <h5 class="card-title" onClick={titleSet}>
            {props.title}
          </h5>
          <p class="card-text-sm" style={{marginTop : "3%"}}>
            <div class="accordion col-md-10" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    onClick={DisplaySet}    
                  >
                    Description of Project
                    
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body" style={{display : {displayIt}}}  key={props.key}>
                  {/* <div class="accordion-body"> */}
                    <small>{props.content}</small>
                  </div>
                </div>
              </div>
            </div>

            {/* {props.content} */}
          </p>
          <div className="card-footer">
            <p class="card-text">
              <small class="text-muted">{props.date}</small>
            </p>
          </div>
          <Link to="/readmore" class="btn btn-primary">
            Register
            {/* <ReadMore title = {setTitle}/> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

// ProjectItems.propTypes = {

// };

export default ProjectItems;
