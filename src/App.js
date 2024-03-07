import React from "react";
import { Component } from "react";

// imports songs here
import song1 from "./static/songs/yashoda.mp3";
import song2 from "./static/songs/Aank.mp3";
import song3 from "./static/songs/bholi.mp3";
import song4 from "./static/songs/challa.mp3";

// imports song images here
import songImg1 from "./static/bholli.jpg";
import songImg2 from "./static/challa.jpg";
import songImg3 from "./static/song1.jpg";
import songImg4 from "./static/yashoda.jpg";

// imports wallpapers here
import wallpapers1 from "./static/wallpaper1.jpeg";
import wallpapers2 from "./static/wallpaper2.jpeg";
import wallpapers3 from "./static/wallpaper3.jpeg";
import Case from "./components/case";

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      menuItem: ["Now Playing", "Music", "Games", "Setting"],
      musicItems: [song1, song2, song3, song4],
      songImgItemURL: [songImg1, songImg2, songImg3, songImg4],
      wallpaperItems: [wallpapers1, wallpapers2, wallpapers3],
      songItems: ["yashoda", "Aank", "bholi", "challa"],
      songIndex: 0, // current song display and play
      lenthMenuKey: { "-1": 3, 1: 2, 4: 4, 8: 4, 3: 2, 9: 3, 10: 2 },
      menuMapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8, 9, 10] },
      currentMenu: -2,
      navigatiStack: [],
      songUrl: song1,
      playing: false,
      theme: "rgb(210,210,210)",
      audio: new Audio(song1),
      songImgUrl: songImg1,
      wheelColur: "white",
      wallpaper: 0,
      noty: false,
      notyfytext: "wallpaper change",
    };
  }

  // helper function
  helperSong = (e) => {
    if (this.state.currentMenu === -2) {
      return;
    }

    if (this.state.playing === false) {
      return;
    }
  };

  // function for song forwarding
  songForward = (e) => {
    // if (this.state.currentMenu === -2) {
    //   return;
    // }

    // if (this.state.playing === false) {
    //   return;
    // }

    this.helperSong(e);

    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;

      if (songIndex === this.state.songImgUrl.length - 1) {
        songIndex = 0;
      } else {
        songIndex++;
      }

      const songUrl = this.state.songImgItemURL[songIndex];
      const songImgUrl = this.state.songImgItemURL[songIndex];

      this.setState(
        {
          songIndex: songIndex,
          songImgUrl: songImgUrl,
          songUrl: songUrl,
          audio: new Audio(songUrl),
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;

      this.setState((prevState) => {
        prevState.audio.currentTime += interval;
        return prevState;
      });
    }
  };

  // function for song Revesing

  songReverse = (e) => {
    // if (this.state.currentMenu === -2) {
    //   return;
    // }

    // if (this.state.playing === false) {
    //   return;
    // }
    this.helperSong(e);

    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;

      if (songIndex === 0) {
        songIndex = this.state.songImgUrl.length - 1;
      } else {
        songIndex--;
      }

      const songUrl = this.state.songImgItemURL[songIndex];
      const songImgUrl = this.state.songImgItemURL[songIndex];

      this.setState(
        {
          songIndex: songIndex,
          songImgUrl: songImgUrl,
          songUrl: songUrl,
          audio: new Audio(songUrl),
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;

      this.setState((prevState) => {
        prevState.audio.currentTime -= interval;
        return prevState;
      });
    }
  };

  // toggle function for play-pause
  togglePlayPause = () => {
    if (this.state.currentMenu === -2) {
      return;
    }

    if ((this.state.playing = true)) {
      this.setState({ playing: false });
      this.state.audio.pause();
    }

    if ((this.state.playing = false)) {
      this.setState({ playing: true });
      this.state.audio.play();
    }
  };

  // function for updating active menu
  activeMenuUpdate = (direction, menu) => {
    if (
      menu !== -1 &&
      menu !== 1 &&
      menu !== 4 &&
      menu !== 8 &&
      menu !== 9 &&
      menu !== 10
    ) {
      return;
    }

    let min = 0;
    let max = 0;

    max = this.state.lenthMenuKey[menu];
    if (direction === 1) {
      if (this.state.active >= max) {
        this.setState({ active: min });
      } else {
        this.setState({ active: this.state.active + 1 });
      }
    } else {
      if (this.state.active <= min) {
        this.setState({ active: max });
      } else {
        this.setState({ active: this.state.active - 1 });
      }
    }
  };

  // function for change the theme
  setTheme = (id) => {
    let theme = "";
    if (id === 0) {
      theme = "#fofofo";
    } else if (id === 1) {
      theme = "#555d50";
    } else if (id === 3) {
      theme = "#01CDDA";
    } else if (id === 4) {
      theme = "#c4aeeed";
    }

    this.setState({ theme: theme, noty: true, notyfytext: "Theme Change" });
    return;
  };

  // function to update wallpapers

  setWallpaper = (id) => {
    this.setState({
      wallpaper: id,
      noty: true,
      notyfytext: "Wallpaper Change",
    });
    return;
  };

  // function for wheel colour upadete

  setWheelColur = (id) => {
    let wheelcolur = "";

    if (id === 1) {
      wheelcolur = "#212121";
    } else if (id === 2) {
      wheelcolur = "red";
    } else if (id === 3) {
      wheelcolur = "blue";
    }

    this.setState({
      wheelcolur: wheelcolur,
      noty: true,
      notyfytext: "Wheel Colur Change",
    });
  };

  // function to take backward menu

  menuBackward = () => {
    const navigatiStack = this.state.navigatiStack.slice();

    if (this.state.currentMenu === -2) {
      return;
    } else {
      const prevId = navigatiStack.pop();
      this.setState({
        currentMenu: prevId,
        navigatiStack: navigatiStack,
        active: 0,
      });
      return;
    }
  };

  // function to change the song from music menu

  changePlayingSong = (id, navigatiStack) => {
    const songUrl = this.state.songImgUrl[id];
    const songImgUrl = this.state.songImgItemURL[id];

    this.state.audio.pause();
    this.setState(
      {
        currentMenu: 7,
        songUrl: songUrl,
        navigatiStack: navigatiStack,
        active: 0,
        playing: true,
        songIndex: id,
        audio: new Audio(songUrl),
        songImgUrl: songImgUrl,
      },
      () => {
        this.state.audio.play();
        return;
      }
    );
  };

  // function to take menu forward

  menuForward = (id, fromMenu) => {
    const navigatiStack = this.state.navigatiStack.slice();

    if (
      fromMenu !== -2 &&
      fromMenu !== -2 &&
      fromMenu !== 1 &&
      fromMenu !== 4 &&
      fromMenu !== 3 &&
      fromMenu !== 8 &&
      fromMenu !== 9 &&
      fromMenu !== 0 &&
      fromMenu !== 7 &&
      fromMenu !== 10
    ) {
      return;
    }

    if (fromMenu === -1) {
      navigatiStack.push(this.state.currentMenu);
      this.setState({
        currentMenu: id,
        navigatiStack: navigatiStack,
        active: 0,
      });

      return;
    }

    if (fromMenu === -2) {
      navigatiStack.push(this.state.currentMenu);
      this.setState({
        currentMenu: -1,
        navigatiStack: navigatiStack,
        active: 0,
      });

      return;
    }

    if (fromMenu === 7 || fromMenu === 0) {
      this.togglePlayPause();
      return;
    }

    if (fromMenu === 8) {
      this.setTheme(id);
      return;
    }

    if (fromMenu === 9) {
      this.setWheelColur(id);
      return;
    }

    if (fromMenu === 10) {
      this.setWallpaper(id);
      return;
    }

    navigatiStack.push(this.state.currentMenu);

    if (fromMenu === 4) {
      this.changePlayingSong(id, navigatiStack, fromMenu);
      return;
    }

    const currentMenuId = this.state.menuMapping[id];

    this.setState({
      currentMenu: currentMenuId,
      navigatiStack: navigatiStack,
      active: 0,
    });
  };

  // function for notification

  setNoty = () => {
    this.setState({ noty: false });
    return;
  };

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
    } = this.state;
    return (
      <>
        <Case
          songIndex={songIndex}
          active={active}
          menuItem={menuItem}
          musicItems={musicItems}
          currentMenuId={currentMenu}
          menuBackward={this.menuBackward}
          menuForward={this.menuForward}
          activeMenuUpdate={this.activeMenuUpdate}
          togglePlayPause={this.togglePlayPause}
          songItems={songItems}
          playing={playing}
          theme={theme}
          audio={audio}
          songUrl={songUrl}
          songImgUrl={songImgUrl}
          songForward={this.songForward}
          songReverse={this.songReverse}
          wheelColur={wheelColur}
          wallpaper={wallpaper}
          wallpaperItems={wallpaperItems}
          noty={noty}
          setNoty={this.setNoty}
          notyfytext={notyfytext}
          songImgItemURL={songImgItemURL}
          lenthMenuKey={lenthMenuKey}
          menuMapping={menuMapping}
          navigatiStack={navigatiStack}
        />
      </>
    );
  }
}

export default App;
