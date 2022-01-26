import React from "react";

function QuestionsItems(props) {
  const tags = props.tags;
  // console.log(tags)
  const renderObject = () => {
    return Object.entries(tags).map(([key, value], i) => {
      return (
        <div key={key}>
          tag is: {value} ;{/* count is: {value.name} */}
        </div>
      );
    });
  };
  return (
    <div>
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="card">
          <div className="card-header">
            {
              //   tags.map(key =>{
              tags.map((el) => {
                return (
                  <span>
                    {/* {console.log(el)} */}

                    <pre>
                      <span>{el.tag}</span>
                    </pre>
                  </span>
                );
                // axios
              })
              //   }
              //   )
            }
          </div>
          <div className="card-header">{props.title}</div>
          <div
            className=" container card-header text-center"
            style={{ width: "50%" }}
          >
            <h4>{props.content}</h4>
          </div>
          <div className="card-body">PAST ANSWERS</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsItems;
