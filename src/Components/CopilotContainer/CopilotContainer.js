import React, { useState } from "react"
import Lateral from "../LateralNavBar/Lateral"
import Webcam from "react-webcam"
import SVG from "../SVGProp/SVG"
import "./CopilotContainer.css"
import CameraProp from "../CameraProp/CameraProp"
import { arrayOfCameras } from "../../Constants"

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
                            <CameraProp
                                image={arrayOfCameras[0].image}
                                idImg={arrayOfCameras[0].idImg}
                                styles={arrayOfCameras[0].styles}
                            />
                        </div>
                    </div>
                    <div className="bottom-right-box">
                        <div className="CameraContainer">
                            <div className="camera-text">Camera 2</div>
                            <button className="camera-button">
                                <SVG name="camera" style={{}} />
                            </button>
                            <CameraProp
                                image={arrayOfCameras[0].image}
                                idImg={arrayOfCameras[0].idImg}
                                styles={arrayOfCameras[0].styles}
                            />
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