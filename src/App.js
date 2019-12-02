import React from 'react';
// import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import WorkExp from './components/WorkExp/WorkExp';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Gradient from './components/Gradient/Gradient';
import colors from './assets/sass/colors';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

function App() {
  

  
  return (
    <div className="App">
        <Landing />
        <Gradient color1={colors.white} color2={colors.lightPurple} height="200px" />
        <Projects />     
        <Gradient color1={colors.lightPurple} color2={colors.pink} height="200px"/>
        <WorkExp />
        <Gradient color1={colors.pink} color2={colors.white} height="80px"/>
        <About />
        <Footer />
        <Gradient color1={colors.white} color2={colors.darkGray} height="500px"/>
      
      <ProjectDetails/>

    </div>
  );
}

export default App;
// export default withRouter(App);
