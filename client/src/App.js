import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Landing from './components/Landing';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <AppNavbar />
      <Landing />
       <Footer/>
      </div>
       );
  }
}

export default App;
