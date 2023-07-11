import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Car from "./Pages/Car";
import Parts from "./Pages/Parts";
import DragAndDropPage from "./Pages/DragAndDrop";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Car />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/dragdrop" element={<DragAndDropPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
