import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
        <Landing></Landing>
        <Projects></Projects>      
    </div>
  );
}

export default App;
