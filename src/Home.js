import React from 'react';
import logo from './shared/consertoLogo.svg'; // Tell Webpack this JS file uses this image

const Home = () => (
  <div className="text-center">
    <h2><img className="home-logo" src={logo} alt="Logo" /></h2>
    <h1>-</h1>
    <h1>Formation React</h1>
  </div>
)

export default Home;
