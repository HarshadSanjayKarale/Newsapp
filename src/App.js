// App.js
import React, { Component } from 'react';
import News from './components/News.js';
import Navbar from './components/Navbar.js';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <News/>
      </>
    );
  }
}
