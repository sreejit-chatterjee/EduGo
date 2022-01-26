import React from "react";
import axios from "axios";
function QuestionsItems(props) {
  const tags = props.tags;
  // console.log(tags)
  return (
    <div>
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="card">
          <div className="card-header">
            {
              //   tags.map(key =>{
              tags.map((el) => {
                return (
                  <span style={{color : "blueviolet"}}>
                      <span style={{display : "inline-block", marginLeft:"2px"}}>{el.tag}</span>
                  </span>
                );
                // axios
              })
              //   }
              //   )
            }
          </div>
          <div className="card-header"><h3>{props.title}</h3></div>
          <div
            className=" container card-header text-center"
            style={{ width: "50%" }}
          >
            <h6>{props.content}</h6>

          </div>
          <div className="card-body">PAST ANSWERS</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsItems;
