import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PilotContainer from "./Components/PilotContainer/PilotContainer";
import PilotPage from './Pages/Pages/Pilot';
import CopilotPage from "./Pages/Pages/Copilot";
// import Model3D from './Pages/Model3D/Model3D';

function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function App() {

  return (
    <div className="App">
      <>
      <Router>
        <Routes>
          <Route path="/" element={<PilotPage/>} />
          <Route path="/copilot" element={<CopilotPage/>} />
        </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;
