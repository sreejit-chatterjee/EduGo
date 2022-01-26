import React from 'react';
const Filter = (props)=>{
  return (<div>
      
          <div className="container">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" for="flexCheckDefault">
                {props.uni}
              </label>
            </div>
            {/* <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" for="flexCheckDefault">
                Institute 2
              </label>
            </div> */}
          </div>
        {/* </div> */}

  </div>);
}

export default Filter;
