import React from 'react';
import './css/app.css';
import Button from './components/Button';
import Center from './components/Center';
import Header from './Header';
import Benefits from './Benefits';
import devices from './images/image-devices.png'
import Column from './components/Columns';
import Testimonials from './components/Testimonials';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <Header>
        <div className="flex lg:justify-center flex-col lg:flex-row">
          <Button text="Download for iOS" classes="button button__ios" />
          <Button text="Download for Mac" classes="button button__mac" />
        </div>
      </Header>
      <Center 
        title="Keep track of your snippets"
        content="Clipboard instantly stores any item you copy in the cloud,
        meaning you can access your snippets immediately on all your 
        devices. Our Mac and iOS apps will help you organize everything." 
      />

      <Benefits />

      <Center
        title="Access Clipboard anywhere"
        content="Whether you’re on the go, or at your computer, you can access all your Clipboard 
        snippets in a few simple clicks."
      />

      <img src={devices} alt="" className="mx-auto"/>

      <Center
        title="Supercharge your workflow"
        content="We’ve got the tools to boost your productivity."
      />

      <Column />

      <Testimonials />

      <Center
        title="Clipboard for iOS and Mac OS"
        content="Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
        and you’re ready to start adding to your clipboard."
      />

      <div className="flex justify-center mb-56">
        <div className="flex lg:flex-row flex-col">
          <Button text="Download for iOS" classes="button button__ios" />
          <Button text="Download for Mac" classes="button button__mac" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App;