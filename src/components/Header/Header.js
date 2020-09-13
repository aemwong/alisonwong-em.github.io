import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './Header.scss';
import LogoBlue from '../../assets/img/LOGO 2.png';
import LogoLBlue from '../../assets/img/LOGO_lblue.png';

class Header extends Component {
    scrollTo(location) {
        const HEIGHT = 50;
        const node = document.getElementById(location);
        const y = node.getBoundingClientRect().top + window.pageYOffset - HEIGHT;

        window.scrollTo({ top: y, behavior: "smooth" });
    }

    render() {
        return (
            <Box className="headerContainer" >
                <Box className="leftHeader">
                    <div className="nav" id='topBtn' onClick={this.scrollTo.bind(this, "home")}>
                        <img src={LogoLBlue} className="logo" id="logoGray" alt=""></img>
                        <img src={LogoBlue} className="logo" id="logoBlue" alt=""></img>
                    </div>
                </Box>

                <Box className="rightHeader">
                    <div className="nav" onClick={this.scrollTo.bind(this, "projects")}>Projects</div>
                    <div className="nav" onClick={this.scrollTo.bind(this, "experience")}>Experience</div>
                    <div className="nav" onClick={this.scrollTo.bind(this, "about")}>About</div>
                </Box>
            </Box >
        )
    }
}

export default Header;