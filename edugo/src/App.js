import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import Projects from "./components/Projects"
function App() {
  return (
    <>
    <NavBar/>
    <Projects/>
    </>
  );
}

export default App;
