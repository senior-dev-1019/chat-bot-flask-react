import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Answer from "./Answer";

function App() {
  return (
    // <React.Fragment>
    //   <Home />
    //   <Answer />
    // </React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="answer" element={<Answer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
