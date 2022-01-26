import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadMore from "./components/ReadMore";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/projects" element= {<Projects />}></Route>
      <Route path = "/readmore" element = {<ReadMore/>}></Route>
        
        
      </Routes>
    </Router>
  );
};

export default App;
