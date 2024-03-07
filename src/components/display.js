import React from "react";
import { Component } from "react";
import Navbar from "./navbar";
import Lockscreen from "./lockscreen";
import "../css/display.css";

// Display is parent component for navbar and lockscreen
class Display extends Component {
  render() {
    const {
      songIndex,
      playing,
      active,
      musicItems,
      menuItem,
      currentMenu,
      songItems,
      audio,
      songUrl,
      songImgUrl,
      wallpaper,
      wallpaperItems,
      noty,
      setNoty,
      notyfytext,
    } = this.props;
    return (
      <>
        <div className="display">
          <Navbar noty={noty} setNoty={setNoty} playing={playing} notyfytext={notyfytext}/>
        </div>
      </>
    );
  }
}

export default Display;
