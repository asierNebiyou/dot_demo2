import React from 'react';
import Navbar from './components/navbar';
import Moviecards from './components/movieCards'; 
// import logo from '../assets/logo.svg';
// import '../public/bootstrap/css/bootstrap.min.css';
// import '../public/bootstrap/js/bootstrap.bundle.js';

class App extends React.Component {
  render() {
    
    return (
      <React.Fragment>
      <Navbar />
        <Moviecards />
      </React.Fragment>
    );
  }
}

export default App;