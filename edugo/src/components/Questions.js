import React,{useEffect} from "react";
import QuestionsData from "../qs.json";
import QuestionsItems from "./QuestionsItems";
var data = QuestionsData.data;
const Questions = (props) => {

  // const sendData = ()=>{
  //   const submission = {description};
  //   console.log(submission);
  //   fetch("http://localhost:8000/questions", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(submission),
  //   }).then(() => {
  //     console.log("NEW");
  //   });
  // }
  useEffect(() => {
    const data = fetch("http://localhost:8000/questions", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(submission),
    }).then((d) => {
      console.log("NEW");
      console.log(d);
    });
  }, []);
  
  return (
    <div>
      <div className="container create" style={{ marginTop: "10%" }}>
        {/* <div className="card text-center"> */}
          {/* <strong>New Question?</strong> */}
          <a href="/ABC" className="button">
            Add Question
          </a>
        {/* </div> */}
      </div>

      <div className="container" style={{ marginTop: "1%" }}>
        {data.map((element) => {
          return (
            <div>
              {/* <h1 style={{marginTop : "30%"}}>{element.tags.tag}</h1> */}
              <QuestionsItems
                title={element.title}
                content={element.content}
                tags={element.tags}
                answers={element.answers}
              />
              {/* <h1>{element.tags.tag}</h1> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
