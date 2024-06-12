import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import logo from "../../Images/logo.ico";
import SliderComponent from '../SliderComponent/SliderComponent';
import SVG from '../SVGProp/SVG';
import PropTypes from 'prop-types';

const Navbar = ({connections, changeCamera, getSliderValue}) => {
  const [speed, setSpeed] = useState(100);

  const updateSpeed = (newSpeed) => {
      setSpeed(newSpeed);
  }

  const [color, setColor] = useState("#bf5646");
  const updateColor = (connected) => {
      setColor(connected ? "#b7f944" : "#bf5646")
  }
  Navbar.propTypes = {
    changeCamera: PropTypes.func,
    connections: PropTypes.arrayOf(PropTypes.bool)
  }
  

  return (
    <nav>
        <div className="nav-links">
            <ol className='Indicators-List'>
                <li><h2 className="SpeedContainer">Speed: {speed}</h2></li>
            </ol>
            <SVG name='gauge-simple'color="white"/>
            <SliderComponent onChange={updateSpeed} getSliderValue={getSliderValue}/>

        </div>
        <Link to="/copilot" className="link-styling">Copilot</Link>
        <button className="ChangeCamera" onClick={changeCamera}><SVG name='camera-retro'color="white"/></button>
    </nav>
  );
}

export default Navbar;
