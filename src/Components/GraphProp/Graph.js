import React, { useState } from "react";
import "./Graph.css";


export default function Graph() {
    const [imageSrc, setImageSrc] = useState(null);

    const handleFileUpload = async (evt) => {
        const file = evt.target.files[0];
        if (!file) return;
    }


    return (
        <div className="GraphContainer">
            <label className="file-button-label" htmlFor="file-input">
                <span className="button-text">Upload File</span>
                <input
                    type="file"
                    id="file-input"
                    className="file-input"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                />
            </label>
            {imageSrc && (
                <div className="chart-image-container">className
                    <img id="chart-image" className="chart-image" src={imageSrc} alt="chart" />
                </div>
            )}
        </div>
    )
}

