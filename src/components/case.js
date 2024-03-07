import React from "react";
import { Component } from "react";
import Display from "./display";
import Wheel from "./wheel";
import "../css/case.css"
class Case extends Component {
  render() {
    const {
      active,
      menuItem,
      musicItems,
      songImgItemURL,
      wallpaperItems,
      songItems,
      songIndex,
      lenthMenuKey,
      menuMapping,
      currentMenu,
      navigatiStack,
      songUrl,
      playing,
      theme,
      audio,
      songImgUrl,
      wheelColur,
      wallpaper,
      noty,
      notyfytext,
      menuBackward,
      menuForward,
      activeMenuUpdate,
      togglePlayPause,
      songForward,
      songReverse,
      setNoty,
    } = this.props;
    return (
      <>
        <div className="case-container">
          <div style={{ backgroundColor: theme }} className="case">
            <Display
              songIndex={songIndex}
              playing={playing}
              active={active}
              musicItems={musicItems}
              menuItem={menuItem}
              currentMenu={currentMenu}
              songItems={songItems}
              audio={audio}
              songUrl={songUrl}
              songImgUrl={songImgUrl}
              wallpaper={wallpaper}
              wallpaperItems={wallpaperItems}
              noty={noty}
              setNoty={setNoty}
              notyfytext={notyfytext}
            />
            <Wheel
              active={active}
              theme={theme}
              menuItem={menuItem}
              currentMenu={currentMenu}
              menuForward={menuForward}
              menuBackward={menuBackward}
              togglePlayPause={togglePlayPause}
              activeMenuUpdate={activeMenuUpdate}
              songForward={songForward}
              songReverse={songReverse}
              wheelColur={wheelColur}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Case;
