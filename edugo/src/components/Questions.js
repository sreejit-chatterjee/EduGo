import React from 'react';
import QuestionsData from "../QuestionsData.json"
import QuestionsItems from './QuestionsItems';
var data = QuestionsData.data;
const Questions=(props)=>{
  return (<div>
     <div className="container" style={{marginTop : "10%"}}>
          {/* <div className="card">
              <div className="card-header">Hi</div>
              <div className=" container card-header text-center" style={{width : "50%"}}><h4>Sample Question 1?</h4></div>
              <div className="card-body">PAST ANSWERS</div>
          </div> */}

        {data.map((element) =>{
            return(
                <div>
                    {/* <h1 style={{marginTop : "30%"}}>{element.tags.tag}</h1> */}
                <QuestionsItems title = {element.title} content = {element.content} tags = {element.tags}/>
                <h1>{element.tags.tag}</h1>
                </div>
            );
        })}
      </div> 


  </div>);
}

export default Questions;
