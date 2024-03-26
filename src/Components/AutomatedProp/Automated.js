import React from "react";
import "./Automated.css";

export default function Automated() {
    const handleButtonClick = () => {
        alert("¡Has presionado el botón Automated task!");
    };

    return (
        <div className="AutomatedContainer">
            <button id="AutomatedButton" onClick={handleButtonClick}>Run Task</button>
        </div>
    );
}
