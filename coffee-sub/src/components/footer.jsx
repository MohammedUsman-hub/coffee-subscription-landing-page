import React, { Component } from 'react'    ;
import '../index.css';

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Upbeat Code ${year}`}</footer>;
  };
  
  export default Footer;