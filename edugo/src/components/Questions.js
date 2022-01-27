import React from 'react';
import QuestionsData from "../qs.json"
import QuestionsItems from './QuestionsItems';
var data = QuestionsData.data;
const Questions=(props)=>{
    
  return (<div>
      <div className="container" style={{marginTop : "10%"}}>
          
      </div>


     <div className="container" style={{marginTop : "1%"}}>
        {data.map((element) =>{
            return(
                <div>
                    {/* <h1 style={{marginTop : "30%"}}>{element.tags.tag}</h1> */}
                <QuestionsItems title = {element.title} content = {element.content} tags = {element.tags} answers = {element.answers}/>
                {/* <h1>{element.tags.tag}</h1> */}
                </div>
            );
        })}
      </div> 


  </div>);
}

export default Questions;
