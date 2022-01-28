import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
// import ReadMore from "./components/ReadMore";
import Home from "./components/Home";
import BlogsPage from "./components/Blogs";
import BlogMain from "./components/BlogMain";
import Footer from "./components/Footer";
import Questions from "./components/Questions";

import NewQuestions from "./components/NewQuestions";

import Register from "./components/Register";
import About from "./components/About";
import NewBlog from "./components/NewBlog";
import Uploaded from "./components/Done";


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path= "/" element= {<Home/>}></Route>
      <Route path= "/projects" element= {<Projects/>}></Route>
      <Route path = "/readmore" element = {<Register/>}></Route>
      <Route path = "/blogs" element = {<BlogsPage />}></Route>
      <Route path = "/create-new-blog" element = {<NewBlog />}></Route>
      <Route path = "/blog-main" element = {<BlogMain />}></Route> 
      <Route path = "/uploaded" element = {<Uploaded />}></Route> 
      <Route path = "/Q&A" element = {<Questions/>}></Route>
      <Route path = "/ABC" element = {<NewQuestions/>}></Route>
      <Route path = "/about-us" element = {<About/>}></Route>

      {/* <Route element = {<Footer/>}></Route> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
