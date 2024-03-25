import React from "react";
import "./Graph.css";

export default function Graph() {
    const handleButtonClick = () => {
        alert("¡Has presionado el botón Generate graph!");
    };

    return (
        <div className="GraphContainer">
            <button id="GraphButton" onClick={handleButtonClick}>Generate graph</button>
            <img src="Graph.jpg" alt="Grafica" />
            Hola mundo
        </div>
    );
}
