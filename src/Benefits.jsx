import React from 'react';
import image from './images/image-computer.png';
import './css/benefits.css';

const Benefits = () => {
  return (
    <div className="section flex flex-col lg:flex-row mt-40">
      <img src={image} alt="computer" className="section section__img transform lg:scale-125"/>
      <div className="section lg:ml-80 text-center lg:text-left mt-10 lg:mt-0">
        <div className="section mb-10">
          <h3 className="font-bold text-xl mb-2">Quick Search</h3>
          <p className="font-thin">Easily search your snippet by content,
            category, web address, application, and more.
          </p>
        </div>
        <div className="section mb-10">
          <h3 className="font-bold text-xl mb-2">iCloud Sync</h3>
          <p className="font-thin">Instantly saves and sync snippets across all your devices</p>
        </div>
        <div className="section mb-10">
          <h3 className="font-bold text-xl mb-2">Complete History</h3>
          <p className="font-thin">Retrieve any snippets from the first moment you started using the app</p>
        </div>
      </div>
    </div>
  )
}

export default Benefits;