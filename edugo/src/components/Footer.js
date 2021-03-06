import React from "react";
import "../App.css";

export default function Footer(props) {
  return(
    <section className="footer">

      <div className="footer-basic">
        <footer>
            <h2>EduGo</h2>
            <hr style={{height:"2px",borderWidth:"0",color:"gray",backgroundColor:"#FFD369"}}/>
            <div className="social">
                <a href="#">
                    <i class="icon ion-social-instagram"></i>
                </a>
                <a href="#">
                    <i class="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                        <i class="icon ion-social-twitter"></i>
                </a>
                <a href="#">
                    <i class="icon ion-social-facebook"></i>
                </a>
            </div>
            <ul className="list-inline">
                <li class="list-inline-item"><a href="/">HOME</a></li>
                <li class="list-inline-item"><a href="/projects">PROJECTS</a></li>
                <li class="list-inline-item"><a href="/blogs">BLOG</a></li>
                <li class="list-inline-item"><a href="/Q&A">FAQs</a></li>
                <li class="list-inline-item"><a href="/about-us">ABOUT</a></li>
                <br/><br/>
                <li class="list-inline-item"><a href="#">TERMS AND CONDITIONS</a></li>
                <li class="list-inline-item"><a href="#">PRIVACY POLICY</a></li>
            </ul>
            <p className="copyright">EduGo © 2021</p>
        </footer>
      </div>
    </section>
  );

}