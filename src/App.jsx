import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/products" element={<h1>Products</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />

          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
