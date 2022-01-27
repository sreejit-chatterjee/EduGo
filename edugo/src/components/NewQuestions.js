import React, { useState } from "react";

function NewQuestions() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
//   const [tags, setTags] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const submission = {fname,lname,dob,sex,email,phonenumber}
    const submission = { title, description};
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
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "10%" }}>
          <div className="card">
            <div className="card-header">
              <label className="form-label" htmlFor="firstName">
                <strong>Question Title :</strong>
              </label>

              <input
                type="text"
                id="firstName"
                className="form-control form-control-lg"
                style={{ width: "20%" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="card-header">
              <h3></h3>
            </div>
            <div
              className="container form-outline"
              style={{ marginTop: "10px", width: "70%" }}
            >
              <label className="form-label" htmlFor="firstName">
                Answer :
              </label>
              {/* <form onSubmit={handleSubmit}> */}
              <input
                type="text"
                id="firstName"
                className="form-control form-control-lg"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="mt-4 pt-2">
                <input
                  className="btn btn-primary btn-sm"
                  type="submit"
                  value="Submit"
                />
              </div>
              {/* </form> */}
            </div>
            <div className="card-body">
              {/* {answers.map((e) => {
              return (
                <span style={{ color: "blueviolet" }}>
                  <div className="card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item my-1">{e.description}</li>
                    </ul>
                  </div>
                </span>
              );
            })} */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewQuestions;
