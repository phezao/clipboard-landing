import React from 'react';
import google from '../images/logo-google.png';
import ibm from '../images/logo-ibm.png';
import microsoft from '../images/logo-microsoft.png';
import hp from '../images/logo-hp.png';
import vector from '../images/logo-vector-graphics.png';

const Testimonials = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly mt-64">
      <img src={google} alt="company logo" className="object-none"/>
      <img src={ibm} alt="company logo" className="object-none"/>
      <img src={microsoft} alt="company logo" className="object-none"/>
      <img src={hp} alt="company logo" className="object-none"/>
      <img src={vector} alt="company logo" className="object-none"/>
    </div>
  )
}

export default Testimonials;