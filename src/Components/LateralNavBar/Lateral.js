import React, { useCallback, useState } from "react"
import "./Lateral.css"
import SVG from "../SVGProp/SVG"
import Graph from "../GraphProp/Graph"
import Automated from "../AutomatedProp/Automated"
import Buoyancy from "../BuoyancyProp/Buoyancy"

export default function LateralNavBar(props){
    const arrayOfButtons = [
        {name: "Graph", icon: "chart-column", },
        {name: "Buoyancy", icon: "droplet"},
        {name: "Automated", icon: "robot"}
    ]

    const [selectedButton, setSelectedButton] = useState(null);
    const [clickedButton, setClickedButton] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleSelectedComponent = useCallback((button) => {
        props.handleSelectedComponent(button.component);
        setSelectedButton(button.name);
    }, [props.handleSelectedComponent]);

    const handleButtonClick = (buttonName, evt) => {
        evt.preventDefault();
        setClickedButton(buttonName);
    }

    return(
        <div className="lateral-navbar">
            <div className="buttons-container">
                {arrayOfButtons.map((button, index) => (
                    <button className={`button ${selectedButton === button.name ? 'active' : ''} 
                    ${clickedButton === button.name ? 'clicked' : ''}`} 
                    key={index} 
                    onClick={(evt) => {
                        evt.preventDefault();
                        handleSelectedComponent({component: button.name === 'Graph' ? <Graph /> : button.name === 'Buoyancy' ? <Buoyancy /> : <Automated />, name: button.name});
                        handleButtonClick(button.name, evt);
                    }}
                    >
                        <SVG name={button.icon} style={{}} />
                    </button>
                ))}
            </div>
            <div className="component-container">{selectedComponent}</div>
        </div>
    )
}
