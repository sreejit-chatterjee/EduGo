import React from 'react';
import PropTypes from 'prop-types';
import ReadMore from './ReadMore';
import { Link } from "react-router-dom";
import { useState } from 'react';

const ProjectItems = (props) =>{
    const [title, setTitle] = useState("");
    const titleSet = ()=>{
        setTitle(props.title);
    }
    return (
//   <Router>
  
  <div>
      <div class="card my-5">
        <div class="card-header">Subject</div>
        <div class="card-body">
          <h5 class="card-title" onClick={titleSet}>{props.title}</h5>
          <p class="card-text">
            {props.content}
          </p>
          <div className="card-footer">
            <p class="card-text">
              <small class="text-muted">{props.date}</small>
            </p>
          </div>
          <Link to="/readmore" class="btn btn-primary" >
            Read More and Register
            <ReadMore title = {props.title}/>
          </Link>
        </div>
      </div>
  </div>
  )
}

// ProjectItems.propTypes = {

// };

export default ProjectItems;
