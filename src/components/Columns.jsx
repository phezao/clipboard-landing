import React from 'react';
import blacklist from '../images/icon-blacklist.svg';
import preview from '../images/icon-preview.svg';
import text from '../images/icon-text.svg';

const Column = () => {
  return (
    <div className="flex flex-col lg:flex-row text-center justify-around mb-20">
      <div className="column__block mb-16">
        <img src={blacklist} alt="blacklist icon" className="mx-auto mb-4 lg:mb-10"/>
        <h3 className="font-bold text-2xl mb-4">Create Blacklists</h3>
        <p className="font-thin lg:w-96">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
      </div>
      <div className="column__block mb-16">
        <img src={text} alt="text icon" className="mx-auto mb-4 lg:mb-10"/>
        <h3 className="font-bold text-2xl mb-4">Plain text snippets</h3>
        <p className="font-thin lg:w-96">Remove unwanted formatting from copied text for a consistent look.</p>
      </div>
      <div className="column__block mb-16">
        <img src={preview} alt="preview icon" className="mx-auto mb-4 lg:mb-10"/>
        <h3 className="font-bold text-2xl mb-4">Sneak preview</h3>
        <p className="font-thin lg:w-96">Quick preview of all snippets on your Clipboard for easy access.</p>
      </div>
    </div>
  )
}

export default Column;