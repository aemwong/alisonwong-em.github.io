import React from 'react';
import './App.css';
import colors from './assets/sass/colors';
import Landing from './components/Landing/Landing';
import Gradient from './components/Gradient/Gradient';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import StrumMaster from './components/ProjectDetails/StrumMaster';
import Coorporation from './components/ProjectDetails/Coorporation';
import HandLettering from './components/ProjectDetails/HandLettering';
import BlaisePlanTrip from './components/ProjectDetails/BlaisePlanTrip';
import Worldclass from './components/ProjectDetails/Worldclass';

function App() {

  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <Header />
            <Landing />
            <Gradient color1={colors.white} color2={colors.lightBlue} height="200px" />
            <Projects />
            <Gradient color1={colors.lightBlue} color2={colors.white} height="200px" />
            <About />
            <Footer />
          </ Route>
          <Route path="/projects/strumMaster"><StrumMaster /></Route>
          <Route path="/projects/coorporation"><Coorporation /></Route>
          <Route path="/projects/handLettering"><HandLettering /></Route>
          <Route path="/projects/planTrip"><BlaisePlanTrip /></Route>
          <Route path="/projects/worldclass"><Worldclass /></Route>
        </Switch>
      </Router>

    </div >
  );
}

export default App;
