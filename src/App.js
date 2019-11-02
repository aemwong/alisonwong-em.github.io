import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Landing/Landing';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
        <Landing></Landing>
        <Projects></Projects>      
    </div>
  );
}

export default App;
