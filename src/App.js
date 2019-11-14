import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import Gradient from './components/Gradient/Gradient';
import colors from './assets/sass/colors';

function App() {
  

  
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
        <Landing></Landing>
        <Gradient color1={colors.white} color2={colors.lightPurple} />
        <Projects></Projects>      
    </div>
  );
}

export default App;
