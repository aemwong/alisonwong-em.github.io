import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

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
                flexWrap="wrap" >
                {/* <Box ml={3}>
                    <a className="nav" id='topBtn' onClick={this.scrollTo.bind(this, "home")}>
                        <FontAwesomeIcon icon={faChevronCircleUp}></FontAwesomeIcon></a>
                </Box> */}

                <Box display="flex" mr={3}>
                    <a className="nav" onClick={this.scrollTo.bind(this, "projects")}>Projects</a>
                    <a className="nav" onClick={this.scrollTo.bind(this, "experience")}>Experience</a>
                    <a className="nav" onClick={this.scrollTo.bind(this, "about")}>About</a>
                </Box>
            </Box >
        )
    }
}

export default Header;