import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function Home(props) {
  return(
    <div className="home">
      <section className="hero">
        <div className="wrapper">
          <div className="content">
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid odit, modi perspiciatis hic animi, ullam reprehenderit eum placeat deserunt cumque nihil eligendi optio quia nobis ex aspernatur ducimus. Laudantium.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid odit, modi perspiciatis hic animi, ullam reprehenderit eum placeat deserunt cumque nihil eligendi optio quia nobis ex aspernatur ducimus. Laudantium.</p>

          </div>
          <div className="image">
            <img 
              src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="second">
        <div className="wrapper">
          
          <div className="image">
            <img className="col hidelater" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
            <img className="col" src="https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
          </div>

          <div className="content">
            <h2>Build Projects with us to get ahead.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam sint quasi eligendi neque corporis quas perspiciatis necessitatibus. Odio, ullam minus. Dolorum quisquam ab porro aperiam non quia iste rem!</p>
            <button href="/projects" className="button">Build Now</button>
          </div>

        </div>
      </section>

      <section className="service-sec">
          <div className="services">
          <h2>Services Provided By Us</h2>
          <div className="wrapper">
            
            <Link to="/projects" className="item">
              <div className="logo">
                <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
              </div>
              <div className="border"></div>
              <h3>Register for Projects</h3> 
            </Link>

            <Link to="/blogs" className="item">
                <div className="logo">
                  <img src="https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073__340.jpg"/>
                </div>
                <div className="border"></div>
                <h3>Popular Blogs</h3> 
            </Link>
            
            <Link to="/Q&A" className="item">
                <div className="logo">
                  <img src="https://cdn.pixabay.com/photo/2016/11/30/12/16/question-mark-1872665__480.jpg"/>
                </div>
                <div className="border"></div>
                <h3>Online Forum</h3>   
            </Link>
            
            <Link to="/Register" className="item">
                <div className="logo">
                  <img src="https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091__340.jpg"/>
                </div>
                <div className="border"></div>
                <h3>Create Projects</h3> 
            </Link>
          </div>
          </div>
      </section>

      <section class="contact">
        <div class="wrapper">
          <h2>About Us</h2>
          
          <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis similique voluptatum odio eius ducimus animi perferendis ipsam expedita imp</p>
            <a href="/AboutUs">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
}
