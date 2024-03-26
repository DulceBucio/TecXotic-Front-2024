import React, { useState } from "react"
import Lateral from "../LateralNavBar/Lateral"
import Webcam from "react-webcam"
import SVG from "../SVGProp/SVG"
import "./CopilotContainer.css"

export default function CopilotContainer(){
    const webcamRef1 = React.useRef(null);
    const webcamRef2 = React.useRef(null);

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleSelectedComponent = (component) => {
        setSelectedComponent(component);
    };

    return(
        <div className="copilot-container">
            <Lateral handleSelectedComponent={handleSelectedComponent} />
            <div className="camera-container">
                <div className="left-box">
                    {selectedComponent}
                </div>
                <div className="right-box">
                    <div className="top-right-box">
                        <div className="CameraContainer">
                            <div className="camera-text">Camera 1</div>
                            <button className="camera-button">
                                <SVG name="camera" style={{}} />
                            </button>
                            <Webcam ref={webcamRef1} height={340} width={600} screenshotFormat="image/png" />
                        </div>
                    </div>
                    <div className="bottom-right-box">
                        <div className="CameraContainer">
                            <div className="camera-text">Camera 2</div>
                            <button className="camera-button">
                                <SVG name="camera" style={{}} />
                            </button>
                            <Webcam ref={webcamRef2} height={340} width={600} screenshotFormat="image/png" />
                            <button className="render-button">
                                <span className="button-text">Render 3D</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}