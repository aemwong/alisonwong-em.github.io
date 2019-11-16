import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import WorkExp from './components/WorkExp/WorkExp';
import Gradient from './components/Gradient/Gradient';
import colors from './assets/sass/colors';

function App() {
  

  
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
        <Landing />
        <Gradient color1={colors.white} color2={colors.lightPurple} />
        <Projects />     
        <Gradient color1={colors.lightPurple} color2={colors.pink} />
        <WorkExp />
    </div>
  );
}

export default App;
