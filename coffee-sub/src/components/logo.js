import React, { Component } from "react";
import logo from "../images/logo.jpg"
import "../index.css";

export default class NavBar extends Component{
    render(){
        return(
            <div className="logoDiv">
                <img className="logo" src={logo}></img>
                
            </div>
        )
    }
}