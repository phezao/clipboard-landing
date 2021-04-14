import React from 'react';
import '../css/button.css'

const Button = (props) => {
  return (
    <a href="/" className={props.classes}>{props.text}</a>
  )
}

export default Button;