import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage, HouseDetailsPage } from "./pages";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="max-w-7xl mx-auto sticky z-50 top-0">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/houses/:houseId" element={<HouseDetailsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
