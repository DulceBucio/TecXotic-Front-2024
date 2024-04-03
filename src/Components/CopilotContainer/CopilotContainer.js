import React, { useState } from "react"
import Lateral from "../LateralNavBar/Lateral"
import Webcam from "react-webcam"
import SVG from "../SVGProp/SVG"
import "./CopilotContainer.css"
import CameraProp from "../CameraProp/CameraProp"
import { arrayOfCameras } from "../../Constants"

function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

export default function CopilotContainer(){
    const webcamRef1 = React.useRef(null);
    const webcamRef2 = React.useRef(null);

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleSelectedComponent = (component) => {
        setSelectedComponent(component);
    }

    const [sampleA, setSampleA] = useState(null);

    const takePicture = (webcamRef) => {
        const imageSrc = webcamRef.current.getScreenshot();
        var file = dataURLtoFile(imageSrc, 'Comparator.png');
        setSampleA(URL.createObjectURL(file));
        var a = document.createElement("a"); //Create <a>
        a.href = imageSrc; //Image Base64 Goes here
        a.download = "Model.png"; //File name Here
        a.click();
    }

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
                            <button className="camera-button" onClick={() => takePicture(webcamRef1)} >
                                <SVG name="camera" style={{}} />
                            </button>
                            {/*cuando ocupen hacer pruebas sin conectarse al servidor utilicen la webcam*/}
                            <CameraProp
                                image={arrayOfCameras[0].image}
                                idImg={arrayOfCameras[0].idImg}
                                styles={arrayOfCameras[0].styles}
                            />
                            {/* <Webcam ref={webcamRef1} height={340} width={600} screenshotFormat="image/png" /> */}
                        </div>
                    </div>
                    <div className="bottom-right-box">
                        <div className="CameraContainer">
                            <div className="camera-text">Camera 2</div>
                            <button className="camera-button" onClick={() => takePicture(webcamRef2)}>
                                <SVG name="camera" style={{}} />
                            </button>
                            {/* <Webcam ref={webcamRef2} height={340} width={600} screenshotFormat="image/png" /> */}
                            <CameraProp
                                image={arrayOfCameras[0].image}
                                idImg={arrayOfCameras[0].idImg}
                                styles={arrayOfCameras[0].styles}
                            />
                            <button className="render-button">
                                <span className="renderbutton-text">Render 3D</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}