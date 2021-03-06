import React, { PureComponent } from 'react';
import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Employment from './Employment';
import Education from './Education';

class App extends PureComponent {
  render() {
    return (
      <div className="background">
        <div className="information-container">
          <Header/>
          <AboutMe/>
          <Projects/>
          <Employment/>
          <Education/>
        </div>
      </div>
    );
  }
}

export default App;
