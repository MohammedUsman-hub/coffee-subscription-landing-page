import React, { Component } from 'react';
import bg from "../images/coffee-bg.jpg";
import "../index.css";

export default class Bg extends Component {
    render(){
        return (
        <div id='bg'>
            <img  src={bg}></img>
            
        </div>
        );
    }
}