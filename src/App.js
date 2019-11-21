import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import WorkExp from './components/WorkExp/WorkExp';
import About from './components/About/About';
import Gradient from './components/Gradient/Gradient';
import colors from './assets/sass/colors';

function App() {
  

  
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
        <Landing />
        <Gradient color1={colors.white} color2={colors.lightPurple} height="200px" />
        <Projects />     
        <Gradient color1={colors.lightPurple} color2={colors.pink} height="200px"/>
        <WorkExp />
        <Gradient color1={colors.pink} color2={colors.white} height="80px"/>
        <About />
    </div>
  );
}

export default App;
