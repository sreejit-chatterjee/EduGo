import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function About(props) {
  return(
    <section className="about-wrapper">
      <div className="wrapper">      
        <div className="content">
          <h1>About EduGo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores aperiam molestias, exercitationem ea iste aspernatur excepturi? In earum facilis ab accusamus ea eius, soluta, saepe, praesentium excepturi perferendis molestiae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam, quae non excepturi nemo cupiditate facere quas totam, culpa, similique aut sit accusamus? Maxime omnis perferendis animi quo blanditiis consectetur.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores aperiam molestias, exercitationem ea iste     aspernatur excepturi? In earum facilis ab accusamus ea eius, soluta, saepe, praesentium excepturi perferendis molestiae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam, quae non excepturi nemo cupiditate facere quas totam, culpa, similique aut sit accusamus? Maxime omnis perferendis animi quo blanditiis consectetur.
          </p> 
        </div>

        <div className="projects">
          <div className="item">
            <img src="https://thumbs.dreamstime.com/b/big-data-analytics-bi-business-intelligence-concept-chart-graph-icons-virtual-screen-big-data-analytics-bi-business-126811848.jpg" alt="featured-img"/>
          </div>
            
          <div className="item">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="featured-img"/>
          </div>
            
          <div className="item">
            <img src="https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="featured-img"/>
          </div>
                    
          <div className="item">
            <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="featured-img"/>
          </div>
        </div>
      </div>

      <div className="team">
      <h1>Our Team</h1>
      <div className="image">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="team-img"/>
      </div>
      <div className="wrapper">
        <div className="pop-up">
          <h2 className="other-h1">The people in EduGo</h2>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut nobis alias deserunt quisquam porro libero suscipit. Fuga, tempore accusantium. Odio eveniet accusantium nostrum nam saepe molestiae debitis, perspiciatis praesentium?</p>
        </div>

        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa rerum accusantium et quas fugit? Ratione odio quis illo! Accusamus consequuntur ab consequatur est necessitatibus. Quas dolor distinctio dignissimos soluta.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe fugiat est autem exercitationem laboriosam incidunt facere fuga consequatur, voluptatem iste enim earum distinctio necessitatibus atque assumenda laudantium provident molestiae numquam.</p>
        </div>
      </div>
    </div>

    </section>
  );
}