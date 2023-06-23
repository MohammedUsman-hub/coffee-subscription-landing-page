import React, { Component } from 'react';
import '../index.css';

import Facebook from '../images/fb.png'
import Instagram from '../images/insta.png'
import Twitter from '../images/tw.png'

export default class SmLogo extends Component{
    render(){
        return(
            <div className='smLogo'>
                <img className='fb' src={Facebook}></img>
                <img className='insta' src={Instagram}></img>
                <img className='tw' src={Twitter}></img>
            </div>
        )
    }
}