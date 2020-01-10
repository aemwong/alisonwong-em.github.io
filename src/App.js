import React from 'react';
import './App.css';
import colors from './assets/sass/colors';
import Landing from './components/Landing/Landing';
import Gradient from './components/Gradient/Gradient';
import Projects from './components/Projects/Projects';
import WorkExp from './components/WorkExp/WorkExp';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import StrumMaster from './components/ProjectDetails/StrumMaster';
import Coorporation from './components/ProjectDetails/Coorporation';
import HandLettering from './components/ProjectDetails/HandLettering';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Landing />
            <Gradient color1={colors.white} color2={colors.lightPurple} height="200px" />
            <Projects />
            <Gradient color1={colors.lightPurple} color2={colors.pink} height="200px" />
            <WorkExp />
            <Gradient color1={colors.pink} color2={colors.white} height="80px" />
            <About />
            <Footer />
          </ Route>
          <Route path="/projects/strumMaster"><StrumMaster /></Route>
          <Route path="/projects/coorporation"><Coorporation /></Route>
          <Route path="/projects/handLettering"><HandLettering /></Route>
        </Switch>
      </Router>

    </div >
  );
}

export default App;
