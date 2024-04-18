import React, { useState } from "react";
import "./Graph.css";


export default function Graph() {
    const [imageSrc, setImageSrc] = useState(null);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileUpload = async (evt) => {
        const uploadedFile = evt.target.files[0];
        if (!uploadedFile) return;
    
        if (uploadedFile.type === "text/csv") {
          setFile(uploadedFile);
        } else {
          setMessage("Please upload a CSV file.");
        }
    };    

    const handleUpload = async () => {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
    
          try {
            const response = await fetch("http://192.168.5.1:8080/graph/upload", {
              method: "POST",
              body: formData,
            });
    
            if (response.ok) {
              setImageSrc("http://192.168.5.1:8080/graph/image/temp_plot.png");
            }
          } catch (error) {
            setMessage("Fatal error :(");
          }
        } else {
          setMessage("Please select a file first.");
        }
      };

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
            <label className="upload-button-label">
                <span className="upload-text">Generate</span>
                <button
                    id="file-input"
                    className="file-upload"
                    onClick={handleUpload}
                    style={{ display: "none" }}
                />
            </label>
            {imageSrc && (
                <div className="chart-image-container">
                    <img id="chart-image" className="chart-image" src={imageSrc} alt="chart" />
                </div>
            )}
        </div>
    )
}

