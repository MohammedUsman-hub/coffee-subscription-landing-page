import React, { Component } from 'react';
import bg from "../images/coffee-bg.jpg";
import "../index.css";

export default class Bg extends Component {
    render(){
        return (<div>
            <img id='bg' src={bg}></img>
            <h2></h2>
        </div>
        );
    }
}