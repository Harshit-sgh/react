import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WeatherCurrent from "./components/WeatherCurrent";
import WeatherForecast from "./components/WeatherForecast";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current" element={<WeatherCurrent />} />
        <Route path="/forecast" element={<WeatherForecast />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;