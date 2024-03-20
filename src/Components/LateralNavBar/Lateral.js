import React, { useCallback, useState } from "react"
import "./Lateral.css"
import SVG from "../SVGProp/SVG"
import Graph from "../GraphProp/Graph"
import Automated from "../AutomatedProp/Automated"

export default function LateralNavBar(props){
    const arrayOfButtons = [
        {name: "Graph", icon: "chart-column"},
        {name: "Automated", icon: "robot"}
    ]

    const [selectedButton, setSelectedButton] = useState(null);
    const [clickedButton, setClickedButton] = useState(null);

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
                    <button className={`button ${selectedButton === button.name ? 'active' : ''} ${clickedButton === button.name ? 'clicked' : ''}`} 
                    key={index} 
                    onClick={() => {
                        evt.preventDefault();
                        handleSelectedComponent({component: button.name === 'Graph' ? <Graph /> : <Automated />, name: button.name});
                        handleButtonClick(button.name, evt);
                    }}
                    >
                        <SVG name={button.icon} style={{}} />
                    </button>
                ))}
            </div>
        </div>
    )
}
