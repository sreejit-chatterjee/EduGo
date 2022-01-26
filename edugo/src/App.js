import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadMore from "./components/ReadMore";
import Home from "./components/Home";
import Blogs from "./components/Blogs"
import Questions from "./components/Questions";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element= {<Home/>}></Route>
      <Route path="/projects" element= {<Projects/>}></Route>
      {/* <Route path = "/readmore" element = {<ReadMore/>}></Route> */}
      <Route path = "/blogs" element = {<Blogs/>}></Route>
      <Route path = "/Q&A" element = {<Questions/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
