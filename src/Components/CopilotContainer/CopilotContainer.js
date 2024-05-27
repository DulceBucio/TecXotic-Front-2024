import React, { useState } from "react"
import { Link } from "react-router-dom"
import Lateral from "../LateralNavBar/Lateral"
import Webcam from "react-webcam"
import SVG from "../SVGProp/SVG"
import "./CopilotContainer.css"
import CameraProp from "../CameraProp/CameraProp"
import { arrayOfCameras } from "../../Constants"
import { render } from "@testing-library/react"

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

    // const takePicture = (webcamRef) => {
    //     const imageSrc = webcamRef.current.getScreenshot();
    //     var file = dataURLtoFile(imageSrc, 'Comparator.png');
    //     setSampleA(URL.createObjectURL(file));
    //     var a = document.createElement("a"); //Create <a>
    //     a.href = imageSrc; //Image Base64 Goes here
    //     a.download = "Model.png"; //File name Here
    //     a.click();
    // }

    const takePicture = () => {
        fetch('http://192.168.5.1:8080/screenshot/default') // 'default' can be any placeholder
            .then(response => response.blob())
            .then(blob => {
                const imageSrc = URL.createObjectURL(blob);
                setSampleA(imageSrc);
                var a = document.createElement("a");
                a.href = imageSrc;
                a.download = "Model.png";
                a.click();
            })
            .catch(error => console.error('Error taking picture:', error));
            console.log("Picture taken");
    }

    const renderModel = () =>{
        fetch('http://10.49.183.192:8080/photogammetry') //Photogammetry main.py local host rooute
        .then(response => response.blob())
        then(blob => {
            alert("Model 3D")
        })
        .catch(error => console.error("Error en conexión", error));
        console.log("Render model");
    }

    return(
        <div className="copilot-container">
            <nav className="top-right-nav">
                <Link to="/" className="pilot-link">Pilot</Link>
            </nav>
            <Lateral handleSelectedComponent={handleSelectedComponent} />
            <div className="camera-container">
                <div className="left-box">
                    {selectedComponent}
                </div>
                <div className="right-box">
                    <div className="top-right-box">
                        <div className="CameraContainer">
                            <div className="camera-text">Camera 1</div>
                            <button className="camera-button" onClick={takePicture}>
                                <SVG name="camera" style={{}} />
                            </button>

                            {/*cuando ocupen hacer pruebas sin conectarse al servidor utilicen la webcam*/}
                            <CameraProp
                                image={arrayOfCameras[0].image}
                                idImg={arrayOfCameras[0].idImg}
                                styles={arrayOfCameras[0].styles}
                            />
                            {/* <Webcam ref={webcamRef1} height={300} width={580} screenshotFormat="image/png" /> */}
                        </div>
                    </div>
                    <div className="bottom-right-box">
                        <div className="CameraContainer">
                            <div className="camera-text">Camera 2</div>
                            <button className="camera-button" onClick={takePicture}>
                                <SVG name="camera" style={{}} />
                            </button>
                            {/* <Webcam ref={webcamRef2} height={300} width={580} screenshotFormat="image/png" /> */}
                            <CameraProp
                                image={arrayOfCameras[0].image}
                                idImg={arrayOfCameras[0].idImg}
                                styles={arrayOfCameras[0].styles}
                            />
                            <button className="render-button" onClick={renderModel}>
                                <span className="renderbutton-text">Render 3D</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}