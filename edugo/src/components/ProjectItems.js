import React from 'react';
import PropTypes from 'prop-types';

const ProjectItems = (props) =>{
  return <div>
      <div class="card my-5">
        <div class="card-header">Subject</div>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            {props.content}
          </p>
          <div className="card-footer">
            <p class="card-text">
              <small class="text-muted">{props.date}</small>
            </p>
          </div>
          <a href="#" class="btn btn-primary">
            Read More and Register
          </a>
        </div>
      </div>
  </div>;
}

// ProjectItems.propTypes = {

// };

export default ProjectItems;
