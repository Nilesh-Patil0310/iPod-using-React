import React from "react";
import { Component } from "react";
import "../css/lockscreen.css"

// child component of Dispay
class Lockscreen extends Component{
render(){
    return(
        <>
        <div className="button-div-lock">
            <h3>Press center Button to Unlock</h3>
        </div>
        </>
    )
}
}

export default Lockscreen;