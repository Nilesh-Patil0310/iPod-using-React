import React from "react";
import { Component } from "react";
import {FaForward} from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa6";
import "../css/wheel.css"
class Wheel extends Component {
  render() {
    return (
      <>
        <div className="wheel-container" id="wheel-container">
          <div className="wheel" id="wheel">
            <div className="control" id="menu">
                <div>Menu</div>
            </div>
            <div className="control" id="forward">
            <FaForward />
            </div>
            <div className="control" id="play-pause">
                <div>
                    <FaPlay />
                    <FaPause />
                </div>
            </div>
            <div className="control" id="reverse">
            <FaBackward />
            </div>
          </div>

          <div className="blank" id="blank"></div>
        </div>
        
      </>
    );
  }
}

export default Wheel;
