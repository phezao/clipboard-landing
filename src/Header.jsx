import React from 'react';
import './css/header.css';
import logo from './images/logo.svg';

const Header = (props) => {
  return (
    <div className="header header--margin">
      <img src={logo} alt="logo" className="mx-auto mb-10"/>
      <h1 className="header text-4xl lg:text-5xl mb-6 font-bold">A history of everything you copy</h1>
      <p className="header lg:w-2/5 text-xl font-thin mb-20">Clipboard allows you to track and organize everything you 
  copy. Instantly access your clipboard on all your devices.</p>
      {props.children}
    </div>
  )
}

export default Header;