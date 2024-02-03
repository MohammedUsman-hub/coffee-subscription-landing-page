import React, { Component } from "react";
import "../index.css";

export default class NavBar extends Component{
    render(){
        return(
            <div className="nav-bar">
                <span className="nav-bar-home">Home</span>
                <span className="nav-bar-about">About</span>
                <span className="nav-bar-product">Product</span>
                <span className="nav-bar-contact">Contact</span>
            </div>
        )
    }
}