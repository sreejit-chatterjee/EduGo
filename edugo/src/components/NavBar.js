import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <div className="navbar-main">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            EduGo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item ">
              <Link class="nav-link " aria-current="page" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item ">
              <Link class="nav-link" aria-current="page" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item ">
              <a class="nav-link" aria-current="page" href="/Q&A">
                  Q&A
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
