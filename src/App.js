import React, { Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';
import ImgForm from './components/ImgForm/ImgForm';

class App extends Component {
  render() {
  return (
  <div className='App'>
    <div style={{display: 'flex', justifyContent: 'space-between' }}>
      <Logo />
      <Navigation />
      </div>
      <ImgForm/>
  </div>
  );
}
}


export default App;
