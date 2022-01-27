import React, { useState } from "react";
import axios from "axios";
function QuestionsItems(props) {
  const tags = props.tags;
  const answers = props.answers;
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const submission = {fname,lname,dob,sex,email,phonenumber}
    const submission = { description};
    console.log(submission);
    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    }).then(() => {
      console.log("NEW");
    });
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="card">
          <div className="card-header">
            {tags.map((el) => {
              return (
                <span style={{ color: "blueviolet" }}>
                  <span style={{ display: "inline-block", marginLeft: "2px" }}>
                    {el.tag}
                  </span>
                </span>
              );
              // axios
            })}
          </div>
          <div className="card-header">
            <h3>{props.title}</h3>
          </div>
          <div
            className="container form-outline"
            style={{ marginTop: "10px", width: "70%" }}
          >
            <label className="form-label" htmlFor="firstName">
              Answer :
            </label>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="firstName"
                  className="form-control form-control-lg"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              {/* </textarea> */}
              <div className="mt-4 pt-2">
                <input
                  className="btn btn-primary btn-sm"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          <div className="card-body">
            {answers.map((e) => {
              return (
                <span style={{ color: "blueviolet" }}>
                  {/* <span
                      style={{ display : "table", marginLeft: "2px" }}
                    > */}

                  <div className="card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item my-1">{e.description}</li>
                    </ul>
                  </div>

                  {/* </span> */}
                </span>
              );
              // axios
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsItems;
