import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './Header.scss';

class Header extends Component {
    scrollTo(location) {
        const HEIGHT = 50;
        const node = document.getElementById(location);
        const y = node.getBoundingClientRect().top + window.pageYOffset - HEIGHT;
    
        window.scrollTo({ top: y, behavior: "smooth" });
      }

    render() {
        return (
            <Box display="flex" flexDirection="row" justifyContent="flex-end" className="headerContainer"
                flexGrow={1} flexWrap="wrap">
                <Box display="flex">
                    <a className="nav" onClick={this.scrollTo.bind(this, "projects")}>Projects</a>
                    <a className="nav"  onClick={this.scrollTo.bind(this, "experience")}>Experience</a>
                    <a className="nav" onClick={this.scrollTo.bind(this, "about")}>About</a>
                </Box>
            </Box >
        )
    }
}

export default Header;