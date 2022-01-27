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
            <img src="assets/img/background-images/project-background.jpg" alt="featured-img"/>
          </div>
            
          <div className="item">
            <img src="assets/img/background-images/project-background.jpg" alt="featured-img"/>
          </div>
            
          <div className="item">
            <img src="assets/img/background-images/project-background.jpg" alt="featured-img"/>
          </div>
                    
          <div className="item">
            <img src="assets/img/background-images/project-background.jpg" alt="featured-img"/>
          </div>
        </div>
      </div>

      <div className="team">
      <h1>Our Team</h1>
      <div className="image">
        <img src="" alt="team-img"/>
      </div>
      <div className="wrapper">
        <div className="pop-up">
          <h2 className="other-h1">The people in</h2>
          <h2>EduGo</h2>
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