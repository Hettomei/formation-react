import React from 'react';
import logo from './shared/consertoLogo.svg'; // Tell Webpack this JS file uses this image
import reactIcon from './shared/React-icon.svg'; // Tell Webpack this JS file uses this image
import email from './constant/email';

const Home = () => (
  <div>
    <div className="text-center">
      <h2><img className="home-logo" src={logo} alt="Logo" /></h2>
      <h1>-</h1>
      <h1>Formation React<img style={ { width: '140px' } } className="react-logo" src={reactIcon} alt="react Logo" /></h1>
    </div>
    <p>{email}</p>
  </div>
)

export default Home;
