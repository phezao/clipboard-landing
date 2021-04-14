import React from 'react';
import logo from './images/logo.svg';


const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row pt-8 pb-16 lg:justify-between text-center">
          <img src={logo} alt="logo" className="transform lg:scale-50 scale-50" />
          <div className="flex flex-col mx-auto mb-4">
            <a href="/" className="mb-4 hover:underline">FAQs</a>
            <a href="/" className="hover:underline">Contact Us</a>
          </div>
          <div className="flex flex-col mx-auto mb-4">
            <a href="/" className="mb-4 hover:underline">Privacy Policy</a>
            <a href="/" className="hover:underline">Press Kit</a>
          </div>
          <a href="/" className="mx-auto mb-8 hover:underline">Install Guide</a>
          <div className="flex text-2xl mx-auto">
            <a href="/"><i className="fab fa-facebook-square"></i></a>
            <a href="/"><i className="fab fa-twitter mx-4"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;